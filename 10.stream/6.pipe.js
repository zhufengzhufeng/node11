//拷贝文件 读取一点写一点
var fs = require('fs');
function copy(source,target) {
   var rs = fs.createReadStream(source);
   var ws = fs.createWriteStream(target);
   rs.pipe(ws);//异步方法，读一点写一点，可以读大文件
}
copy('./name1.txt','./age1.txt');
