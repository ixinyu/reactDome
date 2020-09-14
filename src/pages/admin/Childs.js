import React from 'react'
import {List,Avatar, Button} from 'antd';
function childs(props){
  return (
    <div>
      <div style={{marginTop:'30px',paddingTop:'10px', borderTop:'1px solid #eee'}}>子组件接收父组件的值为：</div>
      <List
        itemLayout="horizontal"
        dataSource={JSON.parse(props.data)}
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
    </div>
  )
}

export default childs
