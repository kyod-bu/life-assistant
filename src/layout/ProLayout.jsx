/**
 * pro 页面布局
 */
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from 'antd';
import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    QuestionOutlined,
    AreaChartOutlined,
    DatabaseOutlined,
    TableOutlined,
    BulbOutlined,
} from '@ant-design/icons';
import './pro.css';

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
        {/* <span>Ant Design &copy;2018 Created by Ant UED</span><br /> */}
        <span>1998-{new Date().getFullYear()} by Tencent. All Rights Reserved.</span><br />
        <span>PCG技术运营部-业务安全中心-视频安全组 版权所有</span>
    </span>
);

const HeaderRight = (
    <div className="header-right2">
        <span className='header-right-icon2'><PieChartOutlined /></span>
        <span className='header-right-icon2'><FileOutlined /></span>
        <span className='header-right-icon2'><TeamOutlined /></span>
        <a href='/test' target='_blank'>
            <span className='header-right-icon2'><QuestionOutlined />帮助文档</span>
        </a>
        <span>
            <Dropdown overlay={avatarDropdownMenu}>
                <Badge count={Math.floor(Math.random()*100)} overflowCount={20} showZero>
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

// 垂直菜单
const MenuComponent = (
    <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['data']}
    >
        <Menu.Item key="dashboard" icon={<AreaChartOutlined />}>运营面板</Menu.Item>
        <SubMenu key="data" icon={<DatabaseOutlined />} title="黑产数据">
            <Menu.Item key="data1">文件分析数据</Menu.Item>
            <Menu.Item key="data2">U镜数据</Menu.Item>
            <Menu.Item key="data3">群聊监控</Menu.Item>
            <Menu.Item key="data4">论坛监控</Menu.Item>
        </SubMenu>
        <SubMenu key="report" icon={<TableOutlined />} title="数据报表">
            <Menu.Item key="report1">热度集合</Menu.Item>
            <Menu.Item key="report2">QQ相关数据</Menu.Item>
            <Menu.Item key="report3">黑产地图</Menu.Item>
            <Menu.Item key="report4">分析文档</Menu.Item>
        </SubMenu>
        <SubMenu key="baike" icon={<BulbOutlined />} title="黑产百科">
            {new Array(2).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={`baike${key}`}>{`百科 ${key}`}</Menu.Item>;
            })}
        </SubMenu>
    </Menu>
);

export default observer((props) => {
    // const { children } = props;
    const [collapsed, setCollapsed] = useState(false);

    const HeaderLogo = (
        <div className={collapsed ? "logo2-collapsed" : "logo2"}>
            <a href="/">
                <img src="/UI_icon_情报.svg" alt="logo" width={40} />
                <h1>情报平台天鹰</h1>
            </a>
        </div>
    );

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                    { HeaderLogo }
                    { MenuComponent }
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-backgroud">
                        { HeaderRight }
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        { BreadcrumbComponent }
                        <div className="site-layout-backgroud" style={{ padding: 24, minHeight: 520 }}>
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
