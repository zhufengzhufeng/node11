//先将文件读出来，在将文件写回去
//全部采用同步 全部采用异步
var fs = require('fs');
//异步
function copy(source,target) {
    //先读出内容在来写
    fs.readFile(source,function (err,data) {
        if(err)console.log(err);
        fs.writeFile(target,data,function (err) {
            if(err)console.log(err);
        });
    });
}
//同步
function copySync(source,target) {
    var result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
copy('./name1.txt','./name3.txt');