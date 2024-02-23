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

Switching between _python-3-port_ and _main_:

```bash
git switch python-3-port
git switch main
```

## Switching branches

before switching it can be useful to make sure there are no active changes

```bash
git status
```

```bash
git switch main
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
