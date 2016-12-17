//Buffer是global上的一个属性
console.log(Buffer);//文件可能会被读取到内存中，二进制，展现给我们的确是16进制 0123456789abcdef

//没个位都是由二进制组成 ，8个位(bit) = 1B 1024b = 1k  1024k = 1m ‘11111111’一个字节最大二进制 转换成10进制
//111 转换成10进制 3
// 当前所在位的最大值*当前进制^(当前所在位-1)
var sum = 0;
for(var i = 1; i<=8;i++){
    sum+=1*Math.pow(2,i-1)
}
console.log(sum); //255
//buffer中由好多字节组成类似于数组的东西，每个字节最大是多少

//1.声明buffer 一旦声明就需要给一个固定大小
//1.长度（utf8一个汉字几个字节 3个）
var buffer = new Buffer(40); //三个字节
buffer.fill(0);//手动清0
console.log(buffer);//随机抓过来三个字节的内存，默认为随机的
//2.字符串(字符串具有不变性)
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);
//3.数组 (大于255 对256取模 小于0加上256)
var buffer = new Buffer([-2,255]);//不识别都是0
console.log(buffer);