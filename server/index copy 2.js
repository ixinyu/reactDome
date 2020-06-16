const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
var bodyParser = require('koa-bodyparser');
const static = require('koa-static');


//实例化
const app = new Koa();
app.use(bodyParser());
app.use(static(__dirname+'./static'));

//配置模板引擎中间件
// app.use(views('views',{
//   extension:'ejs'  /*应用ejs模板 */
// }))


//koa 中间件 ,如果不写next ，匹配到之后就不会向下匹配
// router.use(async(ctx,next)=>{  //应用级中间件
//   console.log(new Date());
//   await next() /*当前路由匹配完成之后继续向下匹配 */
//   if(ctx.status == 404){
//     ctx.status = 404;
//     ctx.body = '404页面'
//   }

// })


// 配置路由
//ctx 上下文context,包含了request和response 等信息
router.get('/home',async (ctx)=>{
  let title = 'hello ejs'
  await ctx.render('index',{
    title:title
  })
})

//路由级中间件
// router.get('/news',async (ctx,next)=>{
//   console.log('路由级中间件')
//   await next()
// })

router.get('/news',async (ctx,next)=>{
  let list = ['11','asdf','iw9frn'];
  var content = '<h2>h2标题</h2>';
  var status = 1;
  await ctx.render('news',{
    list:list,
    content:content,
    status:status
  })
})

router.get('/index/:id',async (ctx)=>{
  console.log(ctx.query) //从ctx 中读取get传值
  console.log(ctx.params) // 获取动态路由的传值
  ctx.body = ctx.params
})




//启动路由
app.use(router.routes())  /* 启动路由*/
.use(router.allowedMethods())  /* 可配置和不配置，建议配置 */

// 在端口3000监听:
app.listen(5000);