var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/clock'){
        var date = new Date().toLocaleString();
        res.end(JSON.stringify({date}));
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

