import React from 'react';
import {Provider} from 'mobx-react';
import {toast, alert, confirm} from 'amis';
import axios from 'axios';
import {MainStore} from './store/index';
import RootRoute from './route/index';
import copy from 'copy-to-clipboard';


declare global {
  interface Navigator {
      msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}

const attachmentAdpator = (response: any) => {

  if (
    response &&
    response.headers &&
    response.headers['content-disposition']
  ) {
    const disposition = response.headers['content-disposition'];
    let filename = '';
    if (disposition && disposition.indexOf('attachment') !== -1) {
      let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      let matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }

      // 很可能是中文被 url-encode 了
      if (filename && filename.replace(/[^%]/g, '').length > 2) {
        filename = decodeURIComponent(filename);
      }

      let type = response.headers['content-type'];
      let blob =
        response.data.toString() === '[object Blob]'
          ? response.data
          : new Blob([response.data], {type: 'application/zip'});

      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
      } else {
        let URL = window.URL || (window as any).webkitURL;
        console.log("111");
        let downloadUrl = URL.createObjectURL(blob);
        if (filename) {
          // use HTML5 a[download] attribute to specify filename
          let a = document.createElement('a');
          // safari doesn't support this yet
          if (typeof a.download === 'undefined') {
            (window as any).location = downloadUrl;
          } else {
            a.href = downloadUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
          }
        } else {
          (window as any).location = downloadUrl;
        }
        setTimeout(function () {
          URL.revokeObjectURL(downloadUrl);
        }, 100); // cleanup
      }

      return {
        ...response,
        data: {
          status: 0,
          msg: '文件即将开始下载。'
        }
      };
    }
  } else if (response.data.toString() === '[object Blob]') {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener('loadend', e => {
        const text = reader.result as string;

        try {
          resolve({
            ...response,
            data: {
              ...JSON.parse(text)
            }
          });
        } catch (e) {
          reject(e);
        }
      });

      reader.readAsText(response.data);
    });
  }

  return response;
};

export default function (): JSX.Element {
  const store = ((window as any).store = MainStore.create(
    {},
    {
      fetcher: ({url, method, data, responseType, config, headers}: any) => {
        config = config || {};
        config.headers = config.headers || headers || {};
        config.withCredentials = true;
        responseType && (config.responseType = responseType);
        console.log(responseType)
        if (method !== 'post' && method !== 'put' && method !== 'patch') {
          if (data) {
            config.params = data;
          }
          return (axios as any)[method](url, config);
        } else if (data && data instanceof FormData) {
          // config.headers = config.headers || {};
          // config.headers['Content-Type'] = 'multipart/form-data';
        } else if (
          data &&
          typeof data !== 'string' &&
          !(data instanceof Blob) &&
          !(data instanceof ArrayBuffer)
        ) {
          data = JSON.stringify(data);
          config.headers['Content-Type'] = 'application/json';
        }

        return (axios as any)[method](url, data, config).then(attachmentAdpator);
      },
      isCancel: (e: any) => axios.isCancel(e),
      notify: (type: 'success' | 'error' | 'info', msg: string) => {
        toast[type]
          ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
          : console.warn('[Notify]', type, msg);
        console.log('[notify]', type, msg);
      },
      alert,
      confirm,
      copy: (contents: string, options: any = {}) => {
        const ret = copy(contents, options);
        ret &&
          (!options || options.shutup !== true) &&
          toast.info('内容已拷贝到剪切板');
        return ret;
      }
    }
  ));

  return (
    <Provider store={store}>
      <RootRoute store={store} />
    </Provider>
  );
}
