const mongoose = require('mongoose')

//实例化数据模板
const oSchema = mongoose.Schema({
  productName: {
    type:String,
    required:true,
  },
  money: {
    type:Number,
    required:true,
  },
  imgUrl:{
    type:String
  },
  content:{
    type:String
  },
  onSale:{
    type:Boolean,
    default:true
  },
  date:{
    type:Date,
    default : Date.now
  }
})

// module.exports = mongoose.model('User', UserSchema, 'user')
module.exports = User = mongoose.model('products', oSchema)