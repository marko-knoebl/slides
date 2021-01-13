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
