const express = require('express');
const querystring = require('querystring');
var app = express();
var server = app.listen(3001,(req,res)=>{
    console.log('服务器已启动',req);
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
    var list=[
        {name:'星期一',task:'上班'},
        {name:'星期二',task:'上班+学习'},
        {name:'星期三',task:'上班+学习'}
    ];
    console.log('请求');
    res.json(list);
});