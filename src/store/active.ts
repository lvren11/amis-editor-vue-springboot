export const schema_active = {
    "type": "page",
    "title": "数据源激活",
    "remark": "bla bla bla",
    "body": [
      {
        "type": "crud",
        "syncLocation": false,
        "api": {
          "url": "http://localhost:8081/databasesource/getdataactive",
          "data": {
            "userId": 1,
            "pagenum": "${pagenum}",
            "pagesize": "${pagesize}"
          },
          "requestAdaptor": "",
          "adaptor": "\r\nreturn {\r\n    ...payload,\r\n    status: payload.code === 200 ? 0 : payload.code,\r\n    data: {\r\n        items: payload.data.data,\r\n        total: payload.data.total\r\n    }\r\n}",
          "dataType": "json",
          "method": "post",
          "messages": {
          }
        },
        "bulkActions": [
        ],
        "itemActions": [
        ],
        "id": "u:801368906220",
        "perPageAvailable": [
          10
        ],
        "messages": {
        },
        "headerToolbar": [
          "bulkActions"
        ],
        "mode": "table",
        "columns": [
          {
            "type": "text",
            "label": "数据源ID",
            "name": "datasourseId",
            "id": "u:d4cc5f0c327e"
          },
          {
            "name": "url",
            "label": "链接",
            "type": "text",
            "id": "u:0bc384007eb8"
          },
          {
            "type": "text",
            "label": "激活状态",
            "name": "isactive",
            "id": "u:5680c5b3521a",
            "classNameExpr": "<%= data.isactive ? 'bg-success' : '' %>"
          },
          {
            "type": "date",
            "label": "上一次激活时间",
            "name": "updatetime",
            "id": "u:d56bac214f93"
          },
          {
            "type": "text",
            "label": "创建时间",
            "name": "createtime",
            "id": "u:892c566870b2"
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
                  "body": {
                    "type": "form",
                    "api": "xxx/update",
                    "body": [
                      {
                        "name": "datasourseId",
                        "label": "ID",
                        "id": "u:de666c8ffb4e",
                        "type": "static"
                      },
                      {
                        "name": "url",
                        "label": "链接",
                        "id": "u:0bc384007eb8",
                        "type": "static"
                      },
                      {
                        "label": "激活状态",
                        "name": "isactive",
                        "id": "u:5680c5b3521a",
                        "type": "static"
                      },
                      {
                        "label": "上一次激活时间",
                        "name": "updatetime",
                        "id": "u:d56bac214f93",
                        "type": "static"
                      },
                      {
                        "label": "创建时间",
                        "name": "createtime",
                        "id": "u:892c566870b2",
                        "type": "static"
                      }
                    ]
                  }
                },
                "id": "u:6326b7c5d00a"
              },
              {
                "type": "button",
                "label": "切换",
                "id": "u:d12251df5519",
                "confirmText": "确认切换这个数据源吗",
                "actionType": "ajax",
                "level": "link",
                "className": "text-danger",
                "api": {
                  "url": "http://localhost:8081/databasesource/putdataactive?userid=${userId}&datasourceid=${datasourseId}",
                  "method": "put"
                }
              }
            ],
            "id": "u:91f9c3a56246"
          }
        ],
        "features": [
          "view"
        ],
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
        "filter": null
      }
    ],
    "id": "u:3e205c64f454"
  }