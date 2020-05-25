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

# Git remote

## Git remote

Hosts für Git:

- **GitHub**
- **GitLab**
- Bitbucket
- SourceForge

## Zusammenarbeit via GitHub

Optionen:

- Klonen eines bestehenden Repositories von GitHub
- Veröffentlichen eines eigenen Repositories

## Klonen eines bestehenden Git Repositories

```bash
git clone https://github.com/...
```

Wir kopieren hierzu den Link des grünen _clone or download_-Buttons auf GitHub

## Veröffentlichen eines neuen Git Repositories

Auf GitHub: Klicke auf das _+_ rechts oben

Wähle _nicht_ "Initialize this repository with a README"

## Veröffentlichen eines neuen Git Repositories

Sobald das leere Repository auf GitHub existiert - folge der dort angezeigten Anleitung für ein _leeres Repository_

Üblicherweise verbindet man ein lokales Repository nur mit _einem_ remote Repository - das remote Repository nennt man üblicherweise _origin_

```bash
git remote add origin https://github.com/...
```

## Veröffentlichen eines neuen Branches

Zum Veröffentlichen eines Branches, der am remote Repository noch nicht bekannt ist:

```bash
git push -u origin master
```

kopiert die Commits des lokalen _master_-Branches in einen neu angelegten _master_-Branch im remote Repository

## Veröffentlichen von Commits eines bekannten Branches

Zum Veröffentlichen von Commits eines Branches, der auf der remote-Seite schon bekannt ist:

```bash
git push
```

## Holen neuer Commits von einem remote Branch

Holen und mergen von Commits des remote Branches, der dem aktiven Branch entspricht:

```bash
git pull
```

## Löschen eines remote Branches

Löschen eines lokalen Branches:

```bash
git branch -d python-3-port
```

Löschen des zugehörigen remote Branches:

```bash
git push origin :python-3-port
```

## Credentials speichern

```bash
git config credential.helper cache
```

Hierdurch speichert Git eingegebene Passwörter für 15 Minuten
