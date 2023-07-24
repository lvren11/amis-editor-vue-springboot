import {schema2component} from './AMISRenderer';
import { PluginList } from './PluginList';


//屏蔽组件的选项
export default schema2component(
    {
        type: 'dialog',
        title: '屏蔽组件',
        size: 'full',
        body: {
            type: 'form',
            controls: [
                {
                name: 'pluginlist',
                type: 'checkboxes',
                checkAll: true,
                options: PluginList,
                value:'',
                }
            ]
        }
  },
  ({onConfirm, disabledplugin, ...rest}: any) => {
    return {
      ...rest,
      onConfirm: (values: Array<any>) => onConfirm && onConfirm(values[0])
    };
  }
);
