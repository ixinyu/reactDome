//rfce 快速生成react 模板
import React ,{ useEffect, useState}from 'react'
import { Card, Form, Input, Button,message,Upload} from 'antd';
import { createApi, modifyOne,uploadImg} from '../../services/products'
import { PlusOutlined,LoadingOutlined } from '@ant-design/icons';
import '../Login'
import {getToken} from '../../utils/auth'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

function Edit(props) {
  const [args,setArgs] = useState('')
  const [loading,setLoading]=useState(false)
  const [imgUrl,setImgUrl] = useState('')
  const [form] = Form.useForm();
  const [editorState,setEditorState]=useState(BraftEditor.createEditorState(null))
  useEffect(() => {
   const args = props.location.query?JSON.parse(props.location.query.args):''
   setEditorState(BraftEditor.createEditorState(args.content))
   setArgs(args)
    form.setFieldsValue({
    productName:args.productName,
    money:args.money
    })
  }, [form, props])
  const onFinish = values => {
    // console.log(values)
    console.log(editorState.toHTML()) //获取当前富文本内容
    if(args){ //修改
      values.id = args._id
      values.content = editorState.toHTML()
      modifyOne(values).then((res)=>{
        // console.log(res)
      })
    }else { //添加
    values.content = editorState.toHTML()
      createApi(values).then((res)=>{
        message.info(res.msg);
        props.history.push('/admin/list')
      })
    }
  };
  //富文本编辑器
  const handleEditorChange = (v) => {
    setEditorState(v)
  }
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false)
      // console.log(info)
      setImgUrl()
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
//api/upload/uploadImg
  return (
    <div>
      <Card title={args?"修改":"添加"} extra={<Button type='primary' onClick={()=>{
        props.history.go(-1)
      }}>返回</Button>}>
       <Form {...layout} form={form} className="edit" name="edit" onFinish={onFinish}>
          <Form.Item name="productName" label="商品名称" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item name="money" label="价格" rules={[{ required: true }]}>
            <Input size="large" />
          </Form.Item>
          <Form.Item label="主图">
            <Upload
              name="file"
              showUploadList={false}
              className="avatar-uploader"
              action="http://localhost:5000/api/upload/uploadImg"
              // action={uploadImg}
              headers={
                {
                  'token':getToken()
                }
              }
              onChange={(info)=>handleChange(info)}
            >
              {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item label="商品详情">{/* 注意此处不能加 ‘name’ 否则 富文本内容不会显示 */}
            <BraftEditor
              style={{border:"1px solid #eee"}}
              value={editorState}
              onChange={(e)=>handleEditorChange(e)}
            />
          </Form.Item>
          <Form.Item>
            <Button size='large' type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Edit
