import {registerEditorPlugin, BasePlugin} from 'amis-editor';
import {
  RendererEventContext,
  SubRendererInfo,
  BasicSubRenderInfo,
  PluginInterface
} from 'amis-editor';
/**
 * 用于隐藏一些不需要的Editor组件
 * 
 */

// 需要在组件面板中隐藏的组件
// const disabledRenderers = [
//   'audio', // 音频
//   'carousel', // 轮播图
//   'video', //视频
//   'custom', // 自定义代码
//   'log', // 日志
//   'sparkline', // 走势图
//   'collapse-group', //折叠器
//   'input-rating', //评分
//   'panel', //面板
//   'service', //服务server
//   'nested-select', //级联选择器
//   'tabs', //curd
//   'dropdown-button', //下拉按钮
//   'input-image', //图片上传
//   'input-excel', //上传excel
//   'input-tree', //树选择框
//   'input-tag', //标签选择
//   'list-select', //列表选择
//   'button-group-select', //按钮点选
//   'picker', //列表选取
//   'input-range', //滑块
//   'input-city', //城市选择
//   'transfer', //穿梭器
//   'tabs-transfer', //组合穿梭器
//   'input-color', //颜色框
//   'condition-builder', //条件组件
//   'fieldset', //字段集
//   'combo', //组合输入
//   'input-group', //输入组合
//   'input-table', //表格编辑框
//   'matrix-checkboxes', //矩阵开关
//   'input-rich-text', //富文本编辑
//   'diff-editor', //Diff编辑器
//   'editor', //代码编辑器
//   'input-kv', //KV键值对
//   'input-repeat', //重复周期
//   'uuid', //UUID
//   'location-picker', //地理位置
//   'input-sub-form', //子表单项
//   'hidden', //隐藏域
//   'wizard', //向导
//   'web-component', //web
//   'each', //循环
//   'property', //属性
//   'iframe', //iframe
//   'qrcode', //二维码
//   'mapping', //yinshe
//   'avatar', //头鸺
//   'chart', //图表
//   'time', //时间展示
//   'datetime', //日期时间
//   'json', //json展示
//   'progress', //进度展示
//   'steps', //步骤条
//   'timeline', //时间轴
//   'status', //状态
//   'code', //分割线
//   'markdown', //Markdown
//   'collapse', //颉跌期
//   'office-viewer', //文档预览
// ];

export class ManagerEditorPlugin extends BasePlugin {
  order = 9999;
  
  buildSubRenderers(
    context: RendererEventContext,
    renderers: Array<SubRendererInfo>
  ): BasicSubRenderInfo | Array<BasicSubRenderInfo> | void {
    // 更新NPM自定义组件排序和分类
    // const myDict: MyDictionary[] = [];
    const disabledRenderers_str = JSON.parse(window.localStorage.getItem('store') || '')["disabledRenderers"].replace(/\s+/g, '');;
    const disabledRenderers: string[] = disabledRenderers_str.split(",");
    // console.log(disabledRenderers);
    for (let index = 0, size = renderers.length; index < size; index++) {
      // 判断是否需要隐藏 Editor预置组件
      const pluginRendererName = renderers[index].rendererName;
      // const parentLabel = renderers[index].tags?.toString() ?? '';
      // const childLabel = renderers[index].name;
      // let existingParent = myDict.find((dict) => dict.label === parentLabel);
      // if (!existingParent) {
      //   existingParent = { label: parentLabel, children: [] };
      //   myDict.push(existingParent);
      // }
    
      // const existingChild = existingParent.children.find((child) => child.label === childLabel);
      // if (existingChild) {
      //   existingChild.value = pluginRendererName;
      // } else {
      //   existingParent.children.push({ label: childLabel, value: pluginRendererName });
      // }
      if (
        pluginRendererName &&
        disabledRenderers.indexOf(pluginRendererName) > -1
      ) {
        // console.log(pluginRendererName);
        renderers[index].disabledRendererPlugin = true; // 更新状态
      }
    }
    // console.log(JSON.stringify(myDict,null,2));
  }
}

// interface MyDictionary {
//   label: string;
//   children: { label: string; value: string | undefined }[];
// }

registerEditorPlugin(ManagerEditorPlugin);
