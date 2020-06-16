const Koa = require('koa');
const Router = require('koa-router');

//实例化
const app = new Koa();
const router = new Router();

// 配置路由
//ctx 上下文context,包含了request和response 等信息
router.get('/',async (ctx)=>{

})

//启动路由
app.use(router.routes())  /* 启动路由*/
.use(router.allowedMethods())  /* 可配置和不配置，建议配置 */

// koa 中使用ejs模板
// 安装 koa-views , ejs


// 在端口3000监听:
app.listen(5000);