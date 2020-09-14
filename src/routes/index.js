import Login from "../pages/Login";
import List from "../pages/admin/List";
import Edit from "../pages/admin/Edit";
import NoFind from "../pages/NoFind";
import Notices from "../pages/admin/Notices"
export const mainRoutes = [{
  path:'/login',
  component:Login
},{
  path:'/404',
  component:NoFind
}]

export const adminRoutes = [{
  path:'/admin/list',
  component: List,
  isShow:true,
  title:'列表'
},{
  path:'/admin/edit',
  component:Edit,
  exact:true,   //全匹配
  isShow:true,
  title:'编辑'
},{
  path:'/admin/Notices',
  component:Notices,
  isShow:false,
  title:'消息'
}
]