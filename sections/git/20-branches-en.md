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
