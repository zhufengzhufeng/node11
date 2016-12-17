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
    //取到除第一项外的所有参数
    var args = [].slice.call(arguments,1);
    if(this._events[eventName]){//先判断有没有对应关系
        //如果有取出每一项将其执行
        this._events[eventName].forEach(function (item) {
            item.apply(this,args);//item是buyPack buyCar
        },this);
    }
};
//移除掉事件
Man.prototype.removeListener = function (eventName,callback) {
    //删除对应事件名数组中的某一项
    if(this._events[eventName]){
        //返回true保留 返回false则删除
        this._events[eventName] = this._events[eventName].filter(function (item) { //buyPack buyCar
            return item!=callback;
        });
    }
};
//首先要先绑定事件
var man = new Man();
function buyCar(who,state) {
    console.log('有钱了给'+who+'买车'+state);
}
function buyPack(who,state) {
    console.log('有钱了给'+who+'买包'+state);
}
man.on('有钱了',buyCar);
man.on('有钱了',buyPack);
man.removeListener('有钱了',buyCar);
setTimeout(function () {
    man.emit('有钱了','妹子','哈哈');
    man.emit('有钱了','妹子','哈哈');
},3000);
//作业：once只能被触发一次，触发一次后需要将自己在数组中移除掉，下次在执行就不会在触发了

