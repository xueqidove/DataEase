package io.dataease.api.ds.vo;

import lombok.Data;

import java.util.List;

@Data
public class DatasourceConfiguration extends Configuration{
    private List<String> illegalParameters;
    private List<String> showTableSqls;

    public String getJdbc(){
        return "";
    }

    static public enum DatasourceType {
        API("API", "API"),
        Excel("Excel", "Excel"),
        mysql("mysql", "Mysql"),
        oracle("oracle", "ORACLE"),
        sqlServer("sqlServer", "Sqlserver");

        private String type;
        private String name;

        DatasourceType(String type, String name) {
            this.type = type;
            this.name = name;
        }

        public String getType() {
            return type;
        }

        public String getName() {
            return name;
        }
    }

    static public enum DatasourceCatalog {
        OLAP("OLAP", "OLAP"),
        OLTP("OLTP", "OLTP"),
        DATALAKE("DL", "DL"),
        LOCALFILE("LOCALFILE", "LOCALFILE"),
        API("API", "API");

        private String type;
        private String desc;

        DatasourceCatalog(String type, String desc) {
            this.type = type;
            this.desc = desc;
        }

        public String getType() {
            return type;
        }

        public String getDesc() {
            return desc;
        }
    }
}
