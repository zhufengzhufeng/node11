//fs是node的核心模块，专门处理文件读写的
//file system文件系统
var fs = require('fs');
//基本上所有方法，都是异步和同步同时出现
//1)读取文件(带sync都是同步)
//readFile readFileSync
//异步是通过回调函数，同步通过返回值
var school = {};
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
try {
    var age = fs.readFileSync('./age1.txt','utf8');
}catch (e){
    console.log(e);
}
school.age = age;
//1.读取时只能读取已经存在的文件
//2.默认读取格式是buffer
//3.捕获错误要使用try catch
//4.readFile 不能读取比内存大的文件
console.log(school);

