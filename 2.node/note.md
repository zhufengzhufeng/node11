## 配置环境变量
我的电脑->属性->高级系统设置->环境变量->找到path

- 配置ws提示，settings->npm->引用源码包

## 模块
- seajs (CMD) requirejs(AMD)
- commonjs 

## node
node的主线程永远是单线程的，
- 单进程 可以开多个线程
- node多进程 单线程

> 单线程 异步io 事件驱动

## 验证时
- 一定要前后台都验证

## 同步和异步
- 依次执行（一个洗完另一个洗）
- 异步（一起洗澡）

## 阻塞和非阻塞
针对内核来说的，非阻塞式异步的前置条件

## 单线程和多线程
- 多线程’同一个时间‘可以干多件事，只是切换上下文（切换速度非常的块）

> 不管是单核还是多核，都可以开多进程

## 事件环
服务员有两个小本，第一个小本是当前干的事情，另一个则是一会要干的事情(一会干的事情都是异步的)

> 能使用异步的不用同步，防止阻塞主线程


## 全局对象
- 写代码时，可以在任意一个地方访问


## global
- global
- process process.pid/process.exit()/process.kill()
    - process.nextTick 当前队列的底部
    - process.cwd() 当前工作目录 
    - process.chdir()改变目录
- clearInterval/set
- clearTimeout/set
- setImmediate/clearImmediate 第二个小本上的立即
- console  log/warn/error/info/time/timeEnd
- Buffer
## 形参
- __filename 一旦产生就不能更改，执行文件被传入的参数
- __dirname
