# Branches erstellen und wechseln

## Befehle

- `git branch foo`
- `git branch foo $commitid`
- `git switch foo`
- `git switch -c bar`
- `git switch -c bar $commitid`
- `git branch`

## Erstellen eines Branches

```bash
git branch python-3-port
```

## Wechseln von Branches

Wechseln zwischen _python-3-port_ und _main_:

```bash
git switch python-3-port
git switch main
```

## Wechseln von Branches

Vor dem Wechseln kann es sinnvoll sein, dass es keine aktiven Änderungen gibt

```bash
git status
```

```bash
git switch main
```

## Erstellen und Wechseln in einem

```bash
git switch -c python-3-port
```

Erstellen und Wechseln zu einem neuen Branch

## Auflisten von Branches

Auflisten von allen (lokalen) Branches:

```bash
git branch
```
