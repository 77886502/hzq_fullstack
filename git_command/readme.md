# Git 考点
  文件 -> 暂存区 -> 仓库
  生成存储记录 , leader check 我们工作和代码的重要手段 
- 如果提交了代码到本地仓库， 后悔了怎么办？ 
- 美团  如何将多次提交合并成一次？ 
- 拼多多， 我要去拼多多
    git reset --hard HEAD^
    HEAD 头指针,指向当前的提交 ^ 上一次
    -- hard 撤销此次提交，文件修改也会撤销
    -- sort 回到commit之前 但是已经是在暂存区了
    -- mixed 撤销此次提交, 但是文件修改还在。
- 美团 如何将多次提交合并一次？

让提交记录更好看一点
- git rebase -i HEAD~n 最近几次的提交合并一次,
  git rebase -i 低id 高id 当我们在提交review的时候
  git checkout master
  git rebase --abort 取消此次合并
- vi 操作 
  状态 命令状态 i 输入 v 可视化状态 光标先中多个
  hjkl 上下左右
