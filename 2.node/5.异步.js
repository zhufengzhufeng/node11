//1.setTimeout 延迟
//2.setImmediate 立即
//3.process.nextTick 下一队列


//总结：都是服务员的第二个小本（都是异步的）
setTimeout(function () {
    console.log('setTimeout扫地');
},10);
//立即可以让0的setTimeout先执行
setImmediate(function () {
    console.log('扫地');
});
//总结：服务员第一个小本底下的部分，同步方法执行后需要执行的方法
process.nextTick(function () {
    console.log('nextTick扫地');
});
//同步>nextTick>setImmediate>timeout>异步io
