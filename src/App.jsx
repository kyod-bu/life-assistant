import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
// React Router
import { BrowserRouter, Switch, Route, Link,
    // Redirect,
    useRouteMatch, useParams,
    // useHistory,
    // useLocation
} from 'react-router-dom';

import AppPage from './AppPage';
import './styles/App.css';

const NavComponent = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/topics">Topics</Link></li>
        </ul>
    </nav>
);

export default function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <BrowserRouter>
                <NavComponent />
                {/* 通过 Switch 查看它的子路由 Route，并渲染出 与当前 URL 匹配的第一个子路由 */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/users"><Users /></Route>
                    <Route path="/topics"><Topics /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </BrowserRouter>
        </ConfigProvider>
    )
};

const Home = () => (
    <div>
        <h2>Home</h2>
        <AppPage />
    </div>
);
const About = () => (
    <div>
        <h2>About</h2>
        <div>
            <iframe
                title="codesandbox"
                name="codesandbox"
                src="https://codesandbox.io/s/react-iframe-examples-36k1x"
                style={{ width: '100%', height: '100vh', border: '0px', borderRadius: '4px' }}
            >
            </iframe>
        </div>
    </div>
);
const Users = () => <h2>Users</h2>;

// 嵌套路由
const Topics = () => {
    let match = useRouteMatch();
    console.log("match::", match);

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
