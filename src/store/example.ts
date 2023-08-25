export const schema_example = 
{
  "type": "page",
  "title": "示例",
  "body": [
    {
      "type": "input-date-range",
      "label": "日期范围",
      "name": "date-range",
      "shortcuts": [
        "yesterday",
        "7daysago",
        "thismonth"
      ],
      "className": "",
      "size": "lg"
    },
    {
      "type": "form",
      "title": "查询条件",
      "body": [
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "input-date",
                  "label": "开始日期",
                  "name": "date",
                  "size": "full",
                  "placeholder": ""
                }
              ],
            },
            {
              "body": [
                {
                  "type": "input-date",
                  "label": "结束日期",
                  "name": "date1",
                  "id": "u:ae17c01f3851",
                  "size": "full",
                  "placeholder": ""
                }
              ],
            }
          ],
          "align": "center",
          "valign": "middle",
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          }
        },
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "select",
                  "label": "工单类型",
                  "name": "select",
                  "multiple": false,
                  "value": "",
                  "placeholder": "全部",
                  "valueField": "data"
                }
              ],
            },
            {
              "body": [
                {
                  "type": "input-text",
                  "label": "任务名称",
                  "name": "task",
                  "readOnly": false
                }
              ],
            }
          ],
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          },
          "align": "center",
          "valign": "middle"
        },
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "input-text",
                  "label": "持卡人姓名",
                  "name": "name",
                  "readOnly": false
                }
              ],
              "id": "u:445f6f9bd3c2"
            },
            {
              "id": "u:27eab1c93c87",
              "body": [
                {
                  "type": "input-text",
                  "label": "卡号",
                  "name": "card",
                  "id": "u:ddfd2fe176a4",
                  "readOnly": false
                }
              ]
            }
          ],
          "id": "u:a3319cb24324",
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          },
          "align": "center",
          "valign": "middle"
        },
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "input-text",
                  "label": "工单号",
                  "name": "wono",
                  "id": "u:ebac9fb00b23",
                  "readOnly": true,
                  "themeCss": {
                    "inputControlClassName": {
                      "padding-and-margin:default": {
                        "marginBottom": "20px"
                      }
                    }
                  },
                  "inputControlClassName": "inputControlClassName-ebac9fb00b23"
                }
              ],
              "id": "u:aa4da193410f",
              "valign": "middle"
            },
            {
              "body": [
                {
                  "type": "grid",
                  "columns": [
                    {
                      "body": [
                        {
                          "type": "checkbox",
                          "option": "显示颜色分类",
                          "name": "checkbox",
                          "id": "u:d3d6adc170b1"
                        }
                      ],
                      "id": "u:27199d0f24d5"
                    },
                    {
                      "body": [
                        {
                          "type": "checkbox",
                          "option": "显示授权",
                          "name": "checkbox1",
                          "id": "u:dfdfa671e2c5",
                          "onEvent": {
                          },
                          "value": false
                        }
                      ],
                      "id": "u:62c511e02456"
                    }
                  ],
                  "id": "u:991eea482227",
                  "valign": "top",
                  "align": "center"
                },
                {
                  "type": "grid",
                  "columns": [
                    {
                      "body": [
                        {
                          "type": "checkbox",
                          "option": "显示收藏",
                          "name": "checkbox2",
                          "id": "u:c70bf697e3d1"
                        }
                      ],
                      "id": "u:d4bde206c7b8"
                    },
                    {
                      "body": [
                        {
                          "type": "checkbox",
                          "option": "手动刷新",
                          "name": "checkbox3",
                          "id": "u:150d38188d98"
                        }
                      ],
                      "id": "u:77f5006ac400"
                    }
                  ],
                  "id": "u:545716a76327",
                  "align": "center"
                }
              ],
              "id": "u:961013f2c0b0"
            }
          ],
          "id": "u:3d1a59d2dfab",
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          },
          "align": "center",
          "valign": "middle"
        },
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "grid",
                  "columns": [
                    {
                      "body": [
                        {
                          "type": "select",
                          "label": "工单授权至",
                          "name": "selectwo",
                          "id": "u:3f2475fea3f0",
                          "multiple": false,
                          "size": "full",
                          "valueField": "data"
                        }
                      ],
                      "id": "u:514bf57fd957",
                      "md": 9
                    },
                    {
                      "body": [
                        {
                          "type": "button",
                          "label": "授权",
                          "onEvent": {
                            "click": {
                              "actions": [
                              ]
                            }
                          },
                          "id": "u:2fb9eda05f56"
                        }
                      ],
                      "id": "u:5e21d50dea35",
                      "valign": ""
                    }
                  ],
                  "id": "u:71b72faa9fd2"
                }
              ],
              "id": "u:674458304840",
              "valign": "middle"
            },
            {
              "body": [
              ],
              "id": "u:24f95dabf4c3"
            }
          ],
          "id": "u:6a9e6c88b263",
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          },
          "align": "center",
          "valign": "middle"
        },
        {
          "type": "grid",
          "columns": [
            {
              "body": [
                {
                  "type": "grid",
                  "columns": [
                    {
                      "body": [
                        {
                          "type": "select",
                          "label": "授权经办",
                          "name": "selectwo2",
                          "options": [
                            {
                              "label": "选项A",
                              "value": "A"
                            },
                            {
                              "label": "选项B",
                              "value": "B"
                            }
                          ],
                          "id": "u:924ef178f7fe",
                          "multiple": false,
                          "size": "full",
                          "hiddenOn": "${checkbox1 == false}"
                        }
                      ],
                      "id": "u:fec45337fe64",
                      "md": 9
                    },
                    {
                      "body": [
                        {
                          "type": "button",
                          "label": "驳回",
                          "onEvent": {
                            "click": {
                              "actions": [
                              ]
                            }
                          },
                          "id": "u:0a8c409ba7e5",
                          "hiddenOn": "${checkbox1==false}"
                        }
                      ],
                      "id": "u:34180fdfdcd8",
                      "valign": ""
                    }
                  ],
                  "id": "u:f9defb3c8c76"
                }
              ],
              "id": "u:0f2613f8ccf5",
              "valign": "middle"
            },
            {
              "body": [
              ],
              "id": "u:1e1324101346"
            }
          ],
          "id": "u:ad3d679f9640",
          "style": {
            "marginTop": "10px",
            "marginRight": "50px",
            "marginBottom": "10px",
            "marginLeft": "50px"
          },
          "align": "center",
          "valign": "middle"
        }
      ],
      "mode": "horizontal",
      "id": "u:543bc33ce157",
      "className": "m-l-lg m-r-lg p-r-sm p-l-sm",
      "actions": [
        {
          "type": "button",
          "label": "查询",
          "onEvent": {
            "click": {
              "actions": [
                {
                  "outputVar": "responseResult",
                  "actionType": "ajax",
                  "options": {
                  },
                }
              ]
            }
          },
          "id": "u:4cf0f25411e8",
          "themeCss": {
            "className": {
              "font:default": {
                "color": "#ffffff"
              },
              "background:default": "#4a90e2"
            }
          },
          "className": "className-4cf0f25411e8"
        }
      ],
      "wrapWithPanel": true
    },
    {
      "type": "crud",
      "syncLocation": false,
      "columns": [
        {
          "name": "",
          "label": "操作",
          "type": "operation",
          "id": "u:464939cdac35",
          "buttons": [
            {
              "type": "button",
              "label": "处理",
              "onEvent": {
                "click": {
                  "actions": [
                  ]
                }
              },
              "id": "u:063dbd9fbbd7"
            }
          ]
        },
        {
          "name": "wotype",
          "label": "工单类型",
          "type": "text",
          "id": "u:4da3e624d49f",
          "placeholder": "-",
          "sortable": true
        },
        {
          "type": "text",
          "label": "备注",
          "name": "log",
          "id": "u:315dea945cba"
        },
        {
          "type": "text",
          "label": "任务名称",
          "name": "taskname",
          "id": "u:c74771010467"
        },
        {
          "type": "text",
          "label": "工单号",
          "name": "wono",
          "id": "u:5658d239e66e",
          "placeholder": "-",
          "fixed": ""
        },
        {
          "type": "status",
          "label": "工单状态",
          "name": "status",
          "id": "u:21f861a98a69"
        },
        {
          "type": "text",
          "label": "创建人",
          "name": "createname",
          "id": "u:32f40a1cb0ca"
        },
        {
          "type": "text",
          "label": "持卡人姓名",
          "name": "name",
          "id": "u:a65cbae6c8d5"
        },
        {
          "type": "text",
          "label": "卡号",
          "name": "number",
          "id": "u:eb98ca184f3f"
        },
        {
          "type": "text",
          "label": "交易笔数",
          "name": "tradenum",
          "id": "u:9ce81988fa7b"
        },
        {
          "type": "text",
          "label": "币种",
          "name": "money",
          "id": "u:ccfaaadfec46"
        },
        {
          "type": "text",
          "label": "创建部门",
          "name": "bumen",
          "id": "u:5cb142541ddb"
        },
        {
          "type": "text",
          "label": "授权人",
          "name": "people",
          "id": "u:1c9db2befb7c"
        },
        {
          "type": "text",
          "label": "任务id",
          "name": "id",
          "id": "u:a95ea536339a"
        }
      ],
      "bulkActions": [
      ],
      "itemActions": [
      ],
      "features": [
        "bulkDelete"
      ],
      "id": "u:6e9663f1d6d5",
      "footable": false,
      "perPageAvailable": [
        10
      ],
      "messages": {
      },
      "keepItemSelectionOnPageChange": false,
      "loadDataOnce": true,
      "initFetch": "",
      "alwaysShowPagination": true,
      "footerToolbar": [
        {
          "type": "statistics"
        },
        {
          "type": "switch-per-page"
        },
        {
          "type": "pagination",
          "tpl": "内容",
          "wrapperComponent": "",
          "id": "u:e89fdcaa8e3d"
        }
      ],
      "autoFillHeight": false
    }
  ],
  "id": "u:c79cb48a99d9",
  "style": {
    "background": "#e6ebf5"
  },
  "toolbar": [
  ],
  "asideResizor": false,
  "pullRefresh": {
    "disabled": true
  }
}