// 创建mysql 连接池
const mysql = require('mysql');
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'xz',
    connectionLimit:10
});