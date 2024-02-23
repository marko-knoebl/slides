# Editing history via rebase

## Editing history

In git it is _possible_ to edit history - but it comes with dangers

## Editing history

example use cases:

- restructure commits in a branch to make them clearer
- undo a commit that was made by mistake

## Editing history

rules:

- don't change history of branches that others may branch off of (e.g. _main_)
- you may change history of your own repository

## Editing history via rebase

original commit log:

```
  * merge branch 'main' into 'footer' (footer)
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

## Editing history via rebase

new commit log:

```
  * add footer (footer)
 /
* add company logo (main)
* add sidebar
* add placeholder content
* initialize website
```

note: the _main_ branch was not modified

## Editing history via rebase

editing history via rebase in git:

```bash
git rebase -i main
```

interactively edit the current branch from the point where it branched off of _main_

## Editing history via rebase

squashing commits:

change all **except the first** commands from _pick_ to _squash_
