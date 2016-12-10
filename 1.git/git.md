## mac的安装
- 先安装homebrew
```
brew install git
```

> 安装xcode，不用再安装git

## 配置邮箱和用户名
- 先查看配置
```
git config --list
```
- 如果未配置name和邮箱
```
git config --global user.name 'git用户名'
git config --global user.email 'git邮箱'
```

## 创建文件夹
```
mkdir 文件夹的名字
```

## 改变目录
```
cd change directory
```

## 初始化git
```
git init
```

> .git文件存储着所有内容（提交，版本库，标签），初始化后会给一个分支默认叫master

## 创建文件
```
touch hello.js
```

## 查看文件内容
```
cat hello.js
```

## 像文件中写入内容
- 如果文件不存在则会创建文件

## 删除文件
```
rm '文件名'
```