const mysql      = require('mysql');
const sqlConfig = require('./config');
const connection = mysql.createConnection(sqlConfig);


module.exports.login=function(option,callback){
  const $sql = 'select * from user where username=? and password=?';
  connection.query($sql,[option.username,option.password],function(error,results){
    if(error){
      callback(error)
    }else{
      callback(null,results)
      console.log(results[0])
    }
  })
};
module.exports.saveToken=function(username,token,callback){
  const $sql = 'update user set `token`="'+token+'"where `username`="'+username+'"';
  console.log($sql)
  connection.query($sql,function(error,results){
    if(error){
      callback(error)
    }else{
      callback(null,results)
      console.log(results[0])
    }
  })
};

module.exports.registry=function(option,callback){
  const $sql = 'insert into user (username,password) values (?,?)';
  connection.query($sql,[option.username,option.password],function(error,results){
    if(error){
      callback(error)
    }else{
      callback(null,results)
      console.log(results[0])
    }
  })
};