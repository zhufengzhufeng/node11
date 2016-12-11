var Person = require('./user.js');//文件模块要指定路径
//require方法是一个同步方法,读写操作
//怎么看是同步还是异步,有回调函数的是异步，又返回值一般是同步
console.log(Person); //module.exports

//写一个计算的方法，用exports和module.exports分别进行导出在另一个js中使用