export const schema_back = 
{
    "title": "数据源管理",
    "remark": "bla bla bla",
    "body": {
    "type": "crud",
    "syncLocation": false,
    "api": {
      "url": "http://localhost:8081/databasesource/getdatasource",
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
        {
            "type": "button",
            "label": "新增",
            "actionType": "dialog",
            "level": "primary",
            "dialog": {
              "title": "新增",
              "body": [
                {
                  "type": "form",
                  "api": {
                    "url": "http://localhost:8081/databasesource/adddatasource",
                    "data": {
                      "userId": 1,
                      "username": "${username}",
                      "password": "${password}",
                      "databasetype": "${databasetype}",
                      "url": "${url}"
                    },
                    "requestAdaptor": "",
                    "adaptor": "return {\r\n  ...payload,\r\n  status: payload.code == 200 ? 0:payload.code\r\n}",
                    "dataType": "json",
                    "method": "post",
                    "messages": {
                    }
                  },
                  "body": [
                    {
                      "type": "input-text",
                      "name": "url",
                      "label": "链接",
                      "id": "u:2b532163d40a"
                    },
                    {
                      "type": "input-text",
                      "name": "username",
                      "label": "用户名",
                      "id": "u:94cda264d943"
                    },
                    {
                      "type": "input-password",
                      "name": "password",
                      "label": "密码",
                      "id": "u:7732ae7575e9"
                    },
                    {
                      "type": "input-text",
                      "name": "databasetype",
                      "label": "数据库类型",
                      "id": "u:37ce44ff23f2"
                    }
                  ],
                  "id": "u:fedf18d4e81d"
                }
              ],
              "type": "dialog",
              "id": "u:de5755c02025"
            },
            "id": "u:c1da1c07bc18"
          },
      "bulkActions"
    ],
    "mode": "table",
    "columns": [
      {
        "name": "datasourseId",
        "label": "ID",
        "type": "text",
        "id": "u:de666c8ffb4e"
      },
      {
        "name": "url",
        "label": "链接",
        "type": "text",
        "id": "u:0bc384007eb8"
      },
      {
        "type": "text",
        "label": "用户名",
        "name": "username",
        "id": "u:5680c5b3521a"
      },
      {
        "type": "input-password",
        "label": "密码",
        "name": "password",
        "id": "u:95363b37ffbf",
        "readOnly": true
      },
      {
        "type": "text",
        "label": "数据库类型",
        "name": "databasetype",
        "id": "u:6dd80f18d2be"
      },
      {
        "type": "date",
        "label": "创建时间",
        "name": "createtime",
        "id": "u:b4815beb483b"
      },
      {
        "type": "date",
        "label": "更新时间",
        "name": "updatetime",
        "id": "u:d56bac214f93"
      },
      {
        "type": "operation",
        "label": "操作",
        "buttons": [
          {
            "type": "button",
            "label": "删除",
            "actionType": "ajax",
            "level": "link",
            "className": "text-danger",
            "confirmText": "确定要删除？",
            "api": {
              "url": "http://localhost:8081/databasesource/deletedatasource",
              "dataType": "json",
              "method": "post"
            },
            "id": "u:4000b52f982f"
          },
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
                    "label": "源ID",
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
                    "label": "用户名",
                    "name": "username",
                    "id": "u:5680c5b3521a",
                    "type": "static"
                  },
                  {
                    "label": "密码",
                    "name": "password",
                    "id": "u:95363b37ffbf",
                    "type": "static"
                  },
                  {
                    "label": "数据库类型",
                    "name": "databasetype",
                    "id": "u:6dd80f18d2be",
                    "type": "static"
                  },
                  {
                    "label": "创建时间",
                    "name": "createtime",
                    "id": "u:b4815beb483b",
                    "type": "static"
                  },
                  {
                    "label": "更新时间",
                    "name": "updatetime",
                    "id": "u:d56bac214f93",
                    "type": "static"
                  }
                ]
              }
            },
            "id": "u:adc9799de929"
          }
        ],
        "id": "u:3dfe531f8f71"
      }
    ],
    "features": [
      "create",
      "delete"
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
}