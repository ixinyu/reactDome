//rfce 快速生成react 模板
import React,{ useEffect, useState} from 'react'
import { Card , Button, Table ,Popconfirm} from 'antd';
import { listApi, delOne,modifyOne } from '../../services/products'
function List(props) {
  //定义局部状态
  const [dataSource,setDataSource]=useState([])
  const [total,setTotal] = useState(0)
  //初始化执行
  useEffect(() => {
    listApi({
      page:1
    }).then((res)=>{
      setDataSource(res.data.list)
      setTotal(res.data.totalCount)
    })
  }, [props])
  const loadData = (page)=>{
    listApi({
      page:page
    }).then((res)=>{
      setDataSource(res.data.list)
      setTotal(res.data.totalCount)
    })
  }
  const add = ()=>{
    props.history.push('/admin/edit')
  }
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'productName',
      key:'productName'
    },
    {
      title: '价格',
      dataIndex: 'money'
    },
    {
      title: '是否在售',
      dataIndex:'onSale',
      render: (record) => record.onSale ? '在售' : '已下架'
    },
    {
      title:'操作',
      render:(record)=>{
        return (
          <div>
            <Button type="primary" onClick={()=>{
              props.history.push({ pathname : '/admin/edit' ,query:{ args: JSON.stringify(record)} })
            }}>编辑</Button>
            <Popconfirm title="确定要删除此项？" okText="是" cancelText="否" onConfirm={()=>{
              delOne({
                _id:record._id
              }).then((res)=>{
                // console.log(res)
              })
            }}>
              <Button style={{margin:'0 15px'}}>删除</Button>
            </Popconfirm>
            <Button style={{margin:'0 15px'}} onClick={()=>{
              console.log(record.onSale,!record.onSale)
              modifyOne({
                id:record._id,
                onSale:!record.onSale
              }).then((res)=>{
                // console.log(res)
              })
            }}>{record.onSale?'下架':'上架'}</Button>
          </div>
        )
      }
    }
  ];
  return (
    <div>
      <Card title="Card" extra={
        <Button type='primary' onClick={()=>add()}>添加</Button>}>
        <Table dataSource={dataSource} columns={columns} rowKey="_id" pagination={{total,pageSize:3,onChange:loadData}} />
      </Card>
    </div>
  )
}

export default List
