var http = require('http');
var fs = require('fs');//读取文件，将文件
var url = require('url');
var mime = require('mime');
// 响应回浏览器端
http.createServer(function (req,res) {
    //获取请求的路径
    console.log(req.url);
    //获取请求的方法
    console.log(req.method);
    //获取请求头
    console.log(req.headers);
    //根据url的不同响应不同的内容
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){  //http://localhost:8080/?a=1
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./1.start.html').pipe(res);
    }else{
        //第三方 mime 专门处理类型的
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
        fs.createReadStream('.'+pathname).pipe(res);
    }
    /*if(pathname == '/1.css'){
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./1.css').pipe(res);
    }else if(pathname=='/1.js'){
        res.setHeader('Content-Type','application/x-javascript;charset=utf8');
        fs.createReadStream('./1.js').pipe(res);
    }*/

}).listen(8080,'localhost');

