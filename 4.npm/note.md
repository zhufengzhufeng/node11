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