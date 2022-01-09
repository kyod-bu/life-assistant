/**
 * 典型的页面布局
 * 1、上中下
 * 2、顶部-侧边布局-通栏
 * 3、顶部-侧边布局
 * 4、侧边布局（也可借助 ProLayout 实现）
 */
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, QuestionOutlined } from '@ant-design/icons';
import './index.css';

// import Header from './common/header';
// import Footer from './common/footer';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

const avatarDropdownMenu = (
    <Menu>
        <Menu.Item key="1">drop 1</Menu.Item>
        <Menu.Item key="2">drop 1</Menu.Item>
        <Menu.Item key="3">drop 1</Menu.Item>
    </Menu>
);

const CopyRight = (
    <span>
        <span>Ant Design &copy;2018 Created by Ant UED</span><br />
        <span>1998-{new Date().getFullYear()} by Tencent. All Rights Reserved.</span><br />
        <span>PCG技术运营部-业务安全中心-视频安全组 版权所有</span>
    </span>
);

const HeaderLogo = (
    <div className="logo">
        <a href="/">
            <img src="/logo4.svg" alt="logo" height={32}></img>
            <h1>生活助手</h1>
        </a>
    </div>
);
const HeaderLogo23 = (
    <div className="logo2">
        <a href="/">
            <img src="/logo4.svg" alt="logo" height={32} />
            <h1>生活助手</h1>
        </a>
    </div>
);
const HeaderLogo2 = (
    <div id='components-layout-demo-side'>
        <div className="logo2">
            <a href="/">
                <img src="/logo4.svg" alt="logo" height={32} />
                <h1>生活助手</h1>
            </a>
        </div>
    </div>
);

const HeaderRight = (
    <div className="header-right">
        <span className='header-right-icon'><PieChartOutlined /></span>
        <span className='header-right-icon'><FileOutlined /></span>
        <span className='header-right-icon'><TeamOutlined /></span>
        <a href='/test' target='_blank'>
            <span className='header-right-icon'><QuestionOutlined />帮助文档</span>
        </a>
        <span>
            <Dropdown overlay={avatarDropdownMenu}>
                <Badge count={300} overflowCount={99} showZero>
                    <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
                </Badge>
            </Dropdown>

        </span>
    </div>
);
const HeaderRight2 = (
    <div className="header-right2">
        <span className='header-right-icon2'><PieChartOutlined /></span>
        <span className='header-right-icon2'><FileOutlined /></span>
        <span className='header-right-icon2'><TeamOutlined /></span>
        <a href='/test' target='_blank'>
            <span className='header-right-icon2'><QuestionOutlined />帮助文档</span>
        </a>
        <span>
            <Dropdown overlay={avatarDropdownMenu}>
                <Badge count={300} overflowCount={99} showZero>
                    <Avatar src="https://joeschmoe.io/api/v1/random" size="large" />
                </Badge>
            </Dropdown>

        </span>
    </div>
);

const BreadcrumbComponent = (
    <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
);

// 水平菜单
const MenuComponent = (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
    </Menu>
);

// 垂直菜单
const MenuComponent2 = (
    <Menu
        theme="dark" // 顶部-侧边布局-通栏（不需要）
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
            height: '100%',
            // borderRight: 0 // 顶部-侧边布局-通栏（需要）
        }}
    >
        <Menu.Item key="0" icon={<PieChartOutlined />}>option 0</Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            {new Array(3).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`option ${key}`}</Menu.Item>;
            })}
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option 5</Menu.Item>
            <Menu.Item key="6">option 6</Menu.Item>
            <Menu.Item key="7">option 7</Menu.Item>
            <Menu.Item key="8">option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option 9</Menu.Item>
            <Menu.Item key="10">option 10</Menu.Item>
            <Menu.Item key="11">option 11</Menu.Item>
            <Menu.Item key="12">option 12</Menu.Item>
        </SubMenu>
        <Menu.Item key="13" icon={<DesktopOutlined />}>option 13</Menu.Item>
        <SubMenu key="sub4" icon={<UserOutlined />} title="User">
            <Menu.Item key="14">Tom</Menu.Item>
            <Menu.Item key="15">Bill</Menu.Item>
            <Menu.Item key="16">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="17">Team 1</Menu.Item>
            <Menu.Item key="18">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="19" icon={<FileOutlined />}>Files</Menu.Item>
    </Menu>
);

export default observer((props) => {
    // const { children } = props;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <h1>上中下</h1>
            <Layout className="layout">
                <Header>
                    { HeaderLogo }
                    { HeaderRight }
                    { MenuComponent }
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    { BreadcrumbComponent }
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>{ CopyRight }</Footer>
            </Layout>

            <h1>顶部-侧边布局-通栏</h1>
            <Layout>
                <Header className="header">
                    { HeaderLogo }
                    { HeaderRight }
                    { MenuComponent }
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-backgroud">
                        { MenuComponent2 }
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px'}}>
                        { BreadcrumbComponent }
                        <Content className="site-layout-backgroud" style={{ padding: 24, margin: 0, minHeight: 100 }}>
                            Content2
                        </Content>
                        <Footer style={{ textAlign: 'center', padding: '16px 50px 0' }}>{ CopyRight }</Footer>
                    </Layout>
                </Layout>
            </Layout>

            <h1>顶部-侧边布局</h1>
            <Layout>
                <Header className="header">
                    { HeaderLogo }
                    { HeaderRight }
                    { MenuComponent }
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    { BreadcrumbComponent }
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider className="site-layout-backgroud" width={200}>
                            { MenuComponent2 }
                        </Sider>
                        <Content className="site-layout-backgroud" style={{ padding: '0 24px', minHeight: 100 }}>Content3</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>{ CopyRight }</Footer>
            </Layout>

            <h1>侧边布局（也可借助 ProLayout 实现）</h1>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                    { HeaderLogo2 }
                    { MenuComponent2 }
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-backgroud">
                        { HeaderRight2 }
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        { BreadcrumbComponent }
                        <div className="site-layout-backgroud" style={{ padding: 24, minHeight: 100 }}>
                            Content: Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        { CopyRight }
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
});
