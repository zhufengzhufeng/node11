//on emit removeListener
function Man() {
    this._events = {};//维护一对多的关系
}
Man.prototype.on = function (eventName,callback) {
    //{有钱:[buyPack]}
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
Man.prototype.emit = function (eventName) {
    var args =  [].slice.call(arguments,1);
    if(this._events[eventName]){
        var that = this;
        this._events[eventName].forEach(function (callback) {
            callback.apply(that,args);//callback是one函数
        })
    }
    this._events[eventName] = null;
};
Man.prototype.once = function (eventName,callback) {
    function one() { //{有钱:[one]} ，会接受一个'妹子','哈哈'
        callback.apply(this,arguments);
        this.removeListener(eventName,one);
    }
    this.on(eventName,one);
    one.listen = callback
};
Man.prototype.removeListener = function (eventName,callback) {
    //{'有钱':[byPack,one.listen]}
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(function (item) {
            //&& 有一个为false就为false ||一个为true就ok
            return item!=callback&&item.listen!=callback;
        });
    }
};

var man = new Man();
function buyPack(who) {
    console.log('买包给'+who);
}
function buyCar(who) {
    console.log('买车给'+who);
}
//写一个once方法，目的是绑定后，发射emit事件，绑定的函数被移除掉，在次触发，不会执行
man.once('有钱',buyPack);//{有钱:[]}
man.removeListener('有钱',buyPack);//{有钱:[one]},得改once和emit
man.emit('有钱','妹子');
//on还要保留原有的逻辑 仍然是绑定一次可以触发多次
//once 绑定一次触发多次只执行一次



