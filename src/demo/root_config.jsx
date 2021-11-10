import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

import AppConfigContext from '@app/config';
import AppRootContext from '@app/store/root';

export default observer(() => {
    const root = useContext(AppRootContext);
    const { staticHost } = useContext(AppConfigContext);

    useEffect(() => {
        const { setHeader, setFooter, setMenu, setUser } = root;

        setHeader({
            theme: 'light',
            logo: `${staticHost?.img}logo.jpg`,
            rightLinks: [
                { name: '帮助', icon: 'help', url: 'https://zh.wikipedia.org/wiki/帮助' },
                { name: '反馈', icon: 'feedback', url: 'https://zh.wikipedia.org/wiki/反馈' },
            ],
            userMenu: [
                { name: '退出', icon: 'logout', url: '/logout' },
            ],
        });

        setUser({ id: 'kyod', name: '风儿' });

        setFooter({ text: '@www.baidu.com' });

        setMenu([
            {
                name: '页面', icon: 'page', path: '/page',
                child: [
                    {
                        name: '基础', icon: 'base', path: '/page/base',
                        child: [
                            { name: '列表', icon: 'list', path: '/page/base/list' },
                            { name: '添加', icon: 'add', path: '/page/base/b_add' },
                            { name: '详情', icon: 'detail', path: '/page/base/b_detail?id=1' },
                            { name: '编辑', icon: 'edit', path: '/page/base/b_edit?id=1' },
                        ],
                    },
                ],
            },
            { name: 'v2', path: '/v2' },
            {
                name: 'v2', path: '/v2/page', child: [
                    {
                        name: '基础', icon: 'base', path: '/v2/page/base',
                        child: [
                            { name: '列表', icon: 'list', path: '/v2/page/base/list' },
                            { name: '添加', icon: 'add', path: '/v2/page/base/b_add' },
                            { name: '详情', icon: 'detail', path: '/v2/page/base/b_detail?id=1' },
                            { name: '编辑', icon: 'edit', path: '/v2/page/base/b_edit?id=1' },
                        ],
                    }
                ],
            },
        ]);
    }, []);

    return null;
});
