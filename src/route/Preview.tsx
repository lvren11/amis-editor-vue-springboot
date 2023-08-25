import React from 'react';
import {observer, inject} from 'mobx-react';
import {IMainStore} from '../store';
import {Button, AsideNav, Layout, confirm} from 'amis';
import {RouteComponentProps, matchPath, Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';
import AMISRenderer from '../component/AMISRenderer';
import AddPageModal from '../component/AddPageModal';
import GenerateCode from '../component/GenerateCode';
import { AMISRendererSourceCode } from '../component/AMISRendererCode';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import AddPlugin from '../component/AddPlugin';


function isActive(link: any, location: any) {
  const ret = matchPath(location?.pathname, {
    path: link ? link.replace(/\?.*$/, '') : '',
    exact: true,
    strict: true
  });

  return !!ret;
}

const ingnored_link : Array<string> = ["/background","/backgroundactive","/backgroundtable","/backgroundcode"];

export default inject('store')(
  observer(function ({
    store,
    location,
    history
  }: {store: IMainStore} & RouteComponentProps) {

    function handleRredict(){
      history.push(`/background`);
    }

    function renderHeader() {
      return (
        <>
          <div className={`cxd-Layout-brandBar`}>
            <div className="cxd-Layout-brand text-ellipsis">
              <i className="fa fa-paw"></i>
              <span className="hidden-folded m-l-sm">低代码页面生成</span>
            </div>
          </div>
          <div className={`cxd-Layout-headerBar`}>
            <div className="hidden-xs p-t-sm ml-auto px-2">
            <Button
                size="sm"
                className="m-r-xs"
                level="default"
                onClick={handleRredict}
              >
                跳转后端
              </Button>
            <Button
                size="sm"
                className="m-r-xs"
                level="danger"
                onClick={() => store.setAddPluginIsOpen(true)}
              >
                屏蔽组件
              </Button>
              <Button 
              size="sm" 
              className="m-r-xs" 
              level="success" 
              onClick={() => store.setGenerateIsClick(true)}
              >
                页面代码导出
              </Button>
              <Button
                size="sm"
                className="m-r-xs"
                level="info"
                onClick={() => store.setAddPageIsOpen(true, false)}
              >
                新增页面
              </Button>
              <Button
                size="sm"
                level="enhance"
                onClick={() => store.setAddPageIsOpen(true, true)}
              >
                复制界面
              </Button>
            </div>
          </div>
        </>
      );
    }

    function renderAside() {
      const navigations = store.pages.map(item => ({
        label: item.label,
        path: `/${item.path}`,
        icon: item.icon
      }));
      const paths = navigations.map(item => item.path);

      return (
        <AsideNav
          key={store.asideFolded ? 'folded-aside' : 'aside'}
          navigations={[
            {
              label: '导航',
              children: navigations
            }
          ]}
          renderLink={({link, toggleExpand, classnames: cx, depth}: any) => {
            if (link.hidden) {
              return null;
            }
            let children = [];

            if (link.children) {
              children.push(
                <span
                  key="expand-toggle"
                  className={cx('AsideNav-itemArrow')}
                  onClick={e => toggleExpand(link, e)}
                ></span>
              );
            }

            link.badge &&
              children.push(
                <b
                  key="badge"
                  className={cx(
                    `AsideNav-itemBadge`,
                    link.badgeClassName || 'bg-info'
                  )}
                >
                  {link.badge}
                </b>
              );

            if (link.icon) {
              children.push(
                <i key="icon" className={cx(`AsideNav-itemIcon`, link.icon)} />
              );
            } else if (store.asideFolded && depth === 1) {
              children.push(
                <i
                  key="icon"
                  className={cx(
                    `AsideNav-itemIcon`,
                    link.children ? 'fa fa-folder' : 'fa fa-info'
                  )}
                />
              );
            }

            if(link.active){
              store.UpdateNowLink(link.path);
            }
           
            link.active ||

            ingnored_link.indexOf(link.path) > -1 ?
            "":
              children.push(
                <i
                  key="delete"
                  data-tooltip="删除"
                  data-position="bottom"
                  className={'navbtn fa fa-times'}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    confirm('确认要删除').then(confirmed => {
                      confirmed && store.removePageAt(paths.indexOf(link.path));
                    });
                  }}
                />
              );

            ingnored_link.indexOf(link.path) > -1 ? 
            link.active 
            :
            children.push(
              <i
                key="edit"
                data-tooltip="编辑"
                data-position="bottom"
                className={'navbtn fa fa-pencil'}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  history.push(`/edit/${paths.indexOf(link.path)}`);
                }}
              />
            );

            children.push(
              <span key="label" className={cx('AsideNav-itemLabel')}>
                {link.label}
              </span>
            );
            // console.log(link.path)
            // console.log(link.path[0])
            // console.log(children)
            return link.path ? (
              link.active ? (
                <a>{children}</a>
              ) : (
                <Link to={link.path[0] === '/' ? link.path : `${link.path}`}>
                  {children}
                </Link>
              )
            ) : (
              <a
                onClick={
                  link.onClick
                    ? link.onClick
                    : link.children
                    ? () => toggleExpand(link)
                    : undefined
                }
              >
                {children}
              </a>
            );
          }}
          isActive={(link: any) =>
            isActive(
              link.path && link.path[0] === '/' ? link.path : `${link.path}`,
              location
            )
          }
        />
      );
    }

    function addremoveplugin(value: {pluginlist: any}){
      store.UpdateDisabledRenderers(value.pluginlist);
      store.setAddPluginIsOpen(false);
    }


    function handleConfirm(value: {label: string; icon: string; path: string}) {
      if(!store.isCopy){
        store.addPage({
          ...value,
          schema: {
            type: 'page',
            title: value.label,
            body: '新增页面。'
          }
        });
      }else{
        store.pages.map(item => {
          if(item.path === store.nowLink.split("/")[1]){
            store.addPage({
              ...value,
              schema: item.schema
            });
          }
        });
      }
      store.setAddPageIsOpen(false, false);
    }

    function download(value: {label: string; amisrender: string; readme: string}){
      const foundItem = store.pages.find(item => {
        return item.path === store.nowLink.split("/")[1];
      });
      const schema = foundItem ? foundItem.schema : null;
      const vueTemplate = `
<template>
  <amis-renderer :schema="schema"/>
</template>
<script>
import AMISRenderer from "@/components/AMISRenderer.vue";
const schema = ${JSON.stringify(schema, null, 2)};
export default {
  name: "${value.label}",
  components: {
    "amis-renderer": AMISRenderer,
  },
  computed: {},
  data: () => ({
    schema: schema
  }),
};
</script>
`;

      const mdTemplate = `
AMISRenderer.vue 放入components中,
组件vue引用即可,
依赖包："amis": "^3.2.0", "qs":"^6.11.2", "axios"
`;
      
      // 生成压缩包
      const zip = new JSZip();
      const filename = value.label + ".vue";
      zip.file(filename, vueTemplate);
      if(value.amisrender){
        zip.file('AMISRenderer.vue', AMISRendererSourceCode); // 将 AMISRenderer.vue 的源代码放入压缩包
      }
      if(value.readme === "yes"){
        zip.file('README.md', mdTemplate); //加入readme
      }
      zip.generateAsync({ type: 'blob' }).then((content) => {
        const date = new Date().toISOString().slice(0, 10);
        saveAs(content, `generated_code_${date}.zip`);
      });
      store.setGenerateIsClick(false);
    }

    return (
      <Layout
        aside={renderAside()}
        header={renderHeader()}
        folded={store.asideFolded}
        offScreen={store.offScreen}
      >
        <Switch>
          {store.pages.map((item: any) => (
            <Route
              key={item.id}
              path={`/${item.path}`}
              render={() => <AMISRenderer schema={item.schema} />}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
        <AddPageModal
          show={store.addPageIsOpen}
          onClose={() => store.setAddPageIsOpen(false, false)}
          onConfirm={handleConfirm}
          pages={store.pages.concat()}
        />
        <GenerateCode
          show={store.generateIsClick}
          onClose={() => store.setGenerateIsClick(false)}
          onConfirm={download}
        />
        <AddPlugin
          show={store.addPluginIsOpen}
          disabledplugin={store.disabledRenderers}
          onClose={() => store.setAddPluginIsOpen(false)}
          onConfirm={addremoveplugin}
        />
      </Layout>
    );
  })
);
