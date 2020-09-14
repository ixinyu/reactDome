//rfce 快速生成react 模板
import React from 'react'
import { Card, List,Avatar, Button} from 'antd';
import {connect} from 'react-redux'
import Childs from './Childs'
function Notices(props) {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <Card title="通知中心" extra={<Button onClick={()=>props.dispatch({
      type:'READ_ALL'
    })}>全部已读</Button>}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <Button>设为已读</Button>
          </List.Item>
        )}
      />
      <Childs data={JSON.stringify(data)}></Childs>
    </Card>
  )
}

export default connect(state=>state)(Notices)
