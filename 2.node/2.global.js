//console.log(global.global.global.global);
//global
//process 进程
//Buffer 缓存区（内存）
//clearImmediate: [Function],
//clearInterval: [Function],
//clearTimeout: [Function],
//setImmediate: [Function],
//setInterval: [Function],
//setTimeout: [Function],
//console: [Getter]
//1. "在文件中"直接访问this不是global
console.log(this); //{}
//2. var的变量不会直接声明在global属性上,不写var会声明在global上
global.a  = 100;
console.log(global.a);
