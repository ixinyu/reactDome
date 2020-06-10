//ES7 React/Redux/GraphQL/React-Native snippets  插件
//rfce 快速生成react 模板
import React from 'react'
import { Form, Input, Button,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {setToken} from '../utils/auth'
import './Login.css'
// import { loginApi } from '../services/auth'
function Login(props) {
  const onFinish = values => {
    setToken(values.username)
    props.history.push('/admin')
    // loginApi({
    //   userName:values.username,
    //   password:values.password
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
  };

  return (
    <Card title="管理后台" className="login-form">
     <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="values.username"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
         登录
        </Button>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default Login

