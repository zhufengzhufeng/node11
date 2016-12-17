var fs = require('fs');
//1.写入时默认编码utf8
//2.写入文件如果不存在则会创建文件
//3.先清空在写入
//fs.writeFileSync('./name1.txt',1);
//fs.appendFileSync('./name1.txt',1);//追加文件内容
fs.writeFile('./name1.txt',new Buffer('珠峰'),function (err) {
    console.log(err);//异步方法中第一个err
});