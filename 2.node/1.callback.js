function read(cb) {
    setTimeout(function () {
        cb();
    },4000);
}
function write() {
    console.log('写入');
}
read(write);
//将后续逻辑当作参数传递进来，当全部完成时在调用后续逻辑