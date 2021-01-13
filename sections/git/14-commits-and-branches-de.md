# Commits und Branches

## Commits

Ein _Commit_ in Git ist eine Momentaufnahme einer Codebase

Die Entwicklung einer Codebase im Laufe der Zeit wird durch eine Abfolge von Commits repräsentiert

Manchmal bezeichnet man mit dem Begriff Commit auch den Übergang / die Änderungen von einer Momentaufnahme zur nächsten

## Commits

Einfacher Commit-Log mit einem Branch (_master_):

```
* add footer (master)
* add company logo
* add sidebar
* add placeholder content
* initialize website
```

## Branches

_Branches_ erlauben das gleichzeitige / parallele Arbeiten an mehreren Aufgaben

Der Standard-Branch heißt üblicherweise _master_ oder _main_

In Git ist ein Branch ein Pointer zu einem bestimmten Commit

## Commits und Branches

Commit-Log mit einem aktiven Feature-Branch:

```
* add sidebar (master)
| * correct typo in footer (footer)
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Commits und Branches

Zusammenführen von Branches (via _merge_):

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

## Commits und Branches

Zusammenführen von Branches (via _rebase_ und _squash_):

```
* add footer (master)
* add sidebar
* add placeholder content
* initialize website
```
