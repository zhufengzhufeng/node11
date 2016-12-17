var fs = require('fs');
//创建目录时要保证目录父级目录存在
//fs.mkdirSync('a/b/c/d');
//1.作业：写一个异步创建文件夹，递归创建 mkdir
function makep(path) {
    var paths = path.split('\\');//[a,b,c,d]
    for(var i = 0; i<paths.length;i++){
        var dir = paths.slice(0,i+1).join('/');
        //创建目录时 先判断文件是否存在
        var flag = fs.existsSync(dir);
        if(!flag)fs.mkdirSync(dir);
    }
}
makep('b\\c\\d');
fs.mkdir('e',function (err) {});
//数据只有存在不存在
fs.exists('e',function (flag) {});

//writeFile writeFileSync
//readFile readFileSync
//appendFile appendFileSync
//mkdir mkdirSync
//exists existsSync
//resolve join
