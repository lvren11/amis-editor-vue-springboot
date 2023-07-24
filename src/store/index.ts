import {types, getEnv, applySnapshot, getSnapshot} from 'mobx-state-tree';
import {PageStore} from './Page';
import {reaction} from 'mobx';

let pagIndex = 1;
export const MainStore = types
  .model('MainStore', {
    pages: types.optional(types.array(PageStore), [
      {
        id: `${pagIndex}`,
        path: 'hello-world',
        label: 'Hello world',
        icon: 'fa fa-file',
        schema: {
          type: 'page',
          title: 'Hello world',
          body: '初始页面'
        }
      }
    ]),
    theme: 'cxd',
    asideFixed: true,
    asideFolded: false,
    offScreen: false,
    addPageIsOpen: false,
    addPluginIsOpen: false,
    isCopy: false,
    preview: false,
    isMobile: false,
    schema: types.frozen(),
    nowLink: '',
    disabledRenderers: 'audio,carousel,video,custom,log,sparkline,collapse-group,input-rating,panel,service,nested-select,tabs,dropdown-button,input-image,input-excel,input-tree,input-tag,list-select,button-group-select,picker,input-range,input-city,transfer,tabs-transfer,input-color,condition-builder,fieldset,combo,input-group,input-table,matrix-checkboxes,input-rich-text,diff-editor,editor,input-kv,input-repeat,uuid,location-picker,input-sub-form,hidden,wizard,web-component,each,property,iframe,qrcode,mapping,avatar,chart,time,datetime,json,progress,steps,timeline,status,code,markdown,collapse,office-viewer',
    generateIsClick: false
  })
  .views(self => ({
    get fetcher() {
      return getEnv(self).fetcher;
    },
    get notify() {
      return getEnv(self).notify;
    },
    get alert() {
      return getEnv(self).alert;
    },
    get copy() {
      return getEnv(self).copy;
    }
  }))
  .actions(self => {
    function toggleAsideFolded() {
      self.asideFolded = !self.asideFolded;
    }

    function toggleAsideFixed() {
      self.asideFixed = !self.asideFixed;
    }

    function toggleOffScreen() {
      self.offScreen = !self.offScreen;
    }

    function UpdateNowLink(localtion: string){
      self.nowLink = localtion;
    }

    function UpdateDisabledRenderers(disabledRenderers: string){
      self.disabledRenderers = disabledRenderers;
    }

    function setGenerateIsClick(isgenerated: boolean){
      self.generateIsClick = isgenerated
    }

    function setAddPageIsOpen(isOpened: boolean, isCopyed: boolean) {
      self.addPageIsOpen = isOpened;
      self.isCopy = isCopyed;
    }

    function setAddPluginIsOpen(isOpened: boolean) {
      self.addPluginIsOpen = isOpened;
    }

    function addPage(data: {
      label: string;
      path: string;
      icon?: string;
      schema?: any;
    }) {
      self.pages.push(
        PageStore.create({
          ...data,
          id: `${++pagIndex}`
        })
      );
    }

    function removePageAt(index: number) {
      self.pages.splice(index, 1);
    }

    function updatePageSchemaAt(index: number) {
      self.pages[index].updateSchema(self.schema);
    }

    function updateSchema(value: any) {
      self.schema = value;
    }

    function setPreview(value: boolean) {
      self.preview = value;
    }

    function setIsMobile(value: boolean) {
      self.isMobile = value;
    }

    return {
      toggleAsideFolded,
      toggleAsideFixed,
      toggleOffScreen,
      setAddPageIsOpen,
      setAddPluginIsOpen,
      setGenerateIsClick,
      UpdateDisabledRenderers,
      addPage,
      removePageAt,
      UpdateNowLink,
      updatePageSchemaAt,
      updateSchema,
      setPreview,
      setIsMobile,
      afterCreate() {
        // persist store
        if (typeof window !== 'undefined' && window.localStorage) {
          const storeData = window.localStorage.getItem('store');
          if (storeData) applySnapshot(self, JSON.parse(storeData));

          reaction(
            () => getSnapshot(self),
            json => {
              window.localStorage.setItem('store', JSON.stringify(json));
            }
          );
        }
      }
    };
  });

export type IMainStore = typeof MainStore.Type;
