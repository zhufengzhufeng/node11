//__filename  __dirname
//当前文件的文件名的绝对地址
console.log(__filename);
//当前文件所在的文件夹的绝对路径
console.log(__dirname);
//无法更改
//全局对象，在任何地方都能访问到，__filename,__dirname不是global上的属性
//文件相当于一个模块，在执行时默认会添加个自执行函数，__filename,__dirname是形参可以在文件内直接访问

//外层函数
/*
(function (exports,require,module,__filename,__dirname) {})()
*/
