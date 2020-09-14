const router = require('koa-router')();
const Product = require('../../models/products')
const mongoose = require('mongoose')
//添加商品
router.post('/addProduct',async ctx=>{
  const data = ctx.request.body
  const result = await Product.find({ //返回的是数组
    productName : data.productName
  })
  if(!result.length){
    const oModel = new Product(data)
    await oModel.save().then(res=>{
      const data = {
        msg:'添加成功',
        data:res
      }
      ctx.success(data)
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    ctx.fail('该商品已存在')
  }
})

//商品列表
router.get('/productsList',async ctx=>{
  // console.log(ctx.query)
  const data = ctx.query
  const query = {}
  const pageSize = parseInt(data.pageSize)||3
  let skip = (data.page - 1) * pageSize;
  const totalCount = await Product.find().countDocuments()
  const result = await Product.find(query).skip(skip).limit(pageSize);  //分页查询
  if(!result.length){ 
    const data = {
      msg:'success',
      data:{
        list:[],
        totalCount:0
      }
    }
    ctx.success(data)
  }else {
    const data = {
      msg:'success',
      data:{
        list:result,
        totalCount:totalCount
      }
    }
    ctx.success(data)
  }
})
//获取单个商品详情
router.get('/productId',async ctx=>{
  // console.log(ctx.query)
  const data = ctx.query
  const result = await Product.find()
  if(!result.length){ 
    const data = {
      msg:'success',
      data:{
        list:[],
        totalCount:0
      }
    }
    ctx.success(data)
  }else {
    const data = {
      msg:'success',
      data:{
        list:result,
        totalCount:totalCount
      }
    }
    ctx.success(data)
  }
})
//编辑商品
router.put('/edit',async ctx=>{
  const data = ctx.request.body
  var res =  await Product.updateOne({_id:mongoose.Types.ObjectId(data.id)},data)
  if(res.n==1){
    const data = {
      msg:'修改成功',
      data:res
    }
    ctx.success(data)
  }else {
    ctx.fail('该商品已存在')
  } 
})

//删除商品
router.put('/del',async ctx=>{
  const data = ctx.request.body
  console.log(data)
  const res =  await Product.remove({_id:mongoose.Types.ObjectId(data._id)})
  console.log(res)
  if(res.n==1){
    const data = {
      msg:'删除成功',
      data:res
    }
    ctx.success(data)
  }else {
    ctx.fail('删除失败')
  } 
})
module.exports = router.routes()