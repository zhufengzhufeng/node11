## npm
npm是安装node后给我们提供的一个包管理工具

## 安装，卸载，发布
- 1.全局安装 安装时增加-g参数
```
npm install nodeppt -g
```
- 2.全局卸载 
```
npm uninstall gulp -g
```

> 只要全局安装后就会在命令行下有一个nodeppt的命令

## 本地安装
可以在代码中使用

- 记住依赖(使用过哪些文件)初始化package.json
```
npm init -y
```

- 开发依赖
```
npm install/uninstall gulp --save-dev
```
- 发布依赖
```
npm install/uninstall jquery@3.0.0 --save
```

> json文件中不能写注释，不能多逗号

## 安装所需要的依赖
```
npm install 
```


## 发布到npm上（包）
- 发布的名字不能用人家已有的
- 1.创建带有package.json的包
- 2.增加index.js
- 3.使用官方npm
- 4.登陆你的账号进行发布
```
npm adduser
```
- 5.发布
```
npm publish
```

## 配置内网
```
npm config set registry "http://172.18.0.199"
```
- 切换源nrm
```
npm install nrm -g
```
- 添加珠峰源
```
nrm add zhufeng http://172.18.0.199
```
- 使用源
```
nrm use zhufeng
```
- 显示所有源
```
nrm ls
```
- 测试速度
```
nrm test
```


## doc文档生成
```
npm install fandoc/idoc -g
```
- 初始化
```
fandoc init
```
- 构建
```
fandoc build
```
- 启动服务
```
fandoc server
```


## 模块
- 文件模块(两个模块之间的关系)，引用时要增加路径./ /../,引用时可以不添加后缀名，默认会增加.js后缀，.json后缀,.node后缀

- 第三方模块(模块和包(别人的)之间的关系),引用的时候直接引用包的名字，找不到像上找，只能找到根目录为止，找到后找到package.json文件中，main对应的文件执行

- 核心模块(直接引用即可)