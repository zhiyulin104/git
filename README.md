* # GIT 學習園地
    - 第一天
        - `git init` 建立版控倉庫
        - `git clone` 複製版控倉庫
        - `git config` 設定開發人員名稱及帳戶
        - `.gitignore` commit, add, push, pull 時忽略文件或檔案
        - git 資料存移
            - `git add` 加入git的Stage Changes區
            - `git commit -m "(commit message)"` 提交進版控倉庫(commit message 打甚麼都可以)

    - 第二天
        - `git status` 顯示倉庫狀態
        - git 資料存移
            - `git stash`
                - `git stash save "(message)"` 加入暫存區，所做的更改會暫時消失
                - `git stash save -u "(message)"` 加入暫存區，所做的更改會暫時消失，而且*包含untracked*
                - `git stash save -a "(message)"` 加入暫存區，所做的更改會暫時消失，而且*包含untracked和ignore*
                - `git stash apply"` 將加入暫存區的資料取回更改
                - `git stash apply stash@{(index)}"` 將加入暫存區的指定資料取回更改
                ### **小補充**
                `git stash push`皆可取代`git stash save` 的一系列語法