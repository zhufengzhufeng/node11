var path = require('path');
//专门处理路径 核心模块
//根据一个文件名解析出一个绝对路径
//1.resolve
console.log(path.resolve('a.js'));
//2.join (将当前文件的目录和一个文件名名字做组合)
console.log(path.join(__dirname,'../a.js'));
//可以解析上一级目录