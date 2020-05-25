# Git Branches

## Branches

Branches ("Zweige") erlauben die parallele Entwicklung an mehreren Aufgaben

Der Standard-Branch heißt üblicherweise _master_

## Erstellen eines Branches

```bash
git branch python-3-port
```

## Wechseln von Branches

Wechseln zwischen _python-3-port_ und _master_:

```bash
git switch python-3-port
git switch master
```

Vor dem Wechseln kann es sinnvoll sein, sicherzustellen, dass es keine aktiven Änderungen gibt

## Der checkout-Befehl

`git checkout` ist ein älterer Befehl, der für ähnliches wie `git switch` und mehr benutzt werden kann; `git switch` wurde 2019 zu Git hinzugefügt

Wechseln eines Branches mittels `checkout`:

```bash
git checkout master
```

## Der checkout-Befehl

Zugreifen auf die Inhalte eines früheren Commits (mit ID b4c906...)

```bash
git checkout b4c9
```

Zurück zum neuesten Commit des master-Branches:

```bash
git checkout master
```

## Liste von Branches

Auflisten aller (lokalen) Branches:

```bash
git branch
```

## Mergen von Branches

_Mergen_ (Hinzufügen) der Updates eines Branches in einen anderen Branch:

```bash
git checkout master
git merge python-3-port
```

(Mergen von _python-3-port_ nach _master_)

## Löschen eines Branches

Löschen eines Branches:

```bash
git branch -d python-3-port
```

## Commit-Baum

Anzeigen eines Commit-Baums / Graphs mit allen Branches:

```bash
git log --graph --all --oneline
```
