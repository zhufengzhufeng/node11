var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var products = [{name:'iphone8',price:8888,id:1},{name:'iphone9',price:7777,id:2}];
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/allProduct'){//响应全部数据
        res.end(JSON.stringify(products));
    }else if(pathname == '/addProduct'){
        //获取请求体中的数据
        var str = '';
        req.on('data',function (data) { //获取send过来的数据
            str+=data;
        });
        req.on('end',function () {
            var product = JSON.parse(str);//将请求体解析成对象
            product.id = Math.random();//增加id属性
            products.push(product);//丢到数组里
            res.end(JSON.stringify(products));//将数组响应给浏览器端
        });
    }else if(pathname == '/removeProduct'){
        var productId = url.parse(req.url,true).query.id;//取出查询字符串种的id
        products = products.filter(function (item) {
            return item.id != productId;
        });
        res.end(JSON.stringify(products));
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('not Found');
            }
        });
    }
}).listen(8080);

