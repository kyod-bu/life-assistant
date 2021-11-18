import { createContext } from 'react';
import { DF_API_CODE, DF_API_FORMAT } from './api';

export const DF_CONFIG = {
    apiDataFormat: DF_API_FORMAT,
    apiCode: DF_API_CODE,
    staticHost: { svg: '' },
    apiHost: {},
    authPath: { register: '/register', login: '/login', reset: '/reset', logout: '/logout', callback: '/callback'},
    chartsCDN: 'https://cdn.jsdelivr.net/npm/@ant-design/charts@1.2.14/dist/charts.min.js',
};

const AppConfigContext = createContext(DF_CONFIG);

export const AppConfigProvider = AppConfigContext.Provider;
export const AppConfigConsumer = AppConfigContext.Consumer;
export default AppConfigContext;
