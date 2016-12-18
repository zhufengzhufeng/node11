//创建服务 http模块 内置模块
//fs util path events http url
var http = require('http');
//服务器特点，请求 响应 固定的ip 特定的端口号
http.createServer(function (req,res) {
    //当请求到来时执行此回调函数 //pending正在发送请求
    //res是个可写流
    //指定响应类型，告诉浏览器端我发送的是什么类型的内容，告诉浏览器编码格式
    //res.writeHead(200,{'Content-Type':'text/plain;charset=utf8','a':'b'});
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.setHeader('a','b');
    res.statusCode = 200;
    res.write(new Buffer('珠峰'));//buffer or String
    res.end('hello');//遇到end后结束响应
}).listen(8080,'localhost');
//始终监听一个端口号

