# History

## Commands

- `git log`
- `git show`
- `git diff`
- `git checkout`
- `git revert`

## History

list past commits:

```bash
git log
git log --oneline
git log --oneline --graph
git log --oneline --graph --all
```

example output of the second command:

```bash
* e84890f (HEAD -> main, origin/main, origin/HEAD) add footer
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
git checkout b4c9
```

going back to the most recent commit of the main branch:

```bash
git switch main
```

## History

reverting the latest commit (via a new commit):

```bash
git revert HEAD
```
