var fs  = require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:1});
var str = '';
rs.on('data',function (data) {
    console.log(data.toString());
    str+=data;
    rs.pause();
    setTimeout(function () {
        rs.resume();
    },1000);
});
rs.on('end',function () {
    console.log(str);
});