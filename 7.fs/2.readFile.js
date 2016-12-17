var fs = require('fs');
//1.异步方法必须要有callback
//2.回调函数中拥有error，必须先判断一下err(error first)
//3.不能省略error
//4.默认只要是读取的操作编码格式都是buffer
var school = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    school.name = data;
});
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age = data;
});
console.log(school);
