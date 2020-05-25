# Git Grundlagen

## Git

Git st ein Versionskontrollsystem

es kann insbesondere bei folgenden Aufgaben behilflich sein:

- Änderungen an einer Codebase mitverfolgen
- Mit anderen Entwicklern zusammenarbeiten

## Setup von Git unter Windows

Installation von <https://git-scm.com>

## Setup von Git unter Windows

Setup-Empfehlungen:

- **Select Components**:
  - _kein_ Häkchen bei _Git GUI Here_
  - Häkchen bei _Git Bash Here_, um aus dem Windows Explorer einfach eine _bash_-Konsole öffnen zu können
- **Default editor**:
  - wenn unsicher, verwende _Nano_
- **Adjusting your PATH environment**:
  - Empfehlung: Häkchen bei _Use Git and optional Unix tools from the Command Prompt_ - dadurch können Befehle wie _ls_ oder _mv_ aus der _cmd_-Eingabe ausgeführt werden
- **line ending conversions**:
  - Empfehlung: _Checkout as-is, commit Unix-style line endings_

## Konfiguration von Git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Lokale Versionskontrolle mit Git

Initialisierung eines Repositorys in einem lokalen Ordner

```bash
git init
```

## Commits

Ein _Commit_ in Git ist eine Momentaufnahme einer Codebase

Die Entwicklung einer Codebase im Laufe der Zeit wird durch eine Abfolge von Commits repräsentiert

## Anzeigen der Änderungen seit dem letzten Commit

Anzeigen des Status von Dateien (hinzugefügt / geändert / gelöscht seit dem letzten Commit)

```bash
git status
```

Anzeigen von hinzugefügten / entfernten Zeilen in Dateien

```bash
git diff
```

## Stagen und Committen

Vorbereiten aller geänderten / hinzugefügten / entfernten HTML-Dateien zum Committen (Staging der Dateien):

```bash
git add *.html
```

Erstellen eines Commits (mit verpflichtender Commit-Message)

```bash
git commit -m "changing some HTML files"
```

## Commit-History

Auflisten bisheriger Commits:

```bash
git log
git log --oneline
```

Beispiel für Ausgabe:

```bash
commit e84890f64f974b5f4b0ffa40afff34ecbb33e58c (HEAD -> master, origin/master, origin/HEAD)
Author: ...
Date: ...
...
commit 19e0e64e8f198bc8495c979fe586c47e6dedc06f
....
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

## Ignorieren von Dateien

Wir können zu ignorierende Dateien in einer besonderen Textdatei namens `.gitignore` (ohne Dateiendung) anführen:

```txt
node_modules
.vscode
```
