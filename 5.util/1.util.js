//文件 内置 第三方(node_modules)
//内置模块可以直接引用，而且不需要下载
var util = require('util');
//继承的方法
//原型继承
function Parent() {
    this.a = 1;
}
Parent.prototype.eat = function () {
  console.log('eat');
};
function Child() {}
Child.prototype.drink = function () {
    console.log('drink');
};
Child.prototype = Parent.prototype;
// Child.prototype = new Parent();
var child = new Child();
var parent = new Parent();
console.log(child.eat);

