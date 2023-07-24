import {schema2component} from './AMISRenderer';

export default schema2component(
  {
    type: 'dialog',
    title: '下载代码',
    body: {
      type: 'form',
      controls: [
        {
          type: 'text',
          label: '组件名称',
          name: 'label',
          validations: {
            maxLength: 20
          },
          required: true
        },

        {
          type: 'radios',
          label: '渲染文件',
          name: 'amisrender',
          options:[
            {
              "label": "生成",
              "value": "yes"
            },
            {
              "label": "不生成",
              "value": "no"
            }
          ],
          value:"yes",
          required: true
        },

        {
          type: 'radios',
          label: 'README.md',
          name: 'readme',
          options:[
            {
              "label": "要",
              "value": "yes"
            },
            {
              "label": "不要",
              "value": "no"
            }
          ],
          value:"yes",
          required: true
        }
      ]
    }
  },
  ({onConfirm, ...rest}: any) => {
    return {
      ...rest,
      onConfirm: (values: Array<any>) => onConfirm && onConfirm(values[0])
    };
  }
);
