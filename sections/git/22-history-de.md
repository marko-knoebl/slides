# History

## Befehle

- `git log`
- `git show`
- `git diff`
- `git checkout`
- `git revert`

## History

Auflisten bisheriger Commits:

```bash
git log
git log --oneline
git log --oneline --graph
git log --oneline --graph --all
```

Beispiel für Ausgabe zum zweiten Befehl:

```bash
* e84890f (HEAD -> main, origin/main, origin/HEAD) add footer
* 9eb2f53 add company logo
* 5c41c01 add sidebar
* f4f591c add placeholder content
* d6510c2 initialize website
```

## Commit-History

Anzeigen der Änderungen zwischen Commit _19e0e64..._ und dessen Eltern-Commit:

```bash
git show 19e0
```

Anzeigen der Änderungen zwischen Commit _19e0e64..._ und der aktuellen Version:

```bash
git diff 19e0
```

kompakte Ausgabe:

```bash
git diff 19e0 --name-status
```

## Commit-History

Zugreifen auf die Inhalte eines früheren Commits (mit id b4c906...):

```bash
git checkout b4c9
```

Zurück zum aktuellsten Commit des main-Branches:

```bash
git switch main
```

## Commit-History

Rückgängig Machen des letzten Commits (mittels eines neuen Commits):

```bash
git revert HEAD
```
