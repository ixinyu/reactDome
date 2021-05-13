import React , { useEffect, useState}from 'react'
import { Card ,Button,Form, Input} from 'antd';
import {Map,Marker} from 'react-amap'
const mapKey = '42c177c66c03437400aa9560dad5451e' //需要自己去高德官网上去申请
function Other() {
  const [signAddrList,setSignAddrList]=useState({
    longitude:0,
    latitude:0
  })
  useEffect(()=>{
    setSignAddrList({
      longitude:'120.12979',
      latitude:'30.25949'
    })
  },[])
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 },
  };
  const tailLayout = {
    wrapperCol: { offset: 2, span: 22 },
  };
  const onFinish = values => {
    console.log('Success:', values);
  };
  return (
    <Card title="Default size card" extra={<Button>Other</Button>}>
     <Form
      {...layout}
      name="other"
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="经纬度" >
        <Input />
      </Form.Item>
      <Form.Item label="地图">
        <div style={{width: '100%', height: '400px'}}>
          <Map amapkey={mapKey} 
            zoom={18} center={[signAddrList.longitude,signAddrList.latitude]} plugins={["ToolBar"]}>
              <Marker position={[signAddrList.longitude,signAddrList.latitude]}></Marker>
          </Map>
        </div>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default Other
