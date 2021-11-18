import { DF_CONFIG } from './config/index';

const cdnHost = 'http://example.com';

const CONFIG = {
    ...DF_CONFIG,
    staticHost: { svg: `${cdnHost}/svg/`, img: `${cdnHost}/img/`, js: `${cdnHost}/js/` },
    errContent: <div>如需帮助，请联系<a href="wxwork://message?username=yafbu">小助手</a></div>
};

export default CONFIG;
