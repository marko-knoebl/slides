# Aufzeichnen von Änderungen

## Befehle

- `git status`
- `git diff`
- `git add`
- `git restore`
- `git commit`

## Befehle

```bash
git status
```

Gibt Informationen zu dem aktuellen Zustand des Repositories aus

## Anzeigen der Änderungen seit dem letzten Commit

Status von Dateien anzeigen (hinzugefügt / verändert / gelöscht seit dem letzten Commit):

```bash
git status
```

Anzeigen von hinzugefügten / gelöschten Zeilen in Dateien:

```bash
git diff
```

## Staging

Vorbereiten aller hinzugefügten / veränderten / gelöschten HTML-Dateien zum Committen (Staging von Dateien):

```bash
git add *.html
```

Vorbereiten aller Dateien:

```bash
git add .
```

## Unstaging und Rückgängig machen von aktiven Änderungen

"Unstaging" von Dateien:

```bash
git restore --staged readme.txt
```

Verwerfen von Änderungen:

```bash
git restore readme.txt
```

## Committen

Erstellen eines Commits mit allen Änderungen inklusive Commit-Message:

```bash
git add .
git commit -m "changing some HTML files"
```

## Committen

Kurzversion für das direkte Committen aller Änderungen:

```bash
git commit -a -m "changing some HTML files"
```

## Ignorieren von Dateien

Auflisten von zu ignorierenden Dateien in einer Textdatei namens _.gitignore_ (ohne Dateiendung):

```txt
__pycache__
node_modules
.vscode
```
