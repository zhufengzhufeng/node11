var calc = {
    '+':function (a,b) {
        return a+b
    },
    '-':function (a,b) {
        return a-b;
    }
};
var b = 1;
/*exports.calc = calc;
exports.b = b;*/
module.exports = calc;
//module.exports = b;
//什么时候使用module.exports 导出一个时
//exports 导出多个变量可以多次使用exports进行导出