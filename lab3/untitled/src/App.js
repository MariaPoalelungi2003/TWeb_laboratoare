import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Input, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', 'Option 1', <PieChartOutlined />),
    getItem('Option 2', 'Option 2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', 'Team 1'), getItem('Team 2', 'Team2')]),
    getItem('Personal data', 'Personal data', <UsergroupAddOutlined  />),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedUser, setSelectedUser] = useState("4");
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuClick = ({ key }) => {
        setSelectedUser(key);
    };

    const handleButtonClick = () => {
        alert(`Input 1: ${input1Value}, Input 2: ${input2Value}, Input 3: ${input3Value}`);
        // Sau pentru a afișa în consolă
        console.log(`Input 1: ${input1Value}, Input 2: ${input2Value}, Input 3: ${input3Value}`);
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>{
                            selectedUser === '4' ? 'Bill':
                                selectedUser === '3' ? 'Tom' :
                                    selectedUser === '5' ? 'Alex' :
                                        selectedUser === 'Personal data' ? 'Personal data' :
                        selectedUser}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {selectedUser === '4' ? 'Bill is a cat.' :
                            selectedUser === '3' ? 'Tom is a dog.' :
                                selectedUser === '5' ? 'Alex is just a friend':
                        selectedUser}

                        {selectedUser === 'Personal data' && (
                            <div style={{ marginTop: '20px' }}>
                                <Search placeholder="Input 1" value={input1Value} onChange={e => setInput1Value(e.target.value)} />
                                <Search placeholder="Input 2" value={input2Value} onChange={e => setInput2Value(e.target.value)} />
                                <Search placeholder="Input 3" value={input3Value} onChange={e => setInput3Value(e.target.value)} />
                                <Button type="primary" onClick={handleButtonClick}>Submit</Button>
                            </div>
                        )}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
