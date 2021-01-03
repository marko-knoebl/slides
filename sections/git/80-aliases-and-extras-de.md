# Aliases und Extras

## Aliases und Extras

- **aliases**: eigene Kürzel für Befehle
- **git-extras**: Paket mit nützlichen Aliases und extra Befehlen

## Aliases

Konfigurieren einiger Aliases:

```bash
git config --global alias.unstage 'restore --staged'
```

```bash
git config --global alias.show-tree 'log --graph --oneline --all'
```

## Extras

**git-extras** bietet vereinfachte Befehle für häufige Aufgaben:

- `git ignore`
- `git show-tree`
- `git squash`
- `git undo`

<https://github.com/tj/git-extras/blob/master/Commands.md>
