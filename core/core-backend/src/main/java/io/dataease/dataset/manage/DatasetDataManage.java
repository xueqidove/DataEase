package io.dataease.dataset.manage;

import io.dataease.api.dataset.dto.DatasetTableDTO;
import io.dataease.api.dataset.dto.DatasetTableFieldDTO;
import io.dataease.api.dataset.union.DatasetGroupInfoDTO;
import io.dataease.api.dataset.union.DatasetTableInfoDTO;
import io.dataease.api.dataset.union.model.SQLMeta;
import io.dataease.api.ds.vo.TableField;
import io.dataease.dataset.constant.DatasetTableType;
import io.dataease.dataset.dao.auto.entity.CoreDatasetTable;
import io.dataease.dataset.dao.auto.entity.CoreDatasetTableField;
import io.dataease.dataset.dto.DatasourceSchemaDTO;
import io.dataease.dataset.utils.FieldUtils;
import io.dataease.dataset.utils.TableUtils;
import io.dataease.datasource.dao.auto.entity.CoreDatasource;
import io.dataease.datasource.dao.auto.mapper.CoreDatasourceMapper;
import io.dataease.datasource.provider.CalciteProvider;
import io.dataease.datasource.request.DatasourceRequest;
import io.dataease.datasource.server.EngineServer;
import io.dataease.engine.constant.ExtFieldConstant;
import io.dataease.engine.constant.SQLConstants;
import io.dataease.engine.sql.SQLProvider;
import io.dataease.engine.trans.Field2SQLObj;
import io.dataease.engine.trans.Order2SQLObj;
import io.dataease.engine.trans.Table2SQLObj;
import io.dataease.utils.BeanUtils;
import io.dataease.utils.JsonUtil;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @Author Junjun
 */
@Component
public class DatasetDataManage {
    @Resource
    private DatasetSQLManage datasetSQLManage;
    @Resource
    private CalciteProvider calciteProvider;
    @Resource
    private CoreDatasourceMapper coreDatasourceMapper;
    @Resource
    private DatasetTableFieldManage datasetTableFieldManage;
    @Resource
    private DatasetTableManage datasetTableManage;
    @Resource
    private EngineServer engineServer;

    public List<DatasetTableFieldDTO> getTableFields(DatasetTableDTO datasetTableDTO) throws Exception {
        List<DatasetTableFieldDTO> list = null;
        List<TableField> tableFields = null;
        String type = datasetTableDTO.getType();
        DatasetTableInfoDTO tableInfoDTO = JsonUtil.parseObject(datasetTableDTO.getInfo(), DatasetTableInfoDTO.class);
        if (StringUtils.equalsIgnoreCase(type, DatasetTableType.DB) || StringUtils.equalsIgnoreCase(type, DatasetTableType.SQL)) {
            CoreDatasource coreDatasource = coreDatasourceMapper.selectById(datasetTableDTO.getDatasourceId());
            DatasourceSchemaDTO datasourceSchemaDTO = new DatasourceSchemaDTO();
            BeanUtils.copyBean(datasourceSchemaDTO, coreDatasource);
            datasourceSchemaDTO.setSchemaAlias(String.format(SQLConstants.SCHEMA, 0));

            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDsList(Map.of(datasourceSchemaDTO.getId(), datasourceSchemaDTO));
            if (StringUtils.equalsIgnoreCase(type, DatasetTableType.DB)) {
                // add table schema
                datasourceRequest.setQuery(TableUtils.tableName2Sql(datasourceSchemaDTO, tableInfoDTO.getTable()));
            } else {
                // todo add sql table schema
                datasourceRequest.setQuery(new String(Base64.getDecoder().decode(tableInfoDTO.getSql())));
            }
            // 获取数据源表的原始字段
            tableFields = (List<TableField>) calciteProvider.fetchResultField(datasourceRequest).get("fields");
        } else {
            // todo excel,api
            CoreDatasource coreDatasource = engineServer.getDeEngine();
            DatasourceSchemaDTO datasourceSchemaDTO = new DatasourceSchemaDTO();
            BeanUtils.copyBean(datasourceSchemaDTO, coreDatasource);
            datasourceSchemaDTO.setSchemaAlias(String.format(SQLConstants.SCHEMA, 0));

            DatasourceRequest datasourceRequest = new DatasourceRequest();
            datasourceRequest.setDsList(Map.of(datasourceSchemaDTO.getId(), datasourceSchemaDTO));
            datasourceRequest.setQuery(TableUtils.tableName2Sql(datasourceSchemaDTO, tableInfoDTO.getTable()));
            tableFields = (List<TableField>) calciteProvider.fetchResultField(datasourceRequest).get("fields");
        }

        CoreDatasetTable coreDatasetTable = datasetTableManage.selectById(datasetTableDTO.getId());
        if (ObjectUtils.isEmpty(coreDatasetTable)) {
            list = transFields(tableFields, true);
        } else {
            list = transFields(tableFields, false);
            // 获取数据库中保存的字段，与原始字段匹配后，确定字段checked状态
            List<CoreDatasetTableField> fields = datasetTableFieldManage.selectByDatasetTableId(datasetTableDTO.getId());
            // originName，type一致即判定为一致
            if (ObjectUtils.isNotEmpty(fields)) {
                list = list.stream().peek(ele -> {
                    boolean flag = false;
                    CoreDatasetTableField source = null;
                    for (CoreDatasetTableField f : fields) {
                        // 若为同字段，则checked=true，同时赋id
                        if (StringUtils.equalsIgnoreCase(ele.getOriginName(), f.getOriginName())
                                && StringUtils.equalsIgnoreCase(ele.getType(), f.getType())) {
                            flag = true;
                            source = f;
                            break;
                        }
                    }
                    if (flag && ObjectUtils.isNotEmpty(source)) {
                        BeanUtils.copyBean(ele, source);
                    }
                }).collect(Collectors.toList());
            }
        }
        return list;
    }

    public List<DatasetTableFieldDTO> transFields(List<TableField> tableFields, boolean defaultStatus) {
        return tableFields.stream().map(ele -> {
            DatasetTableFieldDTO dto = new DatasetTableFieldDTO();
//            dto.setId(IDUtils.snowID());
            dto.setName(StringUtils.isNotEmpty(ele.getRemarks()) ? ele.getRemarks() : ele.getFieldName());
            dto.setOriginName(ele.getFieldName());
            dto.setChecked(defaultStatus);
            dto.setType(ele.getType());
            dto.setDescription(ele.getRemarks());
            int deType = FieldUtils.transType2DeType(ele.getType());
            dto.setDeExtractType(deType);
            dto.setDeType(deType);
            dto.setGroupType(FieldUtils.transDeType2DQ(deType));
            return dto;
        }).collect(Collectors.toList());
    }

    public Map<String, Object> previewData(DatasetGroupInfoDTO datasetGroupInfoDTO) throws Exception {
        Map<String, Object> sqlMap = datasetSQLManage.getUnionSQLForEdit(datasetGroupInfoDTO);
        String sql = (String) sqlMap.get("sql");
        List<DatasetTableFieldDTO> fields = (List<DatasetTableFieldDTO>) sqlMap.get("field");
        List<DatasetTableFieldDTO> calcFields = fields.stream().filter(ele -> Objects.equals(ele.getExtField(), ExtFieldConstant.EXT_CALC)).collect(Collectors.toList());
        // build query sql
        SQLMeta sqlMeta = new SQLMeta();
        Table2SQLObj.table2sqlobj(sqlMeta, null, "(" + sql + ")");
        Field2SQLObj.field2sqlObj(sqlMeta, fields, calcFields);
        Order2SQLObj.getOrders(sqlMeta, fields, calcFields, datasetGroupInfoDTO.getSortFields());
        String querySQL = SQLProvider.createQuerySQL(sqlMeta, false);
        // 通过数据源请求数据
        Map<Long, DatasourceSchemaDTO> dsMap = (Map<Long, DatasourceSchemaDTO>) sqlMap.get("dsMap");
        // 调用数据源的calcite获得data
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setQuery(querySQL);
        datasourceRequest.setDsList(dsMap);
        Map<String, Object> data = calciteProvider.fetchResultField(datasourceRequest);
        Map<String, Object> map = new LinkedHashMap<>();
        // 重新构造data
        Map<String, Object> previewData = buildPreviewData(data, fields);
        map.put("data", previewData);
        map.put("allFields", fields);
        map.put("sql", Base64.getEncoder().encodeToString(querySQL.getBytes()));
        return map;
    }

    public Map<String, Object> previewDataWithLimit(DatasetGroupInfoDTO datasetGroupInfoDTO, int start, int count) throws Exception {
        Map<String, Object> sqlMap = datasetSQLManage.getUnionSQLForEdit(datasetGroupInfoDTO);
        String sql = (String) sqlMap.get("sql");
        List<DatasetTableFieldDTO> fields = (List<DatasetTableFieldDTO>) sqlMap.get("field");
        List<DatasetTableFieldDTO> calcFields = fields.stream().filter(ele -> Objects.equals(ele.getExtField(), ExtFieldConstant.EXT_CALC)).collect(Collectors.toList());
        // build query sql
        SQLMeta sqlMeta = new SQLMeta();
        Table2SQLObj.table2sqlobj(sqlMeta, null, "(" + sql + ")");
        Field2SQLObj.field2sqlObj(sqlMeta, fields, calcFields);
        Order2SQLObj.getOrders(sqlMeta, fields, calcFields, datasetGroupInfoDTO.getSortFields());
        String querySQL = SQLProvider.createQuerySQLWithLimit(sqlMeta, false, start, count);
        // 通过数据源请求数据
        Map<Long, DatasourceSchemaDTO> dsMap = (Map<Long, DatasourceSchemaDTO>) sqlMap.get("dsMap");
        // 调用数据源的calcite获得data
        DatasourceRequest datasourceRequest = new DatasourceRequest();
        datasourceRequest.setQuery(querySQL);
        datasourceRequest.setDsList(dsMap);
        Map<String, Object> data = calciteProvider.fetchResultField(datasourceRequest);
        Map<String, Object> map = new LinkedHashMap<>();
        // 重新构造data
        Map<String, Object> previewData = buildPreviewData(data, fields);
        map.put("data", previewData);
        map.put("allFields", fields);
        map.put("sql", Base64.getEncoder().encodeToString(querySQL.getBytes()));
        return map;
    }

    public Map<String, Object> buildPreviewData(Map<String, Object> data, List<DatasetTableFieldDTO> fields) {
        Map<String, Object> map = new LinkedHashMap<>();

//        List<TableField> fieldList = (List<TableField>) data.get("fields");
        List<String[]> dataList = (List<String[]>) data.get("data");

        List<LinkedHashMap<String, Object>> dataObjectList = new ArrayList<>();
        if (ObjectUtils.isNotEmpty(dataList)) {
            for (int i = 0; i < dataList.size(); i++) {
                String[] row = dataList.get(i);
                LinkedHashMap<String, Object> obj = new LinkedHashMap<>();
                if (row.length > 0) {
                    for (int j = 0; j < row.length; j++) {
                        obj.put(fields.get(j).getFieldShortName(), row[j]);
                    }
                }
                dataObjectList.add(obj);
            }
        }

        map.put("fields", fields);
        map.put("data", dataObjectList);
        return map;
    }
}
