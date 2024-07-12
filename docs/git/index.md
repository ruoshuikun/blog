# 常用命令

## 创建分支

 - 新建本地分支

    ```shell
    git checkout -b [branch_name]
    ```

- 新建远程分支

    ```shell
    git push origin [branch_name]
    ```


Git 是一个非常流行的分布式版本控制系统，以下是一些常用的 Git 命令及其解释：

### 基本命令
1. 初始化一个新的 Git 仓库。
   ```bash
   git init
   ```

2. 从远程仓库克隆一个项目。
   ```bash
   git clone [url]
   ```

3. 查看当前工作目录的状态。
   ```bash
   git status
   ```

4. 添加文件到暂存区。
   ```bash
   git add [file]
   ```
   或添加所有更改：
   ```bash
   git add .
   ```

5. 提交暂存区的更改并添加提交信息。
   ```bash
   git commit -m "Commit message"
   ```

6. 将本地分支的更改推送到远程仓库。
   ```bash
   git push [origin] [branch]
   ```

7. 从远程仓库拉取更新并与本地分支合并。
   ```bash
   git pull
   ```

8. 查看所有分支，当前分支前会有 `*` 标记。
   ```bash
   git branch
   ```

9. 创建并切换到一个新分支。
   ```bash
   git checkout -b [branch]
   ```

10. 将指定分支合并到当前分支。
    ```bash
    git merge [branch]
    ```

### 远程仓库
1. 查看所有远程仓库。
   ```bash
   git remote -v
   ```

2. 添加一个新的远程仓库。
   ```bash
   git remote add [name] [url]
   ```

### 标签
1. **git tag [tagname]**  
   创建一个新的标签。
   ```bash
   git tag v1.0
   ```

2. **git push origin [tagname]**  
   推送标签到远程仓库。
   ```bash
   git push origin v1.0
   ```

### 日志和历史
1. 查看提交历史。
   ```bash
   git log
   ```

2. 查看简洁的提交历史。
   ```bash
   git log --oneline
   ```

### 撤销更改
1. **git reset --hard [commit]**  
   将当前分支重置到指定提交。
   ```bash
   git reset --hard HEAD~1
   ```

2. **git revert [commit]**  
   撤销指定提交并创建一个新的提交。
   ```bash
   git revert 4a1d5b
   ```

### 存储更改
1. 暂时保存当前工作目录的更改。
   ```bash
   git stash
   ```

2. 应用最近的存储并将其从存储列表中删除。
   ```bash
   git stash pop
   ```

这些命令涵盖了 Git 的基础操作，可以帮助你有效地管理代码版本。