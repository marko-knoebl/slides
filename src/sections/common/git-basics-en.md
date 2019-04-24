# git

## git

Git is a version control system

it helps with two categories of tasks:

- keeping track of changes to a codebase
- collaborating with other developers

## Setting up git on Windows

Install from [git-scm.com](https://git-scm.com)

### Recommendations:

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

preparing all HTML files for commiting (staging files)

```bash
git add *.html
```

making a commit with a commit message

```bash
git commit -m "changing HTML some files"
```
