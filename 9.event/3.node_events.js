//events node帮我提供了一个 核心模块
var EventEmitter = require('events');
var util = require('util');
function Man() {}//man继承原型上的方法
util.inherits(Man,EventEmitter);
var man = new Man();
function getMoney(where) {
    console.log('去'+where+'挣钱');
}
man.once('没钱了',getMoney);//addListener = on
//man.removeListener('没钱了',getMoney);
man.removeAllListeners('没钱了');
man.emit('没钱了','饭馆');
man.emit('没钱了','饭馆');
// on emit once removeListener removeAllListener
