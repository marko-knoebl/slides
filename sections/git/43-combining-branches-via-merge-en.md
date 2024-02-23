# Combining branches via merge

## Combining branches via merge

example commit history (during feature development):

```
  * merge branches (footer)
 /|
* | add company logo (main)
| * add copyright notice to footer
| * merge branch 'main' into 'footer'
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
* merge branches (main)
|\
* | add company logo
| * add copyright notice to footer
| * merge branch 'main' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Combining branches via merge

commands for merging changes of _main_ into _footer_:

```bash
git switch footer
git merge main
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
>>>>>> main
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
