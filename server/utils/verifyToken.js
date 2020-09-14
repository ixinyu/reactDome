const jwt = require('jsonwebtoken')
const config = require('../config/keys')

async function verifyToken(ctx, next) {
  let url = ctx.url.split('?')[0]
  
  // 统一校验接口的token
  if (url.includes('/api/users/')) {
      await next()
  } else {

      // 否则获取到token
      let token = ctx.header.token
      // console.log(token)
      if (token) {
        // 如果有token的话就开始解析
        await jwt.verify(token,config.secretOrkey,async function (err) {
          if(err){
            ctx.body = {
              code: -2,
              message:'token 已过期，请重新登陆'
            }
          }else{
            await next()
          }
        })
      }else {
        ctx.body = {
          code: -2,
          message:'缺少token参数'
        }
      }
  }
}
module.exports = verifyToken