# Commits and branches

## Commits

In git a _commit_ is a snapshot of a codebase

The evolution of a codebase is represented by a sequence / tree of commits

Sometimes the term _commit_ also refers to the transition from one snapshot to the next

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
