# Git basics

## Git

Git is a version control system

it mainly helps with two categories of tasks:

- keeping track of changes to a codebase
- collaborating with other developers

## Setting up git on Windows

Install from [git-scm.com](https://git-scm.com)

## Setting up git on Windows

recommendations:

- **Select Components**:
  - uncheck _Git GUI Here_
  - check _Git Bash Here_ for an easy way to get into the _bash_ from the Windows Explorer
- **Default editor**:
  - if unsure, use _Nano_
- **Adjusting your PATH environment**:
  - recommendation: check _Use Git and optional Unix tools from the Command Prompt_ - you will be able to use commands like _ls_ and _mv_ from _cmd_
- **line ending conversions**:
  - recommendation: _Checkout as-is, commit Unix-style line endings_

## Configuring git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Local version control with git

initializing a repository in a local folder

```bash
git init
```

## View commit history

```bash
git log
```

## Review changes to files since last commit

view status of files (added / changed / deleted since last commit)

```bash
git status
```

view added / removed lines in files

```bash
git diff
```

## Staging and committing

preparing all changed / added / removed HTML files for commiting (staging files)

```bash
git add *.html
```

making a commit with a commit message

```bash
git commit -m "changing some HTML files"
```

## Ignoring files

We can list files to ignore in a special text file called `.gitignore` (without a filename extension):

```txt
node_modules
.vscode
```

## Commit history

list past commits:

```bash
git log
```

example output:

```bash
commit e84890f64f974b5f4b0ffa40afff34ecbb33e58c (HEAD -> master, origin/master, origin/HEAD)
Author: ...
Date: ...
...
commit 19e0e64e8f198bc8495c979fe586c47e6dedc06f
....
```

## Commit history

view changes between _19e0e64e8f198bc8495c979fe586c47e6dedc06f_ and its parent commit:

```bash
git show 19e0
```

view changes between _19e0e64e8f198bc8495c979fe586c47e6dedc06f_ and the current state:

```bash
git diff 19e0
```

# Git branches

## Git branches

Git branches allow development to happen on different tasks in parallel via multiple "branches"

The default branch is usually called _master_

## Git branches

creating a new branch:

```bash
git branch python-3-port
```

switching between the new branch and the master branch:

```bash
git switch python-3-port
git switch master
```

before switching it can be useful to make sure there are no active changes

## Git branches

`git checkout` is an old command that can do the same as `git switch` and more; `git switch` was introduced in git 2.23 (2019)

switching branches with checkout:

```bash
git checkout master
```

accessing the contents of an earlier commit (whose id is b4c906...):

```bash
git checkout b4c9
```

going back to the most recent commit of the master branch:

```bash
git checkout master
```

## Git branches

listing all local branches:

```bash
git branch
```

## Git branches

_merging_ the updates of one branch into another branch:

(merging from _python-3-port_ to _master_)

```bash
git checkout master
git merge python-3-port
```

## Git branches

_deleting_ a branch:

```bash
git branch -d python-3-port
```

## Git branches

viewing a history tree / graph showing all branches:

```bash
git log --graph --all --oneline
```

# Git remote

## Git remote

Hosts for Git:

- **GitHub**
- **GitLab**
- Bitbucket
- SourceForge

## Collaboration via GitHub

initial options:

- clone an existing git repository from GitHub
- publish local repository to GitHub

## Cloning an existing Git repository

```bash
git clone https://github.com/...
```

On GitHub, copy the link from the green _clone or download_ button

## Publishing a new Git repository

On GitHub, click the _+_ in the top right corner

_Don't_ select "Initialize this repository with a README".

## Publishing a new Git repository

Once you have an empty repository on GitHub, follow the instructions for an _existing respository_:

Connect the local repository with the remote repository.

Usually there's only one remote repository and it's conventionally named _origin_.

```bash
git remote add origin https://github.com/...
```

## Publishing a new branch

Whenever we want to publish a branch the remote doesn't know about:

```bash
git push -u origin master
```

The above command copies the the commits in the local _master_ branch to a newly created remote _master_ branch.

## Publishing commits to a known branch

If we want to publish commits to a known branch:

```bash
git push
```

## Getting new commits from a remote branch

Fetch and merge commits from the remote branch corresponding to the active branch

```bash
git pull
```

## Deleting a remote branch

deleting a _local_ branch:

```bash
git branch -d python-3-port
```

deleting the _remote_ branch as well:

```bash
git push origin :python-3-port
```
