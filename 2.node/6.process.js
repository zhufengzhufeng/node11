//process进程,整个代码运行后会退出进程
//process.exit()退出进程
console.log(process.pid);
//当前进程id
//删除进程process.kill
setInterval(function () {},1000);
//pwd print working directory
//cwd current working directory
console.log(process.cwd());//可以更改的
console.log(__dirname);//一旦出生不能更改
//change directory
process.chdir('../../');
console.log(process.cwd());//可以更改的
console.log(__dirname);//一旦出生不能更改

