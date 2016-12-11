require('./a.js');
//删除
delete require.cache[require.resolve('./a.js')];
require('./a.js');
//模块的缓存机制，同一个模块只能加载一次
//console.log(require);
//取出缓存的模块
console.log(require.cache);
//获取一个绝对路径，在缓存中找到对应的绝对路径删除
console.log(require.resolve('./a.js'));//可以帮我们通过一个已经存在的文件解析出一个绝对路径出来
//删除对象中的某一项


