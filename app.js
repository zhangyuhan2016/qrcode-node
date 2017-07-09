var http = require('http');
var express = require('express');
var app = express();

// 指定映射目录
app.set("view engine",'ejs')
app.use(express.static(__dirname + '/url'));

let tempLogin = {};

app.get("/loginCode",function (req,res,next) {
    let name = req.query.name;
    res.send({tip:tempLogin[name]})
})

app.get("/login",function (req,res,next) {
	let name = req.query.name;
	let stype = req.query.stype;
	tempLogin[name] = stype
	res.send({code:true})
})

app.get("/test",function (req,res,next) {
	res.render('my',{title:req.query.name})
})

// 创建服务端
http.createServer(app).listen('80', function() {
	console.log('启动服务器完成,查看效果请输入http://localhost/index.html');
});