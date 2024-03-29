const express = require('express');
const querystring = require('querystring');
const cors = require('cors');
var app = express();
    app.use(cors());
var pool = require('./pool.js');
var server = app.listen(3001,(req,res)=>{
    console.log('服务器已启动');
});

app.get('/',(req,res)=>{
    res.send('Welcome to port 3001');
});

app.get('/login_res_get',(req,res)=>{
	var get_req = querystring.parse(req.url.slice(2));
	console.log('url',req.query);
	console.log(req.query.callback+'('+req.query.data+')');
	res.send(req.query.callback+'('+req.query.data+')');
});

app.get('/home',(req,res)=>{
    res.redirect('/');
});

app.get('/list',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var list=[
        {name:'星期一',task:'上班'},
        {name:'星期二',task:'上班+学习'},
        {name:'星期三',task:'上班+学习'}
    ];
    console.log('请求');
    res.json(list);
});

app.get('/chain',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    console.log(req.query);
    res.send(req.query.callback+'('+req.query.data+')');
    // res.json(req);
});

app.post('/getNewsData',(req,res)=>{
    console.log(req.query);
    var $pno = req.query.pno;
    if($pno){
        $pno = 1;
    }
    var $pageSize = req.query.pageSize;
    if($pageSize){ $pageSize =5;}
    else{$pageSize = parseInt($pageSize);}
    var sql = `SELECT * FROM xz_user ORDER BY ASC LIMIT ?,?`;
    pool.query(sql,[($pno-1)*$pageSize,$pageSize],(err,result)=>{
        if(err) throw error;
        console.log(result);
        res.send(result);
    });
});