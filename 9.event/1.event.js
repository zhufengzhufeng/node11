//发布订阅模式，一对多，一个名字对应一个数组，如果对应这件事的名字被触发，这个数组里的函数就会依次执行
// 绑定on 触发emit
function Man() {
    this._events = {};//用来存储一对多的关系
}
// {'有钱了'：[callback，callback]}
Man.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
    //第一次存储关系的对象没有有钱这个属性，需要加一个属性，并且属性对应一个数组将callback放入
    //第二次 通过eventName进行查找，如果找到了，找到对应的数组，将这次的callback追入

};
Man.prototype.emit = function (eventName) {
    if(this._events[eventName]){//先判断有没有对应关系
        //如果有取出每一项将其执行
        this._events[eventName].forEach(function (item) {
            item();
        })
    }
};
//首先要先绑定事件
var man = new Man();
function buyCar() {
    console.log('有钱了买车');
}
function buyPack() {
    console.log('有钱了买包');
}
man.on('有钱了',buyCar);
man.on('有钱了',buyPack);
setTimeout(function () {
    man.emit('有钱了');
},3000);


