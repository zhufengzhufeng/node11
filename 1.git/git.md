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

## 分支管理
- 查看所有分支
```
git branch 
```
- 创建分支
```
git branch 分支名
```
- 切换分支
```
git checkout dev
```

> 相当于把master复制了一份，提交到dev上master才看不到，相当于dev把100块钱放到自己家了，那master就无法看到了

## 删除分支
```
git branch -D 分支名
```

> 不能自己删自己

## 创建分支并且切换分支
```
git branch dev
git checkout dev
git checkout -b dev
```

## 合并分支
- 要切换到master身上来合并dev
```
git merge dev
```

> 比如说master上在slider里写了一个1，dev中slider写了2

## 从工作区直接提交到历史区
- 不支持首次提交，如果文件没有加到过缓存区中是不能使用这种方式的
```
git commit -a -m'sliderdev'
```

## 产生冲突
- 1.在dev分支中改变了slider.js
改成了sliderdev,进行提交
- 2.在master分支中改变slider.js
改成 slidermaster,进行提交
- 3.合并产生冲突，删除掉>>>>> ======  <<<<<<再次提交

