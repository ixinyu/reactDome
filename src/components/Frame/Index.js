import React from 'react'
import { Layout, Menu,Dropdown,Avatar,message} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import logo from './logo.png'
import {withRouter} from 'react-router-dom'
import {adminRoutes} from '../../routes/index'
import './index.css'
import {clearToken} from '../../utils/auth'
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route=>route.isShow);
function Index(props) {
  const menu =(
    <Menu onClick={(p)=>{
      if(p.key === 'logout'){
        clearToken()
        props.history.push('/login')
      }else {
        message.info(p.key)
      }
    }}>
      <Menu.Item key="noti">消息通知</Menu.Item>
      <Menu.Item key="logout">退出</Menu.Item>
    </Menu>
  )
  return (
    <Layout>
    <Header className="header" style={{
      background:'#E6F7FF'
    }}>
      <div className="logo" >
        <img src={logo} alt="logo" />
      </div>
      <Dropdown overlay={menu}>
        <div>
          <Avatar style={{'marginRight':10}}>use</Avatar>
          <span>超级管理员</span>
          <DownOutlined />
        </div>
      </Dropdown>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map(route=>{
            return <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
              {/* <Icon type={route.icon} /> */}
              {route.title}
            </Menu.Item>
          })}
          {/* <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 20,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default withRouter(Index)
