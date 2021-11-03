import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.less';
import './index.css';

moment.locale('zh-cn');

export default function App() {
    return (
        <BrowserRouter>
            <ConfigProvider locale={zhCN}>
                <h1>hello</h1>
            </ConfigProvider>
        </BrowserRouter>
    );
}
