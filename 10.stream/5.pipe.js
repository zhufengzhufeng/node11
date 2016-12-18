//拷贝文件 读取一点写一点
var fs = require('fs');
function pipe(source,target) {
    //64k 16k   4:1
    var rs = fs.createReadStream(source,{highWaterMark:4});
    var ws = fs.createWriteStream(target,{highWaterMark:1});
    //监听事件 rs.on('data')
    //1.如果可写流中已经写不下了，暂停可读流 rs.pause();
    rs.on('data',function (data) {
        var flag = ws.write(data);
        if(!flag){
            rs.pause();
        }
    });
    //2.在drain方法中 恢复可读流 rs.resume();
    ws.on('drain',function () {
        console.log('恢复');
        rs.resume();
    });
    //3.读取完后rs.on('end') 关闭写的文件 ws.end();
    rs.on('end',function () {
        ws.end();
    });
}
pipe('./name1.txt','./age.txt');