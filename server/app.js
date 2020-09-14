
const Koa = require('koa');
const router = require('koa-router')();
const KoaBody = require('koa-body'); //koa文件上传
const mongoose = require('mongoose')
const path=require("path");
const static = require('koa-static');
const db = require('./config/keys').mongoURI
const json = require('koa-json');
const cors = require('koa2-cors')
const reponseBody = require('./utils/reponseBody')
const verifyToken = require('./utils/verifyToken')
const users = require('./routes/api/users')
const products = require('./routes/api/products')
const upload = require('./routes/api/upload')
//实例化
const app = new Koa();
app.use(cors());
app.use(static(path.join(__dirname)+'/static'));
app.use(KoaBody({
  multipart: true,
  formidable: { 
        // uploadDir:  path.join(__dirname, `./upload/`), //设置上传缓存文件夹(生成的缓存文件)
        maxFileSize: 200*1024 * 1024, // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(reponseBody())
app.use(json());
app.use(verifyToken)

//连接数据库
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('数据库连接成功')
})


//配置路由地址 
// api/users 开头的地址都会进入users 路由
router.use('/api/users',users) 
router.use('/api/products',products)
router.use('/api/upload',upload)

//启动路由
app.use(router.routes())  /* 启动路由*/
.use(router.allowedMethods())  /* 可配置和不配置，建议配置 */


const port = process.env.PORT||5000 // 在端口5000监听:
app.listen(port,()=>{
  console.log(`server port ${port}`)
});