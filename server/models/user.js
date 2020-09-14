const mongoose = require('mongoose')

//实例化数据模板
const oSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
  },
  password: {
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default : Date.now
  }
})

// module.exports = mongoose.model('User', UserSchema, 'user')
module.exports = User = mongoose.model('users', oSchema)