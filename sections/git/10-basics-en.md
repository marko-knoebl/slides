# Git basics

## Git

Git is a version control system

it mainly helps with two categories of tasks:

- keeping track of changes to a codebase
- collaborating with other developers

## Setting up git on Windows

Install from <https://git-scm.com>

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

## Commits

In git a _commit_ is a snapshot of a codebase

The evolution of a codebase is represented by a sequence of commits

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

## Commit history

list past commits:

```bash
git log
git log --oneline
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

## Ignoring files

We can list files to ignore in a special text file called `.gitignore` (without a filename extension):

```txt
node_modules
.vscode
```
