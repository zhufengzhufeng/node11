var fs = require('fs');
//1.异步方法必须要有callback
//2.回调函数中拥有error，必须先判断一下err(error first)
//3.不能省略error
//4.默认只要是读取的操作编码格式都是buffer
var school = {};
//1.嵌套回调函数，会导致时间累加
var index = 0;
fs.readFile('./name.txt','utf8',function (err,data) {
    index++;school.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    index++;school.age = data;
    out();
});
function out() {
    if(index==2){
        console.log(school);
    }
}
//Promise.all async