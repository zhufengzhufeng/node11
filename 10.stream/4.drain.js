var fs = require('fs');
//写10个数，每次只能写一个
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
var index = 0; //从0写到9
function eat() {
    var flag = true;
    while(index<10&&flag){
        flag = ws.write(index+'');//buffer or string
        index++;
    }
}
eat();
//10个数是被快速放到嘴里的，9个扔到地下了
//得等待我出好后，在次喂我
ws.on('drain',function () {
    console.log('吃好了');
    eat();
});