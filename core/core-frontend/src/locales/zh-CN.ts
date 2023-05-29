export default {
  common: {
    inputText: '请输入',
    add: '添加',
    account: '账号',
    email: '邮箱',
    phone: '手机号',
    pwd: '密码',
    require: '必填',
    personal_info: '个人信息',
    about: '关于',
    exit_system: '退出系统',
    letter_start: '必须以字母开头',
    required: '必填',
    operate: '操作',
    create_time: '创建时间',
    edit: '编辑',
    delete: '删除',
    please_input: '请输入',
    please_select: '请选择',
    cancel: '取消',
    sure: '确定',
    save: '保存',
    input_limit: '长度在 {0} 到 {1} 个字符',
    save_success: '保存成功',
    roger_that: '知道了',
    delete_success: '删除成功',
    copy: '复制',
    operating: '操作',
    label: '备注',
    search_keywords: '输入关键字搜索',
    detail: '详情',
    prev: '上一步',
    description: '描述',
    next: '下一步',
    name: '名称',
    input_name: '请输入名称',
    yes: '是',
    no: '否',
    every: '每',
    minute: '分钟',
    second: '秒',
    hour: '秒',
    day: '天',
    every_exec: '执行一次',
    cron_exp: 'cron表达式'
  },
  login: {
    welcome: '欢迎使用',
    btn: '登录',
    username_format: '3-10位字母数字下划线且以字母开头',
    pwd_format: '密码长度在5-15'
  },
  component: {
    columnList: '列表项',
    selectInfo: '请选择列表中要展示的信息',
    allSelect: '全选'
  },
  system: {
    user: '用户',
    role: '角色',
    addUser: '@:common.add@:system.user'
  },
  user: {
    change_password: '修改密码',
    name: '名称',
    role: '角色',
    state: '状态',
    default_pwd: '默认密码',
    confirm_delete: '确认删除该用户吗？',
    add_title: '添加用户',
    edit_title: '编辑用户'
  },
  role: {
    add_title: '添加角色',
    edit_title: '编辑角色',
    name: '角色名称',
    type: '角色类型',
    desc: '角色描述',
    average_role: '普通用户',
    org_admin: '组织管理员',
    confirm_delete: '确认删除该角色吗？',
    delete_tips:
      '<div id="u7755_text" class="text" style="font-size: 12px;"><p><span style="color:#F59A23;">友情提示，角色被删除后，归属于角色的用户将做如下处理：</span></p><p><span style="color:#7F7F7F;">1、用户拥有当前组织的其他角色，那么角色被删除后，将用户从该角色中移除。</span></p><p><span style="color:#7F7F7F;">2、该角色是用户在当前组织下拥有的唯一角色，但用户拥有其他组织下的角色，那么角色被删除后，用户也将从当前组织中移除。</span></p><p><span style="color:#7F7F7F;">3、该角色是用户在当前组织下拥有的唯一角色，用户在系统的其他组织下也没有任何角色，那么角色被删除后，用户也将从当前系统中删除。</span></p><p><span style="color:#7F7F7F;"><br></span></p></div>',
    confirm_unbind_user: '确定移除改用户吗',
    clear_in_system:
      '友情提示，从当前角色移除后，该用户已没有任何组织的任何角色，用户将从系统中删除。',
    clear_in_org:
      '友情提示，从当前角色移除后，该用户已没有当前组织的任何角色，将从当前组织中移除。',
    add_user: '为角色添加用户({0})',
    unbind_success: '移除成功',
    bind_success: '绑定成功'
  },
  org: {
    org_title: '组织管理',
    org_move: '组织迁移',
    add: '添加组织',
    name: '组织名称',
    sub_count: '下属组织数',
    search_placeholder: '请输入名称搜索',
    add_sub: '添加子组织',
    edit: '编辑组织',
    parent: '上级组织',
    default_cannot_move: '默认组织不能删除',
    cannot_delete: '无法删除',
    confirm_delete: '确认删除该组织吗？',
    delete_children_first: '请先删除子组织后，再删除当前组织',
    confirm_content: '友情提示，组织被删除后，组织下的资源也将被删除',
    give_up_resource: '放弃资源，直接删除',
    move_resource_first: '先迁移资源'
  },
  auth: {
    user_dimension: '按用户配置',
    resource_dimension: '按资源管理',
    user: '用户',
    role: '角色',
    resource: '资源权限',
    menu: '菜单和操作权限',
    panel: '仪表板',
    screen: '数据大屏',
    dataset: '数据集',
    datasource: '数据源',
    empty_desc: '请选择用户/角色以及资源类型',
    row_column: '行列权限设置',
    row_permission: '行权限规则',
    enable_row: '启用行权限',
    white_list: '白名单',
    white_user_not: '以上权限规则对白名单用户不生效',
    organization_or_role: '请选择组织或角色',
    column_permission: '列权限规则',
    enable_column: '启用列权限',
    search_by_field: '通过字段名称搜索',
    add_condition: '添加条件',
    add_relationship: '添加关系',
    filter_fields: '筛选字段',
    selct_filter_fields: '请选择筛选字段',
    enter_keywords: '请输关键字',
    screen_method: '筛选方式',
    select: '请选择',
    fixed_value: '固定值',
    default_method: '默认条件',
    select_all: '全 选',
    added: '已添加',
    manual_input: '手工输入',
    please_fill: '请一行填一个，最多添加500个,识别录入时会自动过滤重复的选项和已经添加过的选项',
    close: '关 闭',
    add: '添 加',
    sure: '确 定',
    uncommitted_tips: '有未提交的权限变更，是否提交？'
  },
  datasource: {
    datasource: '数据源',
    create: '新建数据源',
    config: '数据源配置',
    table: '数据源表',
    table_name: '表名',
    remark: '备注',
    column_name: '字段名',
    field_type: '字段类型',
    field_description: '字段描述',
    dl: '数据湖',
    other: '其他',
    local_file: '本地文件',
    select_ds_type: '选择数据源类型',
    ds_info: '录入数据源信息',
    sync_info: '数据同步设置',
    input_name: '请输入名称',
    input_limit_2_25: '2-25字符',
    input_limit_2_50: '2-50字符',
    data_source_configuration: '数据源配置',
    data_source_table: '数据源表',
    auth_method: '认证方式',
    passwd: '用户名密码',
    kerbers_info: '请确保 krb5.Conf、Keytab Key，已经添加到路径：/opt/dataease/conf',
    client_principal: 'Client Principal',
    keytab_Key_path: 'Keytab Key Path',
    please_select_left: '请从左侧选择',
    show_info: '数据源信息',
    type: '类型',
    please_choose_type: '请选择数据源类型',
    please_choose_data_type: '请选择计算模式',
    data_base: '数据库名称',
    user_name: '用户名',
    password: '密码',
    host: '主机名/IP地址',
    doris_host: 'Doris 地址',
    query_port: 'Query Port',
    http_port: 'Http Port',
    port: '端口',
    datasource_url: '地址',
    please_input_datasource_url: '请输入 Elasticsearch 地址，如: http://es_host:es_port',
    please_input_data_base: '请输入数据库名称',
    please_select_oracle_type: '选择连接类型',
    please_input_user_name: '请输入用户名',
    please_input_password: '请输入密码',
    please_input_host: '请输入主机',
    please_input_url: '请输入URL地址',
    please_input_port: '请输入端口',
    modify: '编辑数据源',
    copy: '复制数据源',
    validate_success: '校验成功',
    validate: '校验',
    search_by_name: '根据名称搜索',
    delete_warning: '确定要删除吗?',
    input_limit: '{num}字符',
    oracle_connection_type: '服务名/SID',
    oracle_sid: 'SID',
    oracle_service_name: '服务名',
    get_schema: '获取 Schema',
    schema: 'Schema',
    charset: '字符集',
    targetCharset: '目标字符集',
    please_choose_schema: '请选择数据库 Schema',
    please_choose_charset: '请选择数据库字符集',
    please_choose_targetCharset: '请选择目标字符集',
    edit_datasource_msg: '修改数据源信息，可能会导致该数据源下的数据集不可用，确认修改？',
    repeat_datasource_msg: '已经存在相同配置的数据源信息, ',
    confirm_save: '确认保存?',
    in_valid: '无效数据源',
    initial_pool_size: '初始连接数',
    min_pool_size: '最小连接数',
    max_pool_size: '最大连接数',
    max_idle_time: '最大空闲(秒)',
    bucket_num: 'Bucket 数量',
    replication_num: '副本数量',
    please_input_bucket_num: '请输入 Bucket 数量',
    please_input_replication_num: '请输入副本数量',
    acquire_increment: '增长数',
    connect_timeout: '连接超时(秒)',
    please_input_initial_pool_size: '请输入初始连接数',
    please_input_min_pool_size: '请输入最小连接数',
    please_input_max_pool_size: '请输入最大连接数',
    please_input_max_idle_time: '请输入最大空闲(秒)',
    please_input_acquire_increment: '请输入增长数',
    please_input_query_timeout: '请输入查询超时',
    please_input_connect_timeout: '请输入连接超时(秒)',
    no_less_then_0: '高级设置中的参数不能小于零',
    port_no_less_then_0: '端口不能小于零',
    priority: '高级设置',
    data_mode: '数据模式',
    direct: '直连模式',
    extract: '抽取模式',
    all_compute_mode: '直连、抽取模式',
    extra_params: '额外的JDBC连接字符串',
    please_input_dataPath: '请输入 JsonPath 数据路径',
    show_api_data: '查看API数据结构',
    warning: '包含无效数据表',
    data_table: '数据表',
    data_table_name: '数据表名称',
    method: '请求方式',
    url: 'URL',
    add_api_table: '添加API数据表',
    edit_api_table: '编辑API数据表',
    base_info: '基础信息',
    column_info: '数据结构',
    request: '请求',
    isUseJsonPath: '是否指定JsonPath',
    path_all_info: '请填入完整地址',
    jsonpath_info: '请填入JsonPath',
    req_param: '请求参数',
    headers: '请求头',
    query_param: 'QUERY參數',
    query_info: '地址栏中跟在？后面的参数,如: updateapi?id=112',
    key: '键',
    value: '值',
    data_path: '提取数据',
    data_path_desc: '请用JsonPath填写数据路径',
    body_form_data: 'form-data',
    body_x_www_from_urlencoded: 'x-www-form-urlencoded',
    body_json: 'json',
    body_xml: 'xml',
    body_raw: 'row',
    request_body: '请求体',
    auth_config: '认证配置',
    auth_config_info: '请求需要进行权限校验',
    verified: '认证',
    verification_method: '认证方式',
    username: '用户名',
    api_table_not_empty: 'API 数据表不能为空',
    has_repeat_name: 'API 数据表名称重复',
    has_repeat_field_name: '字段名重复，请修改后再选择',
    api_field_not_empty: '字段不能为空',
    success_copy: '复制成功',
    valid: '有效',
    invalid: '无效',
    api_step_1: '连接API',
    api_step_2: '提取数据',
    _ip_address: '请输入主机名/IP地址',
    display_name: '显示名称',
    connection_mode: '连接方式',
    driver_file: '驱动文件',
    edit_driver: '编辑驱动',
    driver_name: '驱动名称',
    drive_type: '驱动类型',
    add_driver: '添加驱动',
    diver_on_the_left: '请在左侧选择驱动',
    no_data_table: '暂无数据表',
    on_the_left: '请在左侧选择数据源',
    create_dataset: '创建数据集',
    table_description: '表描述',
    relational_database: '关系型数据库',
    data_warehouse_lake: '数仓/数据湖',
    non_relational_database: '非关系型数据库',
    all: '所有',
    this_data_source: '确定删除该数据源吗？',
    delete_this_dataset: '确定删除该数据集吗？',
    edit_folder: '编辑文件夹',
    click_to_check: '点击去查看血缘关系',
    please_select: '请选择',
    delete_this_item: '是否要删除此项？',
    can_be_uploaded: '仅支持上传JAR格式的文件',
    query_timeout: '查询超时',
    add_data_source: '添加数据源',
    delete_this_driver: '确定删除该驱动吗？',
    basic_info: '基本信息',
    data_preview: '预览数据',
    update_type: '更新方式',
    all_scope: '全量更新',
    add_scope: '增量更新',
    select_data_time: '选择日期时间',
    execute_rate: '执行频率',
    execute_once: '立即执行',
    simple_cron: '简单重复',
    cron_config: '表达式设定',
    no_limit: '无限制',
    set_end_time: '设定结束时间',
    exec_time: '执行时间',
    start_time: '开始时间',
    end_time: '结束时间'
  },
  chart: {
    reset: '重置',
    chart_refresh_tips: '视图刷新设置优先于仪表板刷新设置',
    '1-trend': '趋势',
    '2-state': '状态',
    '3-rank': '排名',
    '4-location': '位置',
    '5-weather': '天气',
    chinese: '中文',
    mark_field: '字段',
    mark_value: '值',
    function_style: '功能型样式',
    condition_style: '标记样式',
    longitude: '经度',
    latitude: '纬度',
    gradient: '渐变',
    layer_controller: '指标切换',
    suspension: '悬浮',
    chart_background: '组件背景',
    date_format: '请选择日期解析格式',
    solid_color: '纯色',
    split_gradient: '分离渐变',
    continuous_gradient: '连续渐变',
    map_center_lost: '图形缺失中心点centroid或center属性，请补全后再试',
    margin_model: '模式',
    margin_model_auto: '自动',
    margin_model_absolute: '绝对',
    margin_model_relative: '相对',
    margin_placeholder: '请输入0-100数字',
    margin_absolute_placeholder: '请输入0-40数字',
    rich_text_view_result_tips: '富文本只选取第一条结果',
    rich_text_view: '富文本视图',
    view_reset: '视图重置',
    view_reset_tips: '放弃对视图的修改？',
    export_img: '导出图片',
    title_repeat: '当前标题已存在',
    save_snapshot: '保存缩略图',
    datalist: '视图',
    add_group: '添加分组',
    add_scene: '添加场景',
    group: '分组',
    scene: '场景',
    delete: '删除',
    move_to: '移动到',
    rename: '重命名',
    tips: '提示',
    confirm_delete: '确认删除',
    delete_success: '删除成功',
    confirm: '确认',
    cancel: '取消',
    search: '搜索',
    back: '返回',
    add_table: '添加数据集',
    process: '进度',
    add_chart: '添加视图',
    db_data: '数据库数据集',
    sql_data: 'SQL数据集',
    excel_data: 'Excel数据集',
    custom_data: '自定义数据集',
    pls_slc_tbl_left: '请从左侧选视图',
    add_db_table: '添加数据库数据集',
    add_api_table: '添加API数据集',
    pls_slc_data_source: '请选择数据源',
    table: '表',
    edit: '编辑',
    create_view: '创建试图',
    data_preview: '数据预览',
    dimension: '维度',
    quota: '指标',
    title: '标题',
    show: '显示',
    chart_type: '图表类型',
    shape_attr: '图形属性',
    module_style: '组件样式',
    result_filter: '过滤器',
    x_axis: '横轴',
    y_axis: '纵轴',
    chart: '视图',
    close: '关闭',
    summary: '汇总方式',
    fast_calc: '快速计算',
    sum: '求和',
    count: '计数',
    avg: '平均',
    max: '最大值',
    min: '最小值',
    stddev_pop: '标准差',
    var_pop: '方差',
    quick_calc: '快速计算',
    show_name_set: '显示名设置',
    show_name: '显示名',
    color: '颜色',
    color_case: '配色方案',
    pls_slc_color_case: '请选择配色方案',
    color_default: '默认',
    color_retro: '复古',
    color_future: '未来',
    color_gradual: '渐变',
    color_business: '商务',
    color_gentle: '柔和',
    color_elegant: '淡雅',
    color_technology: '科技',
    color_simple: '简洁',
    not_alpha: '不透明度',
    area_border_color: '地图边线',
    area_base_color: '底图',
    size: '大小',
    bar_width: '柱宽',
    bar_gap: '柱间隔',
    adapt: '自适应',
    line_width: '线宽',
    line_type: '线型',
    line_symbol: '折点',
    line_symbol_size: '折点大小',
    line_type_solid: '实线',
    line_type_dashed: '虚线',
    line_symbol_circle: '圆形',
    line_symbol_emptyCircle: '空心圆',
    line_symbol_rect: '矩形',
    line_symbol_roundRect: '圆角矩形',
    line_symbol_triangle: '三角形',
    line_symbol_diamond: '菱形',
    line_symbol_pin: '钉子',
    line_symbol_arrow: '箭头',
    line_symbol_none: '无',
    line_area: '面积',
    pie_inner_radius: '内径',
    pie_outer_radius: '外径',
    funnel_width: '宽度',
    line_smooth: '平滑折线',
    title_style: '标题样式',
    text_fontsize: '字体大小',
    text_color: '字体颜色',
    text_h_position: '水平位置',
    text_v_position: '垂直位置',
    text_pos_left: '左',
    text_pos_center: '中',
    text_pos_right: '右',
    text_pos_top: '上',
    text_pos_bottom: '下',
    text_italic: '字体倾斜',
    italic: '倾斜',
    orient: '方向',
    horizontal: '水平',
    vertical: '垂直',
    legend: '图例',
    shape: '形状',
    polygon: '多边形',
    circle: '圆形',
    label: '标签',
    label_position: '标签位置',
    label_bg: '标签背景',
    label_shadow: '标签阴影',
    label_shadow_color: '阴影颜色',
    label_reserve_decimal_count: '保留小数',
    content_formatter: '内容格式',
    inside: '内',
    tooltip: '提示',
    tooltip_item: '数据项',
    tooltip_axis: '坐标轴',
    formatter_plc: '内容格式为空时，显示默认格式',
    xAxis: '横轴',
    yAxis: '纵轴',
    position: '位置',
    rotate: '角度',
    name: '名称',
    icon: '图标',
    trigger_position: '触发位置',
    asc: '升序',
    desc: '降序',
    sort: '排序',
    filter: '过滤',
    none: '无',
    background: '背景',
    border: '边角',
    border_width: '边框宽度',
    border_radius: '边框半径',
    alpha: '透明度',
    add_filter: '添加过滤',
    no_limit: '无限制',
    filter_eq: '等于',
    filter_not_eq: '不等于',
    filter_lt: '小于',
    filter_le: '小于等于',
    filter_gt: '大于',
    filter_ge: '大于等于',
    filter_null: '为空',
    filter_not_null: '不为空',
    filter_empty: '空字符串',
    filter_not_empty: '非空字符串',
    filter_include: '包含',
    filter_not_include: '不包含',
    rose_type: '玫瑰图模式',
    radius_mode: '半径',
    area_mode: '面积',
    rose_radius: '圆角',
    view_name: '视图标题',
    belong_group: '所属分组',
    select_group: '选择分组',
    name_can_not_empty: '名称不能为空',
    template_can_not_empty: '请选择仪表版',
    custom_count: '记录数',
    table_title_fontsize: '表头字体大小',
    table_item_fontsize: '表格字体大小',
    table_header_bg: '表头背景',
    table_item_bg: '表格背景',
    table_header_font_color: '表头字体',
    table_item_font_color: '表格字体',
    table_show_index: '显示序号',
    stripe: '斑马纹',
    start_angle: '起始角度',
    end_angle: '结束角度',
    style_priority: '样式优先级',
    dashboard: '仪表板',
    dimension_color: '名称颜色',
    quota_color: '值颜色',
    dimension_font_size: '名称字体大小',
    quota_font_size: '值字体大小',
    space_split: '名称/值间隔',
    only_one_quota: '仅支持1个指标',
    only_one_result: '仅显示第1个计算结果',
    dimension_show: '名称显示',
    quota_show: '值显示',
    title_limit: '标题不能大于50个字符',
    filter_condition: '过滤条件',
    filter_field_can_null: '过滤字段必填',
    preview_100_data: '预览前100条记录',
    chart_table_normal: '汇总表',
    chart_table_info: '明细表',
    chart_card: '指标卡',
    chart_bar: '基础柱状图',
    chart_bar_stack: '堆叠柱状图',
    chart_percentage_bar_stack: '百分比柱状图',
    chart_bar_horizontal: '横向柱状图',
    chart_bar_stack_horizontal: '横向堆叠柱状图',
    chart_percentage_bar_stack_horizontal: '横向百分比柱状图',
    chart_line: '基础折线图',
    chart_line_stack: '堆叠折线图',
    chart_pie: '饼图',
    chart_pie_donut: '环形图',
    chart_pie_rose: '南丁格尔玫瑰图',
    chart_pie_donut_rose: '南丁格尔玫瑰环形图',
    chart_funnel: '漏斗图',
    chart_radar: '雷达图',
    chart_gauge: '仪表盘',
    chart_map: '地图',
    dateStyle: '日期显示',
    datePattern: '日期格式',
    y: '年',
    y_M: '年月',
    y_Q: '年季度',
    y_W: '年周',
    y_M_d: '年月日',
    H_m_s: '时分秒',
    y_M_d_H_m: '年月日时分',
    y_M_d_H_m_s: '年月日时分秒',
    date_sub: 'yyyy-MM-dd',
    date_split: 'yyyy/MM/dd',
    chartName: '新建视图',
    chart_show_error: '无法正常显示',
    chart_error_tips: '如有疑问请联系管理员',
    title_cannot_empty: '标题不能为空',
    table_title_height: '表头行高',
    table_item_height: '表格行高',
    axis_show: '轴线显示',
    axis_color: '轴线颜色',
    axis_width: '轴线宽度',
    axis_type: '轴线类型',
    grid_show: '网格线显示',
    grid_color: '网格线颜色',
    grid_width: '网格线宽度',
    grid_type: '网格线类型',
    axis_type_solid: '实线',
    axis_type_dashed: '虚线',
    axis_type_dotted: '点',
    axis_label_show: '标签显示',
    axis_label_color: '标签颜色',
    axis_label_fontsize: '标签大小',
    text_style: '字体样式',
    bolder: '加粗',
    change_ds: '更换数据集',
    change_ds_tip: '提示：更换数据集将导致字段发生变化，需重新制作视图',
    axis_name_color: '名称颜色',
    axis_name_fontsize: '名称字体',
    pie_label_line_show: '引导线',
    outside: '外',
    center: '中心',
    split: '轴线',
    axis_line: '轴线',
    axis_label: '轴标签',
    label_fontsize: '标签大小',
    split_line: '分割线',
    split_color: '分割颜色',
    shadow: '阴影',
    condition: '过滤值',
    filter_value_can_null: '过滤值不能为空',
    filter_like: '包含',
    filter_not_like: '不包含',
    filter_in: '属于',
    filter_not_in: '不属于',
    color_light: '明亮',
    color_classical: '经典',
    color_fresh: '清新',
    color_energy: '活力',
    color_red: '火红',
    color_fast: '轻快',
    color_spiritual: '灵动',
    chart_details: '视图明细',
    export: '导出',
    details: '明细',
    image: '图片',
    export_details: '导出明細',
    chart_data: '数据',
    chart_style: '样式',
    drag_block_type_axis: '类别轴',
    drag_block_value_axis: '值轴',
    drag_block_table_data_column: '数据列',
    drag_block_pie_angel: '扇区角度',
    drag_block_pie_label: '扇区标签',
    drag_block_gauge_angel: '指针角度',
    drag_block_label_value: '值',
    drag_block_funnel_width: '漏斗层宽',
    drag_block_funnel_split: '漏斗分层',
    drag_block_radar_length: '分支长度',
    drag_block_radar_label: '分支标签',
    map_range: '地图范围',
    select_map_range: '请选择地图范围',
    area: '地区',
    stack_item: '堆叠项',
    placeholder_field: '拖动字段至此处',
    axis_label_rotate: '标签角度',
    chart_scatter_bubble: '气泡图',
    chart_scatter: '散点图',
    bubble_size: '气泡大小',
    chart_treemap: '矩形树图',
    drill: '钻取',
    drag_block_treemap_label: '色块标签',
    drag_block_treemap_size: '色块大小',
    bubble_symbol: '图形',
    gap_width: '间隔',
    width: '宽度',
    height: '高度',
    system_case: '系统方案',
    custom_case: '自定义',
    last_layer: '当前已经是最后一级',
    radar_size: '大小',
    chart_mix: '组合图',
    axis_value: '轴值',
    axis_value_min: '最小值',
    axis_value_max: '最大值',
    axis_value_split: '间隔',
    axis_auto: '自动',
    table_info_switch: '明细表切换将清空维度',
    drag_block_value_axis_main: '主轴值',
    drag_block_value_axis_ext: '副轴值',
    yAxis_main: '主纵轴',
    yAxis_ext: '副纵轴',
    total: '共',
    items: '条数据',
    chart_liquid: '水波图',
    drag_block_progress: '进度指示',
    liquid_max: '目标值',
    liquid_outline_border: '边框粗细',
    liquid_outline_distance: '边框间隔',
    liquid_wave_length: '水波长度',
    liquid_wave_count: '水波数量',
    liquid_shape: '形状',
    liquid_shape_circle: '圆形',
    liquid_shape_diamond: '菱形',
    liquid_shape_triangle: '三角形',
    liquid_shape_pin: '气球',
    liquid_shape_rect: '矩形',
    dimension_or_quota: '维度或指标',
    axis_value_split_count: '刻度数',
    axis_value_split_space: '刻度间距',
    chart_waterfall: '瀑布图',
    pie_inner_radius_percent: '内径占比',
    pie_outer_radius_size: '外径大小',
    table_page_size: '分页',
    table_page_size_unit: '条/页',
    result_count: '结果展示',
    result_mode_all: '全部',
    result_mode_custom: '自定义',
    chart_word_cloud: '词云',
    drag_block_word_cloud_label: '词标签',
    drag_block_word_cloud_size: '词大小',
    splitCount_less_100: '刻度数范围0-100',
    change_chart_type: '更改类型',
    chart_type_table: '表格',
    chart_type_quota: '指标',
    chart_type_trend: '趋势',
    chart_type_compare: '比较',
    chart_type_distribute: '分布',
    chart_type_relation: '关系',
    chart_type_space: '空间位置',
    preview: '上一步',
    next: '下一步',
    select_dataset: '选择数据集',
    select_chart_type: '选择图表类型',
    recover: '重置',
    yoy_label: '同比/环比',
    yoy_setting: '同环比设置',
    pls_select_field: '请选择字段',
    compare_date: '对比日期',
    compare_type: '对比类型',
    compare_data: '数据设置',
    year_yoy: '年同比',
    month_yoy: '月同比',
    quarter_yoy: '季同比',
    week_yoy: '周同比',
    day_yoy: '日同比',
    year_mom: '年环比',
    month_mom: '月环比',
    quarter_mom: '季环比',
    week_mom: '周环比',
    day_mom: '日环比',
    data_sub: '对比差值',
    data_percent: '差值百分比',
    compare_calc_expression: '计算公式',
    and: '与',
    or: '或',
    logic_exp: '逻辑条件',
    enum_exp: '字段枚举值',
    pls_slc: '请选择',
    filter_exp: '过滤值',
    filter_type: '过滤方式',
    filter_value_can_not_str: '数值类型字段过滤值不能包含文本',
    enum_value_can_not_null: '字段枚举值不能为空',
    table_config: '表格配置',
    table_column_width_config: '列宽调整',
    table_column_adapt: '自适应',
    table_column_custom: '自定义',
    chart_table_pivot: '透视表',
    table_pivot_row: '数据行',
    field_error_tips:
      '该字段所对应的数据集原始字段发生变更（包括维度、指标，字段类型，字段被删除等），建议重新编辑',
    mark_field_error: '数据集变更，当前字段不存在，请重新选择',
    table_border_color: '边框颜色',
    table_header_align: '表头对齐方式',
    table_item_align: '表格对齐方式',
    table_align_left: '左对齐',
    table_align_center: '居中',
    table_align_right: '右对齐',
    table_scroll_bar_color: '滚动条颜色',
    draw_back: '收回',
    senior: '高级',
    senior_cfg: '高级设置',
    function_cfg: '功能设置',
    analyse_cfg: '分析预警',
    slider: '缩略轴',
    slider_range: '默认范围',
    slider_bg: '背景',
    slider_fill_bg: '选中背景',
    slider_text_color: '字体颜色',
    chart_no_senior: '当前图表类型暂无高级配置，敬请期待',
    chart_no_properties: '当前图表类型暂无样式配置',
    assist_line: '辅助线',
    field_fixed: '固定值',
    line_type_dotted: '点',
    value_can_not_empty: '值不能为空',
    value_error: '值必须为数值',
    threshold: '阈值',
    threshold_range: '阈值区间',
    gauge_threshold_format_error: '格式错误',
    total_cfg: '总计配置',
    col_cfg: '列汇总',
    row_cfg: '行汇总',
    total_show: '总计',
    total_position: '位置',
    total_label: '别名',
    sub_total_show: '小计',
    total_pos_top: '顶部',
    total_pos_bottom: '底部',
    total_pos_left: '左侧',
    total_pos_right: '右侧',
    chart_label: '文本卡',
    drag_block_label: '标签',
    count_distinct: '去重计数',
    table_page_mode: '分页模式',
    page_mode_page: '翻页',
    page_mode_pull: '下拉',
    exp_can_not_empty: '条件不能为空',
    value_formatter: '数值格式',
    value_formatter_type: '格式类型',
    value_formatter_auto: '自动',
    value_formatter_value: '数值',
    value_formatter_percent: '百分比',
    value_formatter_unit: '数量单位',
    value_formatter_decimal_count: '小数位数',
    value_formatter_suffix: '单位后缀',
    value_formatter_thousand_separator: '千分符',
    value_formatter_example: '示例',
    unit_none: '无',
    unit_thousand: '千',
    unit_ten_thousand: '万',
    unit_million: '百万',
    unit_hundred_million: '亿',
    formatter_decimal_count_error: '请输入0-10的整数',
    gauge_threshold_compare_error: '阈值范围需逐级递增',
    tick_count: '刻度间隔数',
    custom_sort: '自定义',
    custom_sort_tip: '自定义排序优先级最高，且仅支持单个字段自定义',
    clean_custom_sort: '清除自定义排序',
    ds_field_edit: '数据集字段管理',
    chart_field_edit: '视图字段管理',
    copy_field: '复制字段',
    calc_field: '计算字段',
    form_type: '类别',
    scroll_cfg: '滚动设置',
    scroll: '滚动',
    open: '开启',
    row: '行数',
    interval: '间隔',
    max_more_than_mix: '最大值必须大于最小值',
    field: '字段',
    textColor: '文字颜色',
    backgroundColor: '背景颜色',
    field_can_not_empty: '字段不能为空',
    conditions_can_not_empty: '字段的条件不能为空，若无条件，请直接删除该字段',
    remark: '备注',
    remark_edit: '编辑备注',
    remark_bg_color: '背景填充',
    quota_font_family: '值字体',
    quota_text_style: '值样式',
    quota_letter_space: '值字间距',
    dimension_font_family: '名称字体',
    dimension_text_style: '名称样式',
    dimension_letter_space: '名称字间距',
    font_family: '字体',
    letter_space: '字间距',
    font_shadow: '字体阴影',
    chart_area: '面积图',
    fix: '固定值',
    dynamic: '动态值',
    gauge_size_field_delete: '动态值中字段发生变更，请重新编辑',
    chart_group: '子类别',
    chart_bar_group: '分组柱状图',
    chart_bar_group_stack: '分组堆叠柱状图',
    field_dynamic: '动态值',
    aggregation: '聚合方式',
    filter_between: '介于',
    field_not_empty: '字段不能为空',
    summary_not_empty: '聚合方式不能为空',
    reserve_zero: '取整',
    reserve_one: '一位',
    reserve_two: '两位',
    proportion: '占比',
    label_content: '标签展示',
    percent: '占比',
    table_index_desc: '表头名称',
    total_sort: '总计排序',
    total_sort_none: '无',
    total_sort_asc: '升序',
    total_sort_desc: '降序',
    total_sort_field: '排序字段',
    empty_data_strategy: '空值处理',
    break_line: '保持为空',
    set_zero: '置为0',
    ignore_data: '隐藏空值',
    sub_dimension_tip:
      '该字段为必填项，且不应使用类别轴中的字段，若无需该字段，请选择基础图表进行展示，否则展示效果不理想。',
    drill_dimension_tip: '钻取字段仅支持数据集中的字段',
    table_scroll_tip: '明细表仅在分页模式为"下拉"时生效。',
    table_threshold_tip: '提示：请勿重复选择字段，若同一字段重复配置，则只有最后的字段配置生效',
    table_column_width_tip:
      '列宽并非任何时候都能生效。<br/>容器宽度优先级高于列宽，即(表格容器宽度 / 列数 > 指定列宽)，则列宽优先取(容器宽度 / 列数)。',
    reference_field_tip:
      '引用字段以 "[" 开始， "]" 结束。<br/>请勿修改引用内容，否则将引用失败。<br/>若输入与引用字段相同格式的内容，将被当作引用字段处理。',
    scatter_tip: '该指标生效时，样式大小中的气泡大小属性将失效',
    place_name_mapping: '地名映射',
    axis_tip:
      '最小值、最大值、间隔均为数值类型；若不填，则该项视为自动。<br/>请确保填写数值能正确计算，否则将无法正常显示轴值。',
    format_tip: `模板变量有 {a}, {b}，{c}，{d}，分别表示系列名，数据名，数据值等。<br>
                  在 触发位置 为 '坐标轴' 的时候，会有多个系列的数据，此时可以通过 {a0}, {a1}, {a2} 这种后面加索引的方式表示系列的索引。<br>
                  不同图表类型下的 {a}，{b}，{c}，{d} 含义不一样。 其中变量{a}, {b}, {c}, {d}在不同图表类型下代表数据含义为：<br><br>
                  折线（区域）图、柱状（条形）图、仪表盘 : {a}（系列名称），{b}（类目值），{c}（数值）<br>
                  饼图、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）<br>
                  地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）<br>
                  散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）`,
    h_position: '水平位置',
    v_position: '垂直位置',
    p_left: '左对齐',
    p_right: '右对齐',
    p_top: '上对齐',
    p_bottom: '下对齐',
    p_center: '居中',
    table_auto_break_line: '自动换行',
    table_break_line_tip: '开启自动换行，表格行高设置将失效',
    step: '步长(px)',
    no_function: '函数尚未支持直接引用，请在字段表达式中手动输入。',
    chart_flow_map: '流向地图',
    start_point: '起点经纬度',
    end_point: '终点经纬度',
    line: '线条',
    map_style: '风格',
    map_pitch: '倾角',
    map_rotation: '旋转',
    map_style_normal: '标准',
    map_style_light: '明亮',
    map_style_dark: '暗黑',
    map_style_whitesmoke: '远山黛',
    map_style_fresh: '草色青',
    map_style_grey: '雅士灰',
    map_style_graffiti: '涂鸦',
    map_style_macaron: '马卡龙',
    map_style_blue: '靛青蓝',
    map_style_darkblue: '极夜蓝',
    map_style_wine: '酱籽',
    map_line_type: '类型',
    map_line_width: '线条宽度',
    map_line_height: '线条高度',
    map_line_linear: '渐变',
    map_line_animate: '动画',
    map_line_animate_duration: '动画间隔',
    map_line_animate_interval: '轨迹间隔',
    map_line_animate_trail_length: '轨迹长度',
    map_line_type_line: '直线',
    map_line_type_arc: '弧线',
    map_line_type_arc_3d: '3D 弧线',
    map_line_type_great_circle: '大圆弧',
    map_line_color_source_color: '起始颜色',
    map_line_color_target_color: '结束颜色',
    map_line_theta_offset: '弧度',
    refresh_frequency: '刷新频率',
    enable_refresh_view: '开启刷新',
    enable_view_loading: '视图加载提示',
    minute: '分',
    second: '秒'
  },
  dataset: {
    scope_edit: '仅编辑时生效',
    scope_all: '数据集预览时全局生效',
    spend_time: '耗时',
    sql: 'SQL 语句',
    sql_result: '运行结果',
    parse_filed: '解析字段',
    field_rename: '字段重命名',
    params_work:
      '仅编辑时生效：参数值仅在数据集编辑时生效；全局生效：在数据集查看、预览、以及用到数据集的视图中均生效。',
    select_year: '选择年',
    sql_variable_limit_1: '1、SQL 变量只能在 WHERE 条件中使用',
    sql_variable_limit_2:
      "2、示例：select * from table_name where column_name1='${param_name1}' and column_name2 in ${param_name2}",
    select_month: '选择月',
    select_date: '选择日期',
    select_time: '选择时间',
    time_year: '日期-年',
    time_year_month: '日期-年月',
    time_year_month_day: '日期-年月日',
    time_all: '日期-年月日时分秒',
    dataset_sync: ' ( 数据同步中... )',
    sheet_warn: '有多个 Sheet 页，默认抽取第一个',
    datalist: '数据集',
    name: '数据集名称',
    add_group: '添加分组',
    add_scene: '添加场景',
    group: '分组',
    scene: '场景',
    delete: '删除',
    move_to: '移动到',
    rename: '重命名',
    tips: '提示',
    confirm_delete: '确认删除',
    confirm_delete_msg: '数据集删除，会影响与其相关的自定义数据集、关联数据集、仪表板，确认删除？',
    delete_success: '删除成功',
    confirm: '确认',
    cancel: '取消',
    search: '搜索',
    back: '返回',
    add_table: '添加数据集',
    process: '进度',
    update: '更新',
    db_data: '数据库数据集',
    sql_data: 'SQL 数据集',
    excel_data: 'Excel 数据集',
    custom_data: '自定义数据集',
    pls_slc_tbl_left: '请从左侧选择表',
    add_db_table: '添加数据库数据集',
    add_api_table: '添加API数据集',
    pls_slc_data_source: '请选择数据源',
    table: '表',
    edit: '编辑',
    create_view: '创建视图',
    data_preview: '数据预览',
    field_type: '字段类型',
    field_name: '字段名称',
    field_origin_name: '原始名称',
    field_check: '选中',
    update_info: '更新信息',
    update_records: '更新记录',
    join_view: '数据关联',
    text: '文本',
    time: '时间',
    value: '数值',
    mode: '模式',
    direct_connect: '直连',
    sync_data: '定时同步',
    update_setting: '更新设置',
    sync_now: '立即更新',
    add_task: '添加任务',
    task_name: '任务名称',
    task_id: '任务ID',
    start_time: '开始时间',
    end_time: '结束时间',
    status: '状态',
    error: '失败',
    completed: '成功',
    underway: '执行中',
    task_update: '更新设置',
    update_type: '更新方式',
    all_scope: '全量更新',
    add_scope: '增量更新',
    select_data_time: '选择日期时间',
    execute_rate: '执行频率',
    execute_once: '立即执行',
    simple_cron: '简单重复',
    cron_config: '表达式设定',
    no_limit: '无限制',
    set_end_time: '设定结束时间',
    operate: '操作',
    save_success: '保存成功',
    close: '关闭',
    required: '必填',
    input_content: '请输入内容',
    add_sql_table: '添加 SQL 数据集',
    preview: '预览',
    pls_input_name: '请输入名称',
    connect_mode: '连接模式',
    incremental_update_type: '增量更新方式',
    incremental_add: '增量添加',
    incremental_delete: '增量删除',
    last_update_time: '上次更新时间',
    current_update_time: '当前更新时间',
    param: '参数',
    edit_sql: '编辑 SQL 数据集',
    showRow: '显示行',
    add_excel_table: '添加Excel数据集',
    add_custom_table: '添加自定义数据集',
    upload_file: '上传文件',
    detail: '详情',
    type: '类型',
    create_by: '创建者',
    create_time: '创建时间',
    preview_show: '显示',
    preview_item: '条数据',
    preview_total: '共',
    pls_input_less_5: '请输入5位以内的正整数',
    field_edit: '编辑字段',
    table_already_add_to: '该表已添加至',
    uploading: '上传中...',
    add_union: '新建关联',
    union_setting: '关联设置',
    pls_slc_union_field: '请选择关联字段',
    pls_slc_union_table: '请选择关联表',
    source_table: '关联表',
    source_field: '关联字段',
    target_table: '被关联表',
    target_field: '被关联字段',
    union_relation: '关联关系',
    pls_setting_union_success: '请正确设置关联关系',
    invalid_dataset: 'Kettle未运行，无效数据集',
    check_all: '全选',
    can_not_union_self: '被关联表不能与关联表相同',
    float: '小数',
    edit_custom_table: '编辑自定义数据集',
    edit_field: '编辑字段',
    preview_100_data: '显示前100行数据',
    invalid_table_check: '非直连数据集请先完成数据同步',
    parse_error:
      'Excel解析失败，请检查格式、字段等信息。具体参考：https://dataease.io/docs/user_manual/dataset_configuration/dataset_Excel',
    origin_field_type: '字段原始类型',
    edit_excel_table: '编辑Excel数据集',
    edit_excel: '编辑Excel',
    excel_replace: '替换',
    excel_add: '追加',
    dataset_group: '数据集分组',
    m1: '将 ',
    m2: ' 移动到',
    char_can_not_more_50: '数据集名称不能超过50个字符',
    task_add_title: '添加任务',
    task_edit_title: '编辑任务',
    sync_latter: '稍后同步',
    task: {
      list: '任务列表',
      record: '执行记录',
      create: '新建任务',
      name: '任务名称',
      last_exec_time: '上次执行时间',
      next_exec_time: '下次执行时间',
      last_exec_status: '上次执行结果',
      task_status: '任务状态',
      dataset: '数据集',
      search_by_name: '根据名称搜索',
      underway: '等待执行',
      stopped: '执行结束',
      exec: '执行中',
      pending: '暂停',
      confirm_exec: '手动触发执行？',
      change_success: '状态切换成功',
      excel_replace_msg: '可能会影响自定义数据集、关联数据集、仪表板等，确认替换？',
      effect_ext_field: '会影响计算字段'
    },
    field_group_type: '分类',
    location: '地理位置',
    left_join: '左连接',
    right_join: '右连接',
    inner_join: '内连接',
    full_join: '全连接',
    can_not_union_diff_datasource: '被关联数据集必须与当前数据集的数据源一致',
    operator: '操作',
    d_q_trans: '维度/指标转换',
    add_calc_field: '新建计算字段',
    input_name: '请输入名称',
    field_exp: '字段表达式',
    data_type: '数据类型',
    click_ref_field: '点击引用字段',
    click_ref_function: '点击引用函数',
    field_manage: '字段管理',
    edit_calc_field: '编辑计算字段',
    calc_field: '计算字段',
    show_sql: '显示SQL',
    ple_select_excel: '请选择要导入的 Excel',
    merge: '合并',
    no_merge: '不合并',
    merge_msg: '数据表中存在字段一致的情况，是否合并到一个数据集中?',
    merge_title: '合并数据',
    field_name_less_50: '字段名不能超过50个字符',
    excel_info_1: '1、Excel 文件中不能存在合并单元格；',
    excel_info_2: '2、Excel 文件的第一行为标题行，不能为空，不能为日期型；',
    excel_info_3: '3、文件大小请确保在500M以内。',
    sync_field: '同步字段',
    confirm_sync_field: '确认同步',
    confirm_sync_field_tips: '同步字段可能会导致已编辑字段发生变更，请确认',
    sync_success: '同步成功',
    sync_success_1: '同步成功，请对当前数据集重新执行数据同步操作',
    row_permission: {
      type: '类型',
      name: '名称',
      condition: '条件',
      value: '值',
      add: '添加行权限',
      edit: '编辑行权限',
      please_select_field: '请选择字段',
      please_select_auth_type: '请选择授权类型',
      please_select_auth_id: '请选择授权目标',
      row_permission_not_empty: '行权限不能为空',
      search_by_filed_name: '根据字段名称搜索',
      auth_type: '授权类型',
      auth_obj: '授权对象'
    },
    column_permission: {
      add: '添加列权限',
      edit: '编辑列权限',
      please_select_field: '请选择字段',
      please_select_auth_type: '请选择授权类型',
      please_select_auth_id: '请选择授权目标',
      column_permission_not_empty: '列权限不能为空',
      auth_type: '授权类型',
      auth_obj: '授权对象',
      enable: '启用',
      disable: '禁用',
      prohibit: '禁用',
      desensitization: '脱敏',
      desensitization_rule: '脱敏规则',
      m: 'M等于',
      n: 'N等于',
      mgtn: 'M 不能大于 N'
    },
    row_permissions: '行权限',
    column_permissions: '列权限',
    row_column_permissions: '行列权限',
    union_data: '关联数据集',
    add_union_table: '添加关联数据集',
    edit_union: '编辑关联数据集',
    union: '关联',
    edit_union_relation: '编辑关联关系',
    add_union_relation: '新建关联关系',
    field_select: '字段选择',
    add_union_field: '添加关联字段',
    union_error: '关联关系与关联字段不能为空',
    union_repeat: '当前数据集已被关联，请勿重复关联',
    preview_result: '预览结果',
    sql_ds_union_error: '直连模式下SQL数据集，不支持关联',
    api_data: 'API 数据集',
    copy: '复制',
    sync_log: '同步日志',
    field_edit_name: '字段名称',
    input_edit_name: '请输入字段名称',
    edit_search: '通过名称搜索',
    na: '暂无',
    date_format: '时间格式，默认: 年-月-日 时:分:秒',
    export_dataset: '数据集导出',
    filename: '文件名称',
    export_filter: '筛选条件',
    pls_input_filename: '请输入文件名称',
    calc_tips: {
      tip1: '表达式语法请遵循该数据源对应的数据库语法。',
      tip2: '数据集中不支持聚合运算。',
      tip3: '引用字段以 "[" 开始， "]" 结束',
      tip4: '请勿修改引用内容，否则将引用失败',
      tip5: '若输入与引用字段相同格式的内容，将被当作引用字段处理',
      tip6: '使用数据集对应数据库类型所支持的函数，语法同对应数据库',
      tip7: '如日期格式化：MySQL使用DATE_FORMAT(date,format)；Oracle使用TO_DATE(X,[,fmt])',
      tip8: '非直连模式数据集，使用Doris数据库函数，可参考Doris官网'
    }
  },
  deDataset: {
    search_by_name: '通过名称搜索',
    new_folder: '新建文件夹',
    search_fields: '搜索字段',
    show_rows: '显示行数',
    display: '显示',
    row: '行',
    restricted_objects: '受限对象',
    select_data_source: '选择数据源',
    by_table_name: '通过表名称搜索',
    run_a_query: '运行查询',
    running_results: '运行结果',
    parameter_type: '参数类型',
    run_failed: '运行失败',
    select_data_table: '选择数据表',
    in_the_file: '文件中不能存在合并单元格',
    or_date_type: '文件的第一行为标题行，不能为空，不能为日期型',
    is_within_500m: 'Excel文件大小请确保在500M以内',
    upload_data: '上传数据',
    excel_data_first: '请先上传Excel数据',
    is_currently_available: '当前无可用的数据表',
    sure_to_synchronize: '同步字段可能导致已编辑字段发生变更，确定同步？',
    folder_name: '文件夹名称',
    folder: '所属文件夹',
    edit_folder: '编辑文件夹',
    name_already_exists: '文件夹名称已存在',
    data_preview: '数据预览',
    original_name: '原始名称',
    database: '数据库',
    selected: '已选：',
    table: '张表',
    no_dataset_click: '暂无数据集，点击',
    create: '新建',
    new_folder_first: '请先新建文件夹',
    on_the_left: '请在左侧选择数据集',
    expression_syntax_error: '字段表达式语法错误',
    create_dashboard: '创建仪表板',
    cannot_be_empty: 'SQL不能为空',
    data_reference: '数据参考',
    want_to_replace: '替换可能会影响自定义数据集、关联数据集、仪表板等，是否替换？',
    replace_the_data: '确定替换数据吗？',
    append_successfully: '追加成功',
    already_exists: '数据集名称已存在',
    edit_dataset: '编辑数据集',
    convert_to_indicator: '转换为指标',
    convert_to_dimension: '转换为维度',
    left_to_edit: '选中左侧的数据表可进行编辑',
    cannot_be_duplicate: '数据集名称不允许重复',
    set_saved_successfully: '数据集保存成功',
    to_start_using: '浏览您的数据库，表和列的内容。 选择一个数据库即可开始使用。',
    to_run_query: '点击运行查询',
    the_running_results: '即可查看运行结果',
    item: '项',
    logic_filter: '条件筛选',
    enum_filter: '枚举筛选'
  }
}
