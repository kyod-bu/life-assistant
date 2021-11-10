import { DF_CONFIG } from '../config/index';

const cdnHost = 'https://www.baidu.com';

const CONFIG = {
    ...DF_CONFIG,
    staticHost: { svg: `${cdnHost}/svg/`, img: `${cdnHost}/img/`, js: `${cdnHost}/js/`},
    errContent: <div>如需帮助，请联系：<a href="/help">小助手</a></div>,
};

export default CONFIG;
