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
//1.在子类原型上增加原型链指向父类原型
//Child.prototype.__proto__ = Parent.prototype;
//2.Object.create
//Child.prototype = Object.create(Parent.prototype);
Child.prototype.drink = function () {
    console.log('drink');
};
//3.setPrototypeOf
Object.setPrototypeOf(Child.prototype,Parent.prototype);
// util.inherits(Child,Parent);
var child = new Child();
console.log(child.eat);
console.log(child.drink);
//3.util提供一些类型判断的方法
console.log(util.isArray([]));
console.log(util.isRegExp([]));
console.log(util.isBoolean([]));
//继承和判断


