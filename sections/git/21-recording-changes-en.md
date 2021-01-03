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
