export const schema_code = {
  "type": "page",
  "title": "Java导出",
  "body": [
    {
      "type": "tabs",
      "tabsMode": "line",
      "tabs": [
        {
          "title": "定制配置",
          "body": [
            {
              "type": "crud",
              "id": "u:194fc4a71066",
              "syncLocation": false,
              "api": {
                "method": "post",
                "url": "http://localhost:8081/basecodetofileparam/gettableconfig",
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
                  "type": "operation",
                  "label": "操作",
                  "buttons": [
                    {
                      "type": "button",
                      "label": "编辑配置",
                      "onEvent": {
                        "click": {
                          "actions": [
                            {
                              "actionType": "dialog",
                              "dialog": {
                                "type": "dialog",
                                "title": "代码生成配置",
                                "body": [
                                  {
                                    "type": "form",
                                    "title": "表单",
                                    "body": [
                                      {
                                        "type": "grid",
                                        "id": "u:4788a2a34057",
                                        "columns": [
                                          {
                                            "body": [
                                              {
                                                "label": "表名",
                                                "type": "input-text",
                                                "name": "tableName",
                                                "id": "u:1f0279476185",
                                                "size": "md",
                                                "placeholder": "",
                                                "readOnly": true,
                                                "value": ""
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "作者",
                                                "name": "author",
                                                "id": "u:25d5b3682dd6",
                                                "value": ""
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "实体名",
                                                "name": "entityname",
                                                "id": "u:c8fb633d3934",
                                                "value": "entity"
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "服务名",
                                                "name": "servicename",
                                                "id": "u:e2c373c251be",
                                                "value": "service"
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "控制层名",
                                                "name": "controllername",
                                                "id": "u:e030cbc9d401",
                                                "value": "controller"
                                              },
                                              {
                                                "type": "checkbox",
                                                "option": "开启Swagger",
                                                "name": "isswagger",
                                                "id": "u:5761a708ac0d",
                                                "label": "",
                                                "value": true
                                              },
                                              {
                                                "type": "checkbox",
                                                "option": "Lombook配置",
                                                "name": "islombook",
                                                "id": "u:fb893ecbd063",
                                                "value": true
                                              }
                                            ],
                                            "id": "u:28db5ea29057"
                                          },
                                          {
                                            "body": [
                                              {
                                                "type": "input-text",
                                                "label": "表前缀",
                                                "name": "tbprefix",
                                                "id": "u:13de9212fae7",
                                                "size": "md"
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "包名",
                                                "name": "packagename",
                                                "id": "u:881a4e786900",
                                                "value": ""
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "Mapper名",
                                                "name": "mappername",
                                                "id": "u:6ef7c0d86184",
                                                "value": "mapper"
                                              },
                                              {
                                                "type": "input-text",
                                                "label": "服务实现类名",
                                                "name": "serviceimplname",
                                                "id": "u:4e5c1653935b",
                                                "value": "impl"
                                              },
                                              {
                                                "type": "radios",
                                                "label": "IdType",
                                                "name": "idtype",
                                                "options": [
                                                  {
                                                    "label": "ASSIGN_ID",
                                                    "value": "ASSIGN_ID"
                                                  },
                                                  {
                                                    "label": "ASSIGN_UUID",
                                                    "value": "ASSIGN_UUID"
                                                  },
                                                  {
                                                    "label": "AUTO",
                                                    "value": "AUTO"
                                                  },
                                                  {
                                                    "label": "INPUT",
                                                    "value": "INPUT"
                                                  },
                                                  {
                                                    "label": "NONE",
                                                    "value": "NONE"
                                                  }
                                                ],
                                                "id": "u:083f99191cff",
                                                "value": ""
                                              },
                                              {
                                                "type": "checkbox",
                                                "option": "Rest风格",
                                                "name": "isrestcontroller",
                                                "id": "u:38ea69cffb0b",
                                                "value": true
                                              }
                                            ],
                                            "id": "u:3965be6177dd"
                                          }
                                        ]
                                      }
                                    ],
                                    "mode": "horizontal",
                                    "id": "formge_config",
                                    "name": "formge"
                                  }
                                ],
                                "showCloseButton": true,
                                "showErrorMsg": true,
                                "showLoading": true,
                                "className": "app-popover",
                                "id": "u:11e48d0e954c",
                                "closeOnEsc": false,
                                "size": "md",
                                "onEvent": {
                                  "confirm": {
                                    "weight": 0,
                                    "actions": [
                                      {
                                        "actionType": "ajax",
                                        "args": {
                                          "api": {
                                            "url": "http://localhost:8081/basecodetofileparam/saveconfig",
                                            "method": "post",
                                            "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                                            "dataType": "json",
                                            "data": {
                                              "tbnames": "${tableName}",
                                              "tbprefix": "${tbprefix}",
                                              "author": "${author}",
                                              "isswagger": "${isswagger}",
                                              "idtype": "${idtype}",
                                              "packagename": "${packagename}",
                                              "entityname": "${entityname}",
                                              "mappername": "${mappername}",
                                              "servicename": "${servicename}",
                                              "serviceimplname": "${serviceimplname}",
                                              "controllername": "${controllername}",
                                              "isrestcontroller": "${isrestcontroller}",
                                              "islombook": "${islombook}",
                                              "id": "${id}",
                                              "tableId": "${tableId}",
                                              "tableName": "${tableName}",
                                              "datasourceId": "${datasourceId}"
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "actionType": "reload",
                                        "componentId": "u:194fc4a71066",
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
                    }
                  ],
                  "id": "u:c65307a96871"
                }
              ],
              "bulkActions": [
                {
                  "type": "button",
                  "label": "批量生成",
                  "actionType": "ajax",
                  "id": "u:91e4b1ae63a2",
                  "onEvent": {
                  },
                  "api": {
                    "method": "post",
                    "url": "http://localhost:8081/datacode/tablecode",
                    "requestAdaptor": "api.data = {\r\n  baseCodeToFileParamList: api.data.items,\r\n  userId: '1'\r\n}\r\nreturn {\r\n  ...api\r\n}",
                    "responseType": "blob"
                  }
                }
              ],
              "itemActions": [
              ],
              "features": [
                "bulkUpdate"
              ],
              "filterColumnCount": 3,
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
          "id": "u:91dfa049417c"
        }
      ],
      "id": "u:89a829d3991f"
    }
  ],
  "id": "u:38dfab2330cf",
  "toolbar": [
  ]
}