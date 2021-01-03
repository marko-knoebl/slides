# Branches erstellen und wechseln

## Befehle

- `git branch foo`
- `git switch foo`
- `git switch -c bar`
- `git branch`

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

## Wechseln von Branches

Vor dem Wechseln kann es sinnvoll sein, dass es keine aktiven Änderungen gibt

```bash
git status
```

```bash
git switch master
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
