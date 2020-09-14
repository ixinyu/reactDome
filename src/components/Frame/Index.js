import React from 'react'
import { Layout, Menu,Dropdown,Avatar,Badge } from 'antd';
import {DownOutlined} from '@ant-design/icons';
import logo from './logo.png'
import {withRouter} from 'react-router-dom'
import {adminRoutes} from '../../routes/index'
import './index.css'
import {clearToken} from '../../utils/auth'
import {connect} from 'react-redux'
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
        if(p.key==='noti'){
          props.history.push('/admin/notices')
        }
        // message.info(p.key)
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
          <Badge dot={!props.isAllRead}>
            <Avatar style={{'marginRight':10}}>use</Avatar>
            <span>超级管理员</span>
          </Badge>
          
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
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px' }}>
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

export default connect(state=>state)(withRouter(Index))

//首先withRouter可以用来给组件注入router相关的一些参数,其次withRouter是专门用来处理数据更新问题的