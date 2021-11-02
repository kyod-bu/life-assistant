import { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, useHistory } from 'react-router-dom';

import Demo from './components/Demo';

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

            <Route path="/v2"><Router /></Route>
            <Route path="/"><BackV1 /></Route>
        </Switch>
    );
});

const BackV1 = () => {
    // useEffect(() => {
    //     globalThis.location.reload();
    // }, []);
    // return null;
    return <h1>hello</h1>;
};
