import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
// import moment from 'moment';

import { AppConfigProvider } from '@app/config';
import config from '@app/demo/config';
import Root from '@app/demo/root_config';

import PageRouter from '@app/demo/router/page';

// moment.locale('zh-cn');

export default function App() {
    return (
        <AppConfigProvider value={config}>
            <BrowserRouter>
                {/* <ConfigProvider locale={zhCN}> */}
                    <h1>hello</h1>
                    <Root />
                    <Switch>
                        <Route exact path="/"><h1>demo</h1></Route>
                        <Route path="/page"><h1>page</h1></Route>
                        <Route path="/v2/page"><h1>v2-page</h1></Route>
                    </Switch>
                {/* </ConfigProvider> */}
            </BrowserRouter>
        </AppConfigProvider>
    );
};
