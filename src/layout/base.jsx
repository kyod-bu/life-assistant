/**
 * 典型的页面布局
 * 1、上中下
 * 2、顶部-侧边布局-通栏
 * 3、顶部-侧边布局
 * 4、侧边布局（也可借助 ProLayout 实现）
 */
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Breadcrumb  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons';
import './index.css';

// import Header from './common/header';
// import Footer from './common/footer';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

export default observer((props) => {
    // const { children } = props;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <h1>上中下</h1>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(15).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design &copy;2018 Created by Ant UED</Footer>
            </Layout>

            <h1>顶部-侧边布局-通栏</h1>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 21</Menu.Item>
                        <Menu.Item key="2">nav 22</Menu.Item>
                        <Menu.Item key="3">nav 23</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-backgroud">
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                <Menu.Item key="1">option 1</Menu.Item>
                                <Menu.Item key="2">option 2</Menu.Item>
                                <Menu.Item key="3">option 3</Menu.Item>
                                <Menu.Item key="4">option 4</Menu.Item>
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
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px'}}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className="site-layout-backgroud" style={{ padding: 24, margin: 0, minHeight: 100 }}>
                            Content2
                        </Content>
                        <Footer style={{ textAlign: 'center', padding: '16px 50px 0' }}>Ant Design &copy;2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Layout>

            <h1>顶部-侧边布局</h1>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 31</Menu.Item>
                        <Menu.Item key="2">nav 32</Menu.Item>
                        <Menu.Item key="3">nav 33</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider className="site-layout-backgroud" width={200}>
                            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option 1</Menu.Item>
                                    <Menu.Item key="2">option 2</Menu.Item>
                                    <Menu.Item key="3">option 3</Menu.Item>
                                    <Menu.Item key="4">option 4</Menu.Item>
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
                            </Menu>
                        </Sider>
                        <Content className="site-layout-backgroud" style={{ padding: '0 24px', minHeight: 100 }}>Content3</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design &copy;2018 Created by Ant UED</Footer>
            </Layout>

            <h1>侧边布局（也可借助 ProLayout 实现）</h1>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                    <div className="logo2" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>option 1</Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>option 2</Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>Files</Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-backgroud" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-backgroud" style={{ padding: 24, minHeight: 100 }}>
                            Content: Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design &copy;2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    );
});
