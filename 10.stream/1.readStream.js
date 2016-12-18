var fs = require('fs');
//创建一个可读流
//最高水位线（一次读多少） 64*1024
//encoding:null buffer
var rs = fs.createReadStream('./name.txt',{highWaterMark:1});//1字节
//req 因为req是可读流
var arr = [];
//流就是异步的
rs.on('data',function (data) {//只要你监听data事件内部会不停的发射data事件
    //str+=data;//将buffer进行拼接
    arr.push(data);
});
rs.pause();
setTimeout(function () {
    rs.resume(); //恢复的是on data 事件
},1000);
//水都流出来了的事件
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
});
//捕获错误
rs.on('error',function (err) {
    console.log(err);
});
