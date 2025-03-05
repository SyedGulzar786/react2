import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = [
    {
        label: "Home",
        key: "/home",
    },
    {
        label: "About",
        key: "/about",
    },
    {
        label: "Profile",
        key: "/profile",
    },
    {
        label: "Login",
        key: "/",
    },
]
const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={(data) => {navigate(data.key)}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        {/* <div style={{display: 'flex',width: '100%',gap: '10px',}}>

        <Link to="/home" >
        <div style={{ cursor: 'pointer',color: 'white' }}>Home</div>
        </Link>
        <Link to="/profile">
        <div style={{ cursor: 'pointer',color: 'white' }}>Profile</div>
        </Link>
        <Link to="/about" >
        <div style={{ cursor: 'pointer',color: 'white' }}>About</div>
        </Link>
        <Link to="/login">
        <div style={{ cursor: 'pointer',color: 'white' }}>Login</div>
        </Link>
        <Link to="/">
        <div style={{ cursor: 'pointer',color: 'white' }}>Signup</div>
        </Link>
        <Link to="*">
        <div style={{ cursor: 'pointer',color: 'white' }}>not found</div>
        </Link>

        </div> */}
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: '40px 48px'
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            height: '650px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
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
  );
};
export default AppLayout;