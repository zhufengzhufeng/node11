Buffer.myConcat = function (list, totallength) {
    var l = 0;
    var str = '';
    list.forEach(function (item) {
        l += item.length;
        str+=item.toString();
    });
    totallength = totallength || l;

    var bigBuffer = new Buffer(totallength);
    bigBuffer.write(str,0);

    return bigBuffer.slice(0,l);
}
var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培');
var buffer3 = new Buffer('训');
var newBuffer = Buffer.myConcat([buffer1,buffer2,buffer3],100);
console.log(newBuffer.toString());