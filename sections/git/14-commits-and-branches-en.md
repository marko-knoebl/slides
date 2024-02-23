# Commits and branches

## Commits

In git a _commit_ is a snapshot of a codebase

The evolution of a codebase is represented by a sequence / tree of commits

Sometimes the term _commit_ also refers to the transition / change from one snapshot to the next

## Commits

simple commit log with one branch (_main_):

```
* add footer (main)
* add company logo
* add sidebar
* add placeholder content
* initialize website
```

## Branches

_branches_ allow development to happen on different tasks in parallel

The default branch is usually called _main_ or _master_

In git a branch is a pointer to a specific commit

## Commits and branches

commit log with one active feature branch:

```
* add sidebar (main)
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
* merge branch 'footer' into main (main)
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
* add footer (main)
* add sidebar
* add placeholder content
* initialize website
```
