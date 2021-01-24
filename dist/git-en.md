# Git

## Git

_version control system_

mainly helps with two categories of tasks:

- keeping track of changes to a codebase
- collaborating with other developers

## Example repositories

- <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git>: Linux kernel
- <https://gitlab.com/fdroid/fdroidclient>: F-Droid client on GitLab (includes graph view)
- <https://github.com/twbs/bootstrap>: Bootstrap on GitHub
- <https://github.com/EvanLi/Github-Ranking/blob/master/Top100/Top-100-stars.md>: most starred repositories on GitHub

# Commits and branches

## Commits

In git a _commit_ is a snapshot of a codebase

The evolution of a codebase is represented by a sequence / tree of commits

Sometimes the term _commit_ also refers to the transition / change from one snapshot to the next

## Commits

simple commit log with one branch (_master_):

```
* add footer (master)
* add company logo
* add sidebar
* add placeholder content
* initialize website
```

## Branches

_branches_ allow development to happen on different tasks in parallel

The default branch is usually called _master_ or _main_

In git a branch is a pointer to a specific commit

## Commits and branches

commit log with one active feature branch:

```
* add sidebar (master)
| * correct typo in footer (footer)
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Commits and branches

combining branches (via _merge_):

```
* merge branch 'footer' into master (master)
|\
| * correct typo in footer (footer)
| * add logo to footer
| * add footer with basic content
* | add sidebar
|/
* add placeholder content
* initialize website
```

## Commits and branches

combining branches (via _rebase_ and _squash_):

```
* add footer (master)
* add sidebar
* add placeholder content
* initialize website
```

# User interfaces

## User interfaces

- command-line interface (default, big functionality)
- graphical user interfaces
  - _git gui_ and _gitk_
  - ...
- web interfaces / hosted git repositories
  - GitHub
  - GitLab

# Setup

## Setting up git on Windows

Install from <https://git-scm.com>

## Setting up git on Windows

recommendations:

- **Select Components**:
  - uncheck _Git GUI Here_
  - check _Git Bash Here_ for an easy way to get into the _bash_ from the Windows Explorer
- **Default editor**:
  - if unsure, use _Nano_
- **line ending conversions**:
  - recommendation: _Checkout as-is, commit Unix-style line endings_
- **Choose a credential helper**:
  - choose _Git Credential Manager Core_ for advanced integration with services like _GitHub_, otherwise choose _None_

## Configuring git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

# Creating or cloning a git repository

## Commands

- `git init`
- `git clone`

## Creating a git repository

creating a new repository in a local folder:

```bash
git init
```

## Cloning a git repository

cloning a public repository (from GitHub):

```bash
git clone https://github.com/libgit2/libgit2
```

creates a new folder _libgit2_ with the current state and all of the history

<!--
libgit2: ~50MiB
bootstrap: ~170MiB (80 branches)
-->

# Recording changes

## Commands

- `git status`
- `git diff`
- `git add`
- `git restore`
- `git commit`

## Commands

```bash
git status
```

prints information about the current state of the repository

## Review changes to files since the last commit

view status of files (added / changed / deleted since last commit):

```bash
git status
```

view added / removed lines in files:

```bash
git diff
```

## Staging

preparing all changed / added / removed HTML files for committing (staging files):

```bash
git add *.html
```

preparing all files:

```bash
git add .
```

## Unstaging and undoing active changes

unstaging previously staged files:

```bash
git restore --staged readme.txt
```

discarding unstaged changes:

```bash
git restore readme.txt
```

## Committing

making a commit of everything that has changed and providing a commit message:

```bash
git add .
git commit -m "changing some HTML files"
```

## Committing

compact version for staging and committing all changes:

```bash
git commit -a -m "changing some HTML files"
```

## Ignoring files

We can list files to ignore in a special text file called `.gitignore` (without a filename extension):

```txt
__pycache__
node_modules
.vscode
```

# History

## Commands

- `git log`
- `git show`
- `git diff`
- `git restore`
- `git revert`

## History

list past commits:

```bash
git log
git log --oneline
git log --oneline --graph
git log --oneline --graph --all
```

example output of the last command:

```bash
* e84890f (HEAD -> master, origin/master, origin/HEAD) add footer
* 9eb2f53 add company logo
* 5c41c01 add sidebar
* f4f591c add placeholder content
* d6510c2 initialize website
```

## History

view changes between _19e0e64..._ and its parent commit:

```bash
git show 19e0
```

view changes between _19e0e64..._ and the current state:

```bash
git diff 19e0
```

short output:

```bash
git diff 19e0 --name-status
```

## History

accessing the contents of an earlier commit (whose id is b4c906...):

```bash
git restore . b4c9
```

**note**: any active changes will be lost

going back to the most recent commit of the current branch:

```bash
git restore .
```

## History

reverting the latest commit (via a new commit):

```bash
git revert HEAD
```

# Feature branch workflow

## Feature branch workflow

workflow:

To introduce a new feature / change, create a new so-called _feature branch_

The feature branch can individually evolve in parallel to the master branch

If the master branch evolves, its changes can be combined / merged back into the feature branch

Once the feature is complete, it can be combined / merged back into the master branch (after being reviewed by other developers)

## Feature branch workflow

often feature branches can be small, e.g. _fix-spelling-error-in-readme_

some feature branches must be big, e.g. _port-to-typescript_

## Feature branch workflow

example: developers are working on two different tasks at the same time:

```txt
* add sidebar (sidebar)
| * add logo to footer (footer)
| * add footer with basic content
|/
* add placeholder content (master)
* initialize website
```

## Feature branch workflow

when a feature is completed it can be combined / merged back into the master branch:

```txt
* add footer (master)
| * add sidebar (sidebar)
|/
* add placeholder content
* initialize website
```

## Feature branch workflow

other branches can take over the changes from the master branch via _merge_ or _rebase_:

```txt
  * add sidebar (sidebar)
 /
* add footer (master)
* add placeholder content
* initialize website
```

## Feature branch workflow

during development:

- create a new feature branch off of _master_
- commit to it often
- merge (or rebase) when new commits are made to the _master_ branch to keep up with the rest of the project

when the feature is ready:

- optional: combine all commits on the branch into one commit (rebase)
- merge into the _master_ branch
- delete the feature branch

## See also

- <https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow>
  <!-- https://stackoverflow.com/questions/tagged/git?tab=Votes -->

# Creating and switching branches

## Commands

- `git branch foo`
- `git branch foo $commitid`
- `git switch foo`
- `git switch -c bar`
- `git switch -c bar $commitid`
- `git branch`

## Creating a branch

```bash
git branch python-3-port
```

## Switching branches

Switching between _python-3-port_ and _master_:

```bash
git switch python-3-port
git switch master
```

## Switching branches

before switching it can be useful to make sure there are no active changes

```bash
git status
```

```bash
git switch master
```

## Creating and switching in one

```bash
git switch -c python-3-port
```

create and switch to a new branch

## Listing branches

listing all (local) branches:

```bash
git branch
```

# Combining branches

## Combining branches

strategies:

- **merge**: simplest, keeps all commits from the feature branch (creates complex histories)
- **squash and merge**: combines all commits on the feature branch into a single commit
- **rebase**: most complex, uses only selected commits

# Combining branches via merge

## Combining branches via merge

example commit history (during feature development):

```
  * merge branch 'master' into 'footer' (footer)
 /|
* | add company logo (master)
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Combining branches via merge

example commit history (when feature is complete):

```
* merge branch 'master' into 'footer' (master)
|\
* | add company logo
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

note: the most recent merge keeps its commit message

## Combining branches via merge and squash

merge and squash:

example commit history (when feature is complete):

```
* add footer (master)
| * merge branch 'master' into 'footer' (footer)
|/|
* add company logo
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Merge and squash

once the commit is merged and squashed, the old feature branch can be deleted

result:

```
* add footer (master)
* add company logo
* add sidebar
* add placeholder content
* initialize website
```

## Combining branches via merge

commands for merging changes of _master_ into _footer_:

```bash
git switch footer
git merge master
```

## Merge conflicts

if two branches changed the same line in different ways there may be a _merge conflict_

## Merge conflicts

presentation of a merge conflict in a file:

```
First line
Second line
<<<<<< HEAD
Thrd line!
======
Third line
>>>>>> master
Fourth line
```

one branch added an exclamation mark, another one fixed a spelling error

<!--
note: actually there should be one more "<" sign:
<<<<<<<
>>>>>>>
-->

## Resolving merge conflicts

- edit the file and keep the desired changes
- _add_ the files with resolved conflicts
- run `git commit` (without extra arguments)

## Deleting old branches

we will usually delete a branch once it is merged:

deleting a merged branch:

```bash
git branch -d footer
```

deleting an unmerged branch:

```bash
git branch -D footer
```

# Exercises

## Exercises

- todo list
- work on an existing project from GitHub (e.g. on the readme)

## Exercises

create a text file with some todos:

```
- groceries
- taxes
x gardening
```

modify the todo list via separate _feature branches_, e.g. "long-term todos", "new-job", "new-job-sub-items",  "taxes-completed", ...

# The checkout command

## The checkout command

`git checkout` is an older command that can do the same as `git switch` and more; `git switch` was introduced in 2019 (with git 2.23)

switching branches with checkout:

```bash
git checkout master
```

## The checkout command

accessing the contents of an earlier commit (whose id is b4c906...):

```bash
git checkout b4c9
```

going back to the most recent commit of the master branch:

```bash
git checkout master
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

Once you have an empty repository on GitHub, follow the instructions for an _existing repository_ displayed on GitHub

Usually you will connect a local repository to a single remote repository - the remote repository is conventionally named _origin_

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

Fetch and merge commits from the remote branch corresponding to the active branch:

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

## Remembering credentials

```bash
git config credential.helper cache
```

Git will now remember passwords for 15 minutes

# Editing history via rebase

## Editing history

In git it is _possible_ to edit history - but it comes with dangers

## Editing history

example use cases:

- restructure commits in a branch to make them clearer
- undo a commit that was made by mistake

## Editing history

rules:

- don't change history of branches that others may branch off of (e.g. _master_)
- you may change history of your own repository

## Editing history via rebase

original commit log:

```
  * merge branch 'master' into 'footer' (footer)
 /|
* | add company logo (master)
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Editing history via rebase

new commit log:

```
  * add footer (footer)
 /
* add company logo (master)
* add sidebar
* add placeholder content
* initialize website
```

note: the _master_ branch was not modified

## Editing history via rebase

editing history via rebase in git:

```bash
git rebase -i master
```

interactively edit the current branch from the point where it branched off of _master_

## Editing history via rebase

squashing commits:

change all **except the first** commands from _pick_ to _squash_

# Aliases and Extras

## Aliases and Extras

- **aliases**: custom short names for commands
- **git-extras**: package of useful aliases and extra commands

## Aliases

creating some aliases:

```bash
git config --global alias.unstage 'restore --staged'
```

```bash
git config --global alias.show-tree 'log --graph --oneline --all'
```

## Extras

**git-extras** provides simplified commands for common tasks

- `git ignore`
- `git show-tree`
- `git squash`
- `git undo`

<https://github.com/tj/git-extras/blob/master/Commands.md>
