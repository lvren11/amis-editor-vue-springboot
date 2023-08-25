export const schema_table = {
  "type": "page",
  "title": "数据源表格",
  "body": [
    {
      "type": "crud",
      "syncLocation": false,
      "api": {
        "method": "post",
        "url": "http://localhost:8081/databasesource/gettableinfo",
        "messages": {
        },
        "requestAdaptor": "",
        "adaptor": "\r\nreturn {\r\n  ...payload,\r\n  status: payload.code === 200 ? 0 : payload.code,\r\n  data: {\r\n    items: payload.data.data,\r\n    total: payload.data.total\r\n  }\r\n}\r\n",
        "dataType": "json",
        "data": {
          "userId": 1,
          "pagenum": "${pagenum}",
          "pagesize": "${pagesize}"
        }
      },
      "columns": [
        {
          "name": "tableId",
          "label": "表ID",
          "type": "text",
          "id": "u:78fdb9d19d03"
        },
        {
          "name": "tableName",
          "label": "表名",
          "type": "text",
          "id": "u:9fdb20d91b31"
        },
        {
          "type": "text",
          "label": "行数",
          "name": "rowcount",
          "id": "u:33454fb7c164"
        },
        {
          "type": "text",
          "label": "列数",
          "name": "columncount",
          "id": "u:38ff5ca93abb"
        },
        {
          "type": "text",
          "label": "表索引",
          "name": "indexlist",
          "id": "u:0bcb6d01ad33"
        },
        {
          "type": "date",
          "label": "创建时间",
          "name": "createtime",
          "id": "u:413e57a85b9d"
        },
        {
          "type": "date",
          "label": "更新时间",
          "name": "updatetime",
          "id": "u:1b5d1f8c6037"
        },
        {
          "type": "operation",
          "label": "操作",
          "buttons": [
            {
              "label": "查看",
              "type": "button",
              "actionType": "dialog",
              "level": "link",
              "dialog": {
                "title": "查看详情",
                "body": [
                  {
                    "type": "form",
                    "api": "xxx/update",
                    "body": [
                      {
                        "name": "tableId",
                        "label": "表ID",
                        "id": "u:78fdb9d19d03",
                        "type": "static",
                        "quickEdit": false,
                        "popOver": false,
                        "copyable": false
                      },
                      {
                        "name": "tableName",
                        "label": "表名",
                        "id": "u:9fdb20d91b31",
                        "type": "static",
                        "quickEdit": false,
                        "popOver": false,
                        "copyable": false
                      },
                      {
                        "label": "行数",
                        "name": "rowcount",
                        "id": "u:33454fb7c164",
                        "type": "static",
                        "quickEdit": false,
                        "popOver": false,
                        "copyable": false
                      },
                      {
                        "label": "列数",
                        "name": "columncount",
                        "id": "u:38ff5ca93abb",
                        "type": "static",
                        "quickEdit": false,
                        "popOver": false,
                        "copyable": false
                      },
                      {
                        "label": "表索引",
                        "name": "indexlist",
                        "id": "u:0bcb6d01ad33",
                        "type": "static"
                      }
                    ],
                    "id": "u:1f2af6c172e9"
                  }
                ],
                "type": "dialog",
                "id": "u:45d8e8a880f1"
              },
              "id": "u:d0aa597340cf"
            },
            {
              "type": "button",
              "label": "删除",
              "actionType": "ajax",
              "level": "link",
              "className": "text-danger",
              "confirmText": "确定要删除？",
              "api": {
                "method": "post",
                "url": "http://localhost:8081/databasesource/deletetable",
                "data": {
                  "userId": "1",
                  "tableId": "${tableId}"
                },
                "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                "dataType": "form-data"
              },
              "id": "u:ad9e1c3597a1"
            },
            {
              "type": "button",
              "label": "编辑",
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "drawer",
                      "drawer": {
                        "type": "drawer",
                        "title": "表字段",
                        "body": [
                          {
                            "type": "input-text",
                            "id": "u:ad3877230cfe",
                            "label": "表名",
                            "name": "tableName",
                            "readOnly": true
                          },
                          {
                            "type": "form",
                            "title": "",
                            "body": [
                              {
                                "type": "input-table",
                                "id": "u:2caf2ec11511",
                                "name": "table",
                                "label": "详细信息",
                                "columns": [
                                  {
                                    "label": "字段名称",
                                    "name": "fieldName",
                                    "id": "u:5bfc0d9ab90c",
                                    "quickEdit": {
                                      "type": "input-text",
                                      "name": "fieldName"
                                    }
                                  },
                                  {
                                    "label": "字段类型",
                                    "name": "filedType",
                                    "id": "u:5ff0e74e9951",
                                    "quickEdit": {
                                      "type": "select",
                                      "name": "filedType",
                                      "options": [
                                        {
                                          "label": "int",
                                          "value": "int"
                                        },
                                        {
                                          "label": "varchar(255)",
                                          "value": "varchar(255)"
                                        },
                                        {
                                          "label": "datetime",
                                          "value": "datetime"
                                        },
                                        {
                                          "label": "tinyint(1)",
                                          "value": "tinyint(1)"
                                        },
                                        {
                                          "label": "text",
                                          "value": "text"
                                        },
                                        {
                                          "label": "char",
                                          "value": "char"
                                        },
                                        {
                                          "label": "float",
                                          "value": "float"
                                        },
                                        {
                                          "label": "double",
                                          "value": "double"
                                        },
                                        {
                                          "label": "boolean",
                                          "value": "boolean"
                                        },
                                        {
                                          "label": "bigint",
                                          "value": "bigint"
                                        },
                                        {
                                          "label": "decimal",
                                          "value": "decimal"
                                        },
                                        {
                                          "label": "blob",
                                          "value": "blob"
                                        },
                                        {
                                          "label": "binary",
                                          "value": "binary"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "data",
                                    "label": "默认数据",
                                    "quickEdit": {
                                      "type": "input-text",
                                      "name": "data"
                                    },
                                    "id": "u:68ae3927f5be"
                                  },
                                  {
                                    "name": "filedNull",
                                    "label": "能否为空",
                                    "quickEdit": {
                                      "type": "select",
                                      "name": "filedNull",
                                      "options": [
                                        {
                                          "label": "是",
                                          "value": "YES"
                                        },
                                        {
                                          "label": "否",
                                          "value": "No"
                                        }
                                      ],
                                      "mode": "popOver"
                                    },
                                    "id": "u:3fdb6a832020",
                                    "placeholder": "-"
                                  },
                                  {
                                    "name": "comment",
                                    "label": "备注",
                                    "quickEdit": {
                                      "type": "input-text",
                                      "name": "comment"
                                    },
                                    "id": "u:b5943e80a186"
                                  }
                                ],
                                "minLength": 0,
                                "onEvent": {
                                },
                                "canAccessSuperData": true,
                                "addable": true,
                                "editable": true,
                                "removable": true,
                                "showTableAddBtn": true,
                                "addApi": {
                                  "url": "http://localhost:8081/databasesource/posttablefield",
                                  "method": "post",
                                  "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0 : payload.code\r\n}",
                                  "dataType": "json",
                                  "data": {
                                    "databasetablefield": "${{\"fieldName\": ${fieldName}, \"filedType\": ${filedType},\"data\": ${data},\"filedNull\": ${filedNull},\"comment\": ${comment}}|toJson}",
                                    "userId": "1",
                                    "tableId": "${tableId}",
                                    "tablename": "${tableName}"
                                  }
                                },
                                "updateApi": {
                                  "url": "http://localhost:8081/databasesource/puttablefiled",
                                  "method": "post",
                                  "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0 : payload.code\r\n}",
                                  "dataType": "json",
                                  "data": {
                                    "databasetablefield": "${{\"fieldName\": ${fieldName}, \"filedType\": ${filedType},\"data\": ${data},\"filedNull\": ${filedNull},\"comment\": ${comment},\"fieldId\": ${fieldId}}|toJson}",
                                    "userId": "1",
                                    "tableId": "${tableId}",
                                    "tablename": "${tableName}"
                                  }
                                },
                                "deleteApi": {
                                  "url": "http://localhost:8081/databasesource/deletetablefiled",
                                  "method": "post",
                                  "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0 : payload.code\r\n}",
                                  "dataType": "form-data",
                                  "data": {
                                    "userId": "1",
                                    "filedId": "${fieldId}",
                                    "tablename": "${tableName}"
                                  }
                                },
                                "strictMode": false
                              }
                            ],
                            "id": "u:a150a0191120",
                            "initApi": {
                              "url": "http://localhost:8081/databasesource/getdetailfiled/${tableId}",
                              "method": "get",
                              "adaptor": "return {\r\n status: payload.code == 200 ? 0 : payload.code,\r\n  data:{table:payload.data}\r\n}",
                              "requestAdaptor": "",
                              "messages": {
                              }
                            },
                            "data": {
                              "tableId": "${tableId}",
                              "tableName": "${tableName}"
                            }
                          }
                        ],
                        "className": "app-popover",
                        "id": "u:9cf45eac571e",
                        "resizable": true,
                        "size": "lg",
                        "withDefaultData": false,
                        "dataMapSwitch": false,
                        "onEvent": {
                          "confirm": {
                            "weight": 0,
                            "actions": [
                              {
                                "componentId": "u:194fc4a71066",
                                "actionType": "reload",
                                "args": {
                                  "resetPage": true
                                },
                                "dataMergeMode": "merge"
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "id": "u:0edcc278ab68"
            },
            {
              "type": "button",
              "label": "重命名",
              "onEvent": {
                "click": {
                  "actions": [
                    {
                      "actionType": "dialog",
                      "dialog": {
                        "type": "dialog",
                        "title": "修改表名",
                        "body": [
                          {
                            "type": "input-text",
                            "label": "新表名",
                            "name": "text",
                            "id": "u:0fdf836766e1",
                            "labelRemark": {
                              "icon": "fa fa-question-circle",
                              "trigger": [
                                "hover"
                              ],
                              "className": "Remark--warning",
                              "placement": "top",
                              "content": "注意不要重复"
                            }
                          }
                        ],
                        "showCloseButton": true,
                        "showErrorMsg": true,
                        "showLoading": true,
                        "className": "app-popover",
                        "id": "u:32a820f27d0b",
                        "closeOnEsc": false,
                        "actions": [
                          {
                            "type": "button",
                            "label": "提交",
                            "id": "u:63bf2209bfb",
                            "level": "success",
                            "actionType": "ajax",
                            "api": {
                              "method": "put",
                              "url": "http://localhost:8081/databasesource/puttable",
                              "data": {
                                "userId": "1",
                                "newtablename": "${text}",
                                "tableId": "${tableId}"
                              },
                              "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                              "dataType": "form-data"
                            },
                            "close": true,
                            "reload": "mytable"
                          }
                        ],
                        "onEvent": {
                        }
                      }
                    }
                  ]
                }
              },
              "id": "u:26bea74fc195"
            }
          ],
          "id": "u:c65307a96871"
        }
      ],
      "bulkActions": [
      ],
      "itemActions": [
      ],
      "features": [
        "create",
        "view",
        "delete"
      ],
      "filterColumnCount": 3,
      "id": "u:194fc4a71066",
      "headerToolbar": [
        "bulkActions"
      ],
      "perPageAvailable": [
        10
      ],
      "messages": {
      },
      "pageField": "pagenum",
      "perPageField": "pagesize",
      "footerToolbar": [
        {
          "type": "statistics"
        },
        {
          "type": "pagination"
        },
        {
          "type": "switch-per-page",
          "tpl": "内容",
          "wrapperComponent": ""
        }
      ],
      "alwaysShowPagination": true,
      "name": "mytable"
    }
  ],
  "id": "u:e2a02ca8f291",
  "toolbar": [
    {
      "type": "button",
      "label": "导入表格",
      "onEvent": {
        "click": {
          "actions": [
            {
              "actionType": "dialog",
              "dialog": {
                "type": "dialog",
                "title": "数据源导入表格",
                "body": [
                  {
                    "type": "grid",
                    "id": "u:d0ed4f09b0f9",
                    "columns": [
                    ]
                  },
                  {
                    "type": "crud",
                    "id": "u:0c6c023265fb",
                    "syncLocation": false,
                    "api": {
                      "method": "get",
                      "url": "http://localhost:8081/databasesource/getonedataactive/1",
                      "messages": {
                      },
                      "requestAdaptor": "",
                      "adaptor": "return {\r\n  ... payload,\r\n  status: payload.code == 200 ? 0 : payload.code,\r\n  data: {\r\n    items:[payload.data]\r\n  }\r\n}"
                    },
                    "bulkActions": [
                    ],
                    "itemActions": [
                    ],
                    "columns": [
                      {
                        "name": "datasourseId",
                        "label": "激活的数据源ID",
                        "type": "text",
                        "id": "u:8fca5196b52f",
                        "placeholder": "-"
                      },
                      {
                        "name": "url",
                        "label": "数据源url",
                        "type": "text",
                        "id": "u:aa076a1ade8a",
                        "placeholder": "-"
                      }
                    ],
                    "perPageAvailable": [
                      10
                    ],
                    "messages": {
                    }
                  },
                  {
                    "label": "刷新表格",
                    "type": "button",
                    "id": "u:ee106e1ee53a",
                    "actionType": "ajax",
                    "api": {
                      "method": "post",
                      "url": "http://localhost:8081/databasesource/refreshdatabase",
                      "data": {
                        "userId": "1"
                      },
                      "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                      "dataType": "form-data"
                    }
                  },
                  {
                    "label": "表格",
                    "type": "transfer",
                    "name": "transfer",
                    "selectMode": "list",
                    "resultListModeFollowSelect": false,
                    "id": "u:bc317c87a8d3",
                    "source": {
                      "url": "http://localhost:8081/databasesource/getalltable",
                      "method": "post",
                      "requestAdaptor": "",
                      "adaptor": "return {\r\n  ...payload,\r\n  status:payload.code == 200 ? 0 : payload.code\r\n}",
                      "messages": {
                      },
                      "dataType": "json",
                      "data": {
                        "userId": 1
                      }
                    },
                    "labelField": "tableName",
                    "valueField": "tableName"
                  }
                ],
                "showCloseButton": true,
                "showErrorMsg": true,
                "showLoading": true,
                "className": "app-popover",
                "id": "u:3cde3cf78d74",
                "closeOnEsc": false,
                "withDefaultData": false,
                "dataMapSwitch": false,
                "onEvent": {
                },
                "size": "md",
                "actions": [
                  {
                    "type": "button",
                    "label": "提交",
                    "id": "u:6c3bf2209bfb",
                    "tooltip": "提交所选择的表格",
                    "level": "success",
                    "actionType": "ajax",
                    "api": {
                      "method": "post",
                      "url": "http://localhost:8081/databasesource/posttableId",
                      "data": {
                        "tablenames": "${transfer}",
                        "userId": "1"
                      },
                      "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                      "dataType": "form-data"
                    },
                    "close": true,
                    "reload": "mytable"
                  }
                ]
              }
            }
          ]
        }
      },
      "id": "u:dc52c54a82da",
      "level": "success"
    },
    {
      "type": "button",
      "label": "新增表格",
      "onEvent": {
        "click": {
          "actions": [
            {
              "actionType": "drawer",
              "drawer": {
                "type": "drawer",
                "title": "新增表格",
                "body": [
                  {
                    "type": "form",
                    "id": "form_get",
                    "title": "表单",
                    "body": [
                      {
                        "type": "grid",
                        "id": "u:80426fe6f7e8",
                        "columns": [
                          {
                            "body": [
                              {
                                "label": "表格名称",
                                "type": "input-text",
                                "name": "text",
                                "id": "u:e643dc234490",
                                "size": "md",
                                "clearable": false,
                                "labelRemark": {
                                  "icon": "fa fa-question-circle",
                                  "trigger": [
                                    "hover"
                                  ],
                                  "className": "Remark--warning",
                                  "placement": "top",
                                  "content": "表名不要重复"
                                }
                              }
                            ],
                            "id": "u:53bc2f4b97be"
                          },
                          {
                            "body": [
                              {
                                "type": "radios",
                                "label": "是否自增主键",
                                "name": "radios",
                                "options": [
                                  {
                                    "label": "是",
                                    "value": "A"
                                  },
                                  {
                                    "label": "否",
                                    "value": "B"
                                  }
                                ],
                                "id": "u:3efe03d756d0",
                                "value": "",
                                "labelRemark": {
                                  "icon": "fa fa-question-circle",
                                  "trigger": [
                                    "hover"
                                  ],
                                  "className": "Remark--warning",
                                  "placement": "top",
                                  "content": "自增需要设置主键且主键类型为INT"
                                }
                              }
                            ],
                            "id": "u:8bb8a37417c4"
                          }
                        ]
                      },
                      {
                        "type": "input-table",
                        "columns": [
                          {
                            "name": "fieldName",
                            "label": "字段名称",
                            "id": "u:5bfc0d9ab90c",
                            "quickEdit": {
                              "type": "input-text",
                              "name": "fieldName"
                            }
                          },
                          {
                            "name": "filedType",
                            "label": "字段类型",
                            "quickEdit": {
                              "type": "select",
                              "name": "filedType",
                              "options": [
                                {
                                  "label": "int",
                                  "value": "int"
                                },
                                {
                                  "label": "varchar(255)",
                                  "value": "varchar(255)"
                                },
                                {
                                  "label": "datetime",
                                  "value": "datetime"
                                },
                                {
                                  "label": "tinyint(1)",
                                  "value": "tinyint(1)"
                                },
                                {
                                  "label": "text",
                                  "value": "text"
                                },
                                {
                                  "label": "char",
                                  "value": "char"
                                },
                                {
                                  "label": "float",
                                  "value": "float"
                                },
                                {
                                  "label": "double",
                                  "value": "double"
                                },
                                {
                                  "label": "boolean",
                                  "value": "boolean"
                                },
                                {
                                  "label": "bigint",
                                  "value": "bigint"
                                },
                                {
                                  "label": "decimal",
                                  "value": "decimal"
                                },
                                {
                                  "label": "blob",
                                  "value": "blob"
                                },
                                {
                                  "label": "binary",
                                  "value": "binary"
                                }
                              ]
                            },
                            "id": "u:5ff0e74e9951"
                          },
                          {
                            "name": "data",
                            "label": "默认数据",
                            "quickEdit": {
                              "type": "input-text",
                              "name": "data"
                            },
                            "id": "u:68ae3927f5be"
                          },
                          {
                            "name": "filedNull",
                            "label": "能否为空",
                            "quickEdit": {
                              "type": "select",
                              "name": "filedNull",
                              "options": [
                                {
                                  "label": "是",
                                  "value": "YES"
                                },
                                {
                                  "label": "否",
                                  "value": "No"
                                }
                              ],
                              "mode": "popOver"
                            },
                            "id": "u:3fdb6a832020",
                            "placeholder": "-"
                          },
                          {
                            "name": "comment",
                            "label": "备注",
                            "quickEdit": {
                              "type": "input-text",
                              "name": "comment"
                            },
                            "id": "u:b5943e80a186"
                          }
                        ],
                        "name": "table2",
                        "label": "字段增加",
                        "editable": true,
                        "addable": true,
                        "removable": true,
                        "draggable": true,
                        "id": "u:51e9125c1ea3",
                        "minLength": 0
                      },
                      {
                        "type": "checkboxes",
                        "label": "主键/复合主键",
                        "name": "checkboxes2",
                        "multiple": true,
                        "id": "u:ce003b42661",
                        "checkAll": false,
                        "joinValues": true,
                        "source": "${ARRAYMAP(table2, item => item.fieldName)}",
                        "value": "",
                        "labelRemark": {
                          "icon": "fa fa-question-circle",
                          "trigger": [
                            "hover"
                          ],
                          "className": "Remark--warning",
                          "placement": "top",
                          "content": "每个表只能有一个主键或者复合主键"
                        }
                      },
                      {
                        "type": "checkboxes",
                        "label": "索引",
                        "name": "checkboxes",
                        "multiple": true,
                        "id": "u:ce003b426601",
                        "checkAll": false,
                        "joinValues": true,
                        "source": "${ARRAYMAP(table2, item => item.fieldName)}",
                        "value": ""
                      }
                    ]
                  }
                ],
                "className": "app-popover",
                "id": "u:43babbf66506",
                "resizable": true,
                "size": "lg",
                "onEvent": {
                  "confirm": {
                    "actions": [
                      {
                        "actionType": "ajax",
                        "args": {
                          "api": {
                            "url": "http://localhost:8081/databasesource/addtable",
                            "method": "post",
                            "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}"
                          }
                        },
                        "data": {
                          "userId": "1",
                          "tablename": "${GETRENDERERDATA(\"form_get\", \"text\")}",
                          "indexlist": "${GETRENDERERDATA(\"form_get\", \"checkboxes\")}",
                          "autoIncrementId": "${GETRENDERERDATA(\"form_get\", \"radios\") === 'A'}",
                          "databasetablefields": "${GETRENDERERDATA(\"form_get\", \"table2\")}",
                          "primaryKey": "${GETRENDERERDATA(\"form_get\", \"checkboxes2\")}"
                        }
                      },
                      {
                        "componentId": "u:194fc4a71066",
                        "actionType": "reload",
                        "args": {
                          "resetPage": true
                        },
                        "dataMergeMode": "merge"
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      },
      "id": "u:cf4174e0a842",
      "level": "light"
    },
    {
      "type": "button",
      "label": "刷新表格",
      "id": "u:20829abd0918",
      "api": {
        "method": "post",
        "url": "http://localhost:8081/databasesource/refreshdatabase",
        "data": {
          "userId": "1"
        },
        "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
        "dataType": "form-data"
      },
      "actionType": "ajax"
    }
  ]
}