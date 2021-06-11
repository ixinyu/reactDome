const router = require('koa-router')();
const bcrypt = require('bcryptjs');
const tools = require('../../common')
//引入 User model
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

//添加用户
router.post('/addUser',async ctx=>{
  const data = ctx.request.body
  const result = await User.find({ //返回的是数组
    username : data.username
  })
  if(!result.length){
    const oModel = new User({
      username: data.username,
      password: tools.enbcrypt(data.password) //密文
    })
    await oModel.save().then(user=>{
      const data = {
        msg:'添加成功',
        data:null
      }
      ctx.success(data)
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    ctx.fail('该账号已存在')
  }
})

//登录
router.post('/login',async ctx=>{
  const data = ctx.request.body
  console.log(data)
  const result = await User.find({ //返回的是数组
    username : data.username
  })
  if(!result.length){
    ctx.status = 200;
    ctx.body = {
      msg:'用户不存在'
    }
  }else{
    //查到后 验证密码
    const pwd = await bcrypt.compareSync(data.password, result[0].password); // true
    console.log(pwd)
    if(pwd){
      //返回token
      // let payload = {id:result[0].id,username:result[0].username,avatar:result[0].avatar}
      const token = jwt.sign({},keys.secretOrkey,{expiresIn:'2 days'})
      ctx.status = 200;
      ctx.body = {
        msg:'登录成功',
        token:token
      }
    }else{
      ctx.status = 200;
      ctx.body = {
        msg:'用户名或密码错误'
      }
    }
  }
  
})



module.exports = router.routes()