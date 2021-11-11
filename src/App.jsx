/**
 * 在 create-react-app 中使用 `antd`
 * 在 create-react-app 中使用 `react-router-dom`
 */
import { useState } from 'react';
import { ConfigProvider, DatePicker, message, Button, version, Alert } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import './styles/App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

moment.locale('zh-cn');

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </nav>

                {/* 通过 Switch 查看它的子路由 Route，并渲染出 与当前 URL 匹配的第一个子路由 */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/users"><Users /></Route>
                    <Route path="/topics"><Topics /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        </Router>
    )
};

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

// 嵌套路由
const Topics = () => {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
                </li>
            </ul>

            {/* Topics 页面有自己的 Switch 和 建立在 /topics URL 路径上的更多的路由。
            你可以想到第二个 Route 在这里作为所有 topics 的“index”页面，或 未选择 topic 时显示的页面 */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>请选择一个 topic.</h3>
                </Route>
            </Switch>
        </div>
    );
};

const Topic = () => {
    let { topicId } = useParams();
    return <h3>Request topic ID: {topicId}</h3>;
};

const App2 = () => {
    const [date, setDate] = useState(null);

    const handleChange = value => {
        message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    }
    return (
        <ConfigProvider locale={zhCN}>
            <div className="App">
                <h1>antd version: {version}</h1>
                <p>您选择的日期是：{date ? date.format('YYYY年MM月DD日') : '未选择'}</p>
                <DatePicker onChange={handleChange} />
                <Button type="primary" style={{ marginLeft: 8 }}>Button</Button>
                <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
            </div>
        </ConfigProvider>
    )
};

export default App;
