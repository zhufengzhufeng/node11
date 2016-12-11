//文件模块，核心模块，第三方模块
//核心模块，node给我们提供的模块
//第三方模块，需要安装的模块

//1.文件模块
function Person() {}
Person.prototype.eat = function () {
    console.log('eat');
};
//exports.Person = Person;
module.exports = Person;
//不导出不能直接使用Person
//exports = Person;//如果真的导出的是exports对象的话，那么另一个文件拿到的应该是Person这个函数，是{}

/*
* (function(exports,require,module,__filename,__dirname){
*   module.exports = exports = {};
*   exports.Person = Person
*   return module.exports;
* })()
* */