//Db库
const MongoClient = require('mongodb').MongoClient;
const Config = require('./config.js')

class Db{
  constructor(){
    this.dbClient = ''
  }
  static getInstance(){
    if(!Db.instance){
      Db.instance=new Db()
    }
    return Db.instance;
  }
  connect(){
    let _this = this;
    return new Promise((resolve,reject)=>{
      if(!_this.dbClient){
        MongoClient.connect(Config.dbUrl,(err,client)=>{
          if(err){
            reject(err)
          }else {
            _this.dbClient=client.db(Config.dbName);
            resolve(_this.dbClient)
          }
        })
      }else {
        resolve(_this.dbClient)
      }
    })
  }

  find(collecttionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        var result = db.collection(collecttionName).find(json);
        result.toArray(function (err,docs) {
          if(err){
            reject(err);
            return;
          }
          resolve(docs)
        })
      })
    })
  }

  update(){

  }
  insert(){

  }

}

module.exports = Db.getInstance();