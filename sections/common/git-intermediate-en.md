# Git intermediate

## Git checkout

The `checkout` command allows us to view the code from earlier versions or other "branches"

example:

checking out the content of an earlier commit (whose id is b4c906...):

```bash
git checkout b4c9
```

checking out the most recent commit of the "master" branch:

```bash
git checkout master
```

## Git branches

Git branches allow development to happen on different tasks in parallel via multiple "branches"

The default branch is usually called _master_.

## Git branches

creating a new branch:

```bash
git branch python-3-port
```

switching between the new branch and the master branch:

```bash
git checkout python-3-port
git checkout master
```

before switching it can be useful to make sure there are no active changes

## Git branches

listing all local branches:

```bash
git branch
```

## Git branches

_merging_ the updates of one branch into another branch:

(merging from _python-3-port_ to _master_)

```
git checkout master
git merge python-3-port
```

## Git branches

_deleting_ a branch:

```bash
git branch -d python-3-port
```
