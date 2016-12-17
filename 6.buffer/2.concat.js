//buffer自己不能变大或变小，但是可以用concat进行拼接
var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培');
var buffer3 = new Buffer('训');
//concat是构造函数上的方法
Buffer.myConcat = function (list,totalLength) {
    //1.判断totalLength是否传递，默认计算一个总长度，有的话直接写啥就是啥
     if(typeof totalLength=='undefined'){
         totalLength = 0; //如果没有传递默认设置为0,手动计算总长度
         list.forEach(function (buffer) {
             totalLength+=buffer.length;
         })
     }
    //2.构建一个大的buffer，需要将每一个小buffer拷贝到大buffer上
        var buffer = new Buffer(totalLength);
        var index = 0;//维护偏移量
        list.forEach(function (item) {
            item.copy(buffer,index);
            index+=item.length;//下次拷贝在上一次的基础上在次拷贝
        });
    //3.如果过长保留有效区 截取有效长度slice
        return buffer.slice(0,index);
        //return buffer;
};
var newBuffer = Buffer.myConcat([buffer1,buffer2,buffer3],100);
console.log(newBuffer.toString());