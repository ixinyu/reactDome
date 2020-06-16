const Koa = require('koa');
const router = require('koa-router')();
// const views = require('koa-views');
var bodyParser = require('koa-bodyparser');



//实例化
const app = new Koa();
app.use(bodyParser());

router.get('/list',async(ctx)=>{
  const list = [
    {
      name:'胡彦斌',
      
    }
  ]
  ctx.body=''
})





//启动路由
app.use(router.routes())  /* 启动路由*/
.use(router.allowedMethods())  /* 可配置和不配置，建议配置 */

// 在端口3000监听:
app.listen(5000);