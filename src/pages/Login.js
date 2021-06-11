//ES7 React/Redux/GraphQL/React-Native snippets  插件
//rfce 快速生成react 模板
import React from 'react'
import { Form, Input, Button,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {setToken} from '../utils/auth'
import './Login.css'
import { loginApi,addUsers } from '../services/login'
// import {md5} from 'js-md5'
function Login(props) {
  // console.log(props)
  var [form] = Form.useForm()
  const onFinish = values => {
    // console.log(values)

    loginApi({
      username:values.username||'admin',
      password:values.password||'123456'
    }).then(res=>{
      // console.log(res)
      setToken(res.token)
      props.history.push('/admin')
    }).catch(err=>{
      console.log(err)
    })
  };
  const addUser =()=>{
    // console.log(form.getFieldsValue())
    var params = form.getFieldsValue()
    addUsers({
      username:params.username,
      password:params.password
    }).then(res=>{
      console.log(res)
    })

  }

  return (
    <Card title="管理后台" className="login-form">
     <Form
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
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
        <Button type="danger" onClick={addUser}>
         添加用户
        </Button>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default Login

