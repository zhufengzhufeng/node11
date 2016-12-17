//把任意进制转换成10进制
console.log(parseInt('111',2));
console.log(parseInt('17',8));
//17是八进制的 在十进制中是多少
//把任意进制转换成任意进制
console.log((011).toString(10));
//0x开头是16进制
//0开头为8进制
//将汉字转换成base64
//base64没有加密功能，md5 sha1 sha256
//就是每一个字节 最大值不超过64  11111111二进制转换成10进制不超过64
console.log(parseInt('00111111',2));
var str = '珠';//三个字节组成
var buffer = new Buffer(str);
console.log(buffer);
//e7 8f a0 将16进制转换成2进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//00111001 00111000 00111110 00100000
//将24个位拼到一起，每隔6位拆开，前面补00，目的变成小于64的数
//在转化成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32
//在‘可见编码’中取值
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789+/';
console.log(str[57]+str[56]+str[62]+str[32]);

//http://m.blog.csdn.net/article/details?id=40984869


