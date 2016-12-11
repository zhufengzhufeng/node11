console.log('log'); //日志
console.info('info');//信息
console.error('error');//错误
console.warn('warn');//警告
//计时
console.time('start');
for(var i = 0; i<10;i++){}
console.timeEnd('start'); //time和timeEnd中的参数要保持一致，会自动打印两段时间的时间差


//2.setTimeout(第二个小本，异步方法)
console.time('start1');
setTimeout(function () {
    //console.timeEnd('start1');
    console.log(this);
    //这里的this不是global，指向的是自己
},4000);

function eat(a,b) {
    console.log(a,b);
}
setTimeout(eat,1000,'鱼','肉');//setTimeout时间后面的参数是实参;


