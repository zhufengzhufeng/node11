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

## 编辑文件
```
vi hello.js
```

> 进入插入模式 i ,esc退出,:wq保存并且退出

## 查看状态
```
git status
```
## 增加暂存区
```
git add 
```

> 没有增加前是红色

## 提交到历史区
- 将暂存区的内容提交到历史区
```
git commit -m '提交成功'
```

## 查看历史库日志
```
git log 
```

## 比较不同
- 工作区和暂存区
```
git diff 
```
- 工作区和历史区
```
git diff 分支的名字（master）
```
- 暂存区和历史区
```
git diff --cached
```

## 搜索日志
```
git log --author/--grep
```

## 撤回add的内容
```
git reset HEAD 文件名
```

## 用暂存覆盖掉工作区
```
git checkout 文件名
```

## 版本回滚
```
git reset --hard 版本号
```

## 获取所有操作的版本号
```
git reflog
```

> 回到过去和未来