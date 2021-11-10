import { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, useHistory } from 'react-router-dom';

import { AntdCharts } from './demos/Index';

const AuthCallBack = () => <h1>AuthCallBack</h1>;
const Login = () => <h1>Login</h1>;
const Logout = () => <h1>Logout</h1>;
const Router = () => <h1>Router</h1>

// 账号校验
// 第一次打开网页
export default observer(() => {
    // const {} = useContext();
    // const root = useContext(null);

    //
    return (
        <Switch>
            {/* <Route path={login} exact><Login /></Route>
            <Route path={logout} exact><Logout /></Route>
            <Route path={callback} exact><AuthCallBack /></Route> */}
            {/* <Route path="/v2">
                <Router />
            </Route>
            <Route path="/">
                <BackV1 />
            </Route> */}

            <Route path="/demos"><AntdCharts /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/users"><Users /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    );
});

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Home = () => <h2>Home</h2>;
// const AntdCharts = () => <h2>AntdCharts</h2>;

const BackV1 = () => {
    // useEffect(() => {
    //     globalThis.location.reload();
    // }, []);
    // return null;
    return <h1>hello</h1>;
};
