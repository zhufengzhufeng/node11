var http = require('http');
var fs = require('fs');//读取文件，将文件响应回浏览器端
http.createServer(function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf8');
    //将文件响应回浏览器端
    /*var data = fs.readFileSync('./1.start.html');
    res.end(data);//默认转换utf8*/
    //一个文件有1.1M
    /*fs.readFile('./1.start.html',function (err,data) {
        if(err)console.log(err);
        res.end(data);
    });*/
    //流 分段读取一次64k
    fs.createReadStream('./1.start.html').pipe(res);
    //如果要改变文件中的内容响应回数据stream的方式就不适合了
}).listen(8080,'localhost');

