//buffer自己不能变大或变小，但是可以用concat进行拼接
var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培');
var buffer3 = new Buffer('训');
//concat是构造函数上的方法
Buffer.myConcat = function (list,totalLength) {
    //1.判断totalLength是否传递，默认计算一个总长度，有的话直接写啥就是啥
    //2.构建一个大的buffer，需要将每一个小buffer拷贝到大buffer上
    //3.如果过长保留有效区 截取有效长度slice
};
var newBuffer = Buffer.myConcat([buffer1,buffer2,buffer3],100);
console.log(newBuffer.toString());