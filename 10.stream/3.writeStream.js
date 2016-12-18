var fs = require('fs');
//highWaterMark 16384 16*1024
//encoding utf8
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
//response 可写流
//ws.write ws.end
var flag = ws.write(1+'',function () {
    console.log('写好了');
});//字符串或者buffer
console.log(flag);
//flag默认是是否能继续写，写的内存写入这次是否已经满了
ws.end('3');//end内部，如果写参数默认调用的就是write方法,end的作用是关闭文件，将内存中的内容强制写入文件，在关闭文件
ws.write('4');//write after end 文件已经关闭不能再次写入