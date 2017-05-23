import mysql from 'mysql'

var db    = {};  
var pool  = mysql.createPool({  
  connectionLimit : 10,  
  host            : 'localhost',  
  user            : 'root',  
  password        : '87lishui',
  database        : 'dexiao'  
});
db.query = function(){  
  var sql,para,callback;
  if (arguments.length == 2) {
    sql = arguments[0];
    callback = arguments[1];
  } else {
    sql = arguments[0];
    para = arguments[1];
    callback = arguments[2];
  }
  if (!sql) {  
    callback();  
    return;  
  }
  if (!para) {
    para = [];
  }
  pool.query(sql, para, function(err, rows, fields) {  
    if (err) {  
      console.log(err);  
      callback(err, null);  
      return;  
    };
    callback(null, rows, fields);  
  });
}  
export default db;