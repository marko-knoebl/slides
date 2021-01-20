# Git

## Git

_Versionskontrollsystem_

es kann insbesondere bei folgenden Aufgaben behilflich sein:

- Änderungen an einer Codebase mitverfolgen
- Mit anderen Entwicklern zusammenarbeiten

## Beispiele für Repositories

- <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git>: Linux Kernel
- <https://gitlab.com/fdroid/fdroidclient>: F-Droid client auf GitLab (mit Graph-Ansicht)
- <https://github.com/twbs/bootstrap>: Bootstrap auf GitHub
- <https://github.com/EvanLi/Github-Ranking/blob/master/Top100/Top-100-stars.md>: Repositories mit den meisten Sternen auf GitHub

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

# Userinterfaces

## Userinterfaces

- command-line interface (Standard, umfangreiche Funktionalität)
- GUI
  - _git gui_ und _gitk_
  - ...
- Webinterfaces / gehostete Git Repositories
  - GitHub
  - GitLab

# Setup

## Setup unter Windows

Installation von <https://git-scm.com>

## Setup unter Windows

Empfehlungen:

- **Select Components**:
  - _Git GUI Here_: deaktivieren
  - _Git Bash Here_: aktivieren, um aus dem Windows Explorer einfach ein _Bash_-Terminal öffnen zu können
- **Default editor**:
  - falls unsicher, wählre _Nano_ als einfachen Konsolen-baiserten Texteditor
- **line ending conversions**:
  - Empfehlung: _Checkout as-is, commit Unix-style line endings_
- **Choose a credential helper**:
  - wähle _Git Credential Manager Core_ für erweiterte Integration mit Services wie _GitHub_, anderfalls wähle _None_

## Konfiguration von Git

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

# Initialisieren oder Klonen eines git Repositories

## Befehle

- `git init`
- `git clone`

## Initialisieren eines git Repositories

Initialisieren eines neuen Repositories in einem lokalen Ordner:

```bash
git init
```

## Klonen eines git Repositories

Klonen eines öffentlichen Repositories (von GitHub):

```bash
git clone https://github.com/libgit2/libgit2
```

Erstellt einen neuen Ordner _libgit2_ mit dem aktuellen Code und der gesamten Versionsgeschichte

<!--
libgit2: ~50MiB
bootstrap: ~170MiB (80 branches)
-->

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

# History

## Befehle

- `git log`
- `git show`
- `git diff`
- `git restore`
- `git revert`

## History

Auflisten bisheriger Commits:

```bash
git log
git log --oneline
git log --oneline --graph
git log --oneline --graph --all
```

Beispiel für Ausgabe zum letzten Befehl:

```bash
* e84890f (HEAD -> master, origin/master, origin/HEAD) add footer
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

## Commit-History

Zugreifen auf die Inhalte eines früheren Commits (mit id b4c906...):

```bash
git restore . b4c9
```

**Bemerkung**: alle aktiven Änderungen gehen verloren

Zurück zum aktuellsten Commit des derzeitigen Branches:

```bash
git restore .
```

## Commit-History

Rückgängig Machen des letzten Commits (mittels eines neuen Commits):

```bash
git revert HEAD
```

# Feature Branch Workflow

## Feature Branch Workflow

Workflow:

Um neue Features / Änderungen umzusetzen, erstellt man einen sogenannten _Feature Branch_

Der Feature Branch kann sich individuell parallel zum master Branch entwickeln

Entwickelt sich der master Branch weiter, können die Änderungen in den Feature Branch übernommen werden

Ist ein Feature komplett, können die Änderungen in den master Branch übernommen werden (nach begutachtung durch andere Entwickler)

## Feature Branch Workflow

Feature Branches können oft auf einen kleinen Rahmen beschränkt sein, z.B. _fix-spelling-error-in-readme_

manche Feature Branches müssen großen Umfang haben, z.B. _port-to-typescript_

## Feature Branch Workflow

Beispiel: Entwickler arbeiten an zwei unterschiedlichen Tasks gleichzeitig:

```txt
* add sidebar (sidebar)
| * add logo to footer (footer)
| * add footer with basic content
|/
* add placeholder content (master)
* initialize website
```

## Feature Branch Workflow

nach Vervollständigung eines Features kann es in den Master-Branch eingebunden werden:

```txt
* add footer (master)
| * add sidebar (sidebar)
|/
* add placeholder content
* initialize website
```

## Feature Branch Workflow

Andere Branches können Änderungen aus dem Master-Branch mittels _merge_ oder _rebase_ übernehmen:

```txt
  * add sidebar (sidebar)
 /
* add footer (master)
* add placeholder content
* initialize website
```

## Feature Branch Workflow

während der Entwicklung:

- erstelle einen neuen Feature-Branch, der von _master_ abzweigt
- füge bei Änderungen regelmäßig neue Commits hinzu
- merge (oder rebase), wenn neue Commits auf dem _master_-Branch gemacht werden

wenn das Feature fertiggestellt ist:

- optional: kombiniere alle Commits auf dem Branch zu einem (rebase)
- in den _master_-Branch mergen
- lösche den Feature-Branch

## Siehe auch

- <https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow>
  <!-- https://stackoverflow.com/questions/tagged/git?tab=Votes -->

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

# Zusammenführen von Branches

## Zusammenführen von Branches

Strategien:

- **merge**: einfachste, behält alle Commits aus dem Feature Branch (erzeugt komplexe Histories)
- **squash and merge**: Kombiniert alle Commits eines Feature Branches in einen Einzelnen Commit
- **rebase**: komplexeste Methode, verwendet nur ausgewähle Commits

# Zusammenführen von Branches via merge

## Zusammenführen von Branches via merge

Beispiel für eine Commit-History (während der Feature-Entwicklung):

```
  * merge branch 'master' into 'footer' (footer)
 /|
* | add company logo (master)
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Zusammenführen von Branches via merge

Beispiel für eine Commit-History (wenn das Feature vollständig ist):

```
* merge branch 'master' into 'footer' (master)
|\
* | add company logo
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

Bemerkung: der letzte Merge behält seine Commit-Message

## Zusammenführen von Branches via merge und squash

merge und squash:

Beispiel für eine Commit-History (wenn das Feature vollständig ist):

```
* add footer (master)
| * merge branch 'master' into 'footer' (footer)
|/|
* add company logo
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Merge und squash

Nach einem erfolgreichen _merge und squash_ kann der Branch gelöscht werden

Resultat:

```
* add footer (master)
* add company logo
* add sidebar
* add placeholder content
* initialize website
```

## Zusammenführen von Branches via merge

Befehle zum Zusammenführen der Änderungen von _master_ und _footer_ (Merge von _master_ nach _footer_):

```bash
git switch footer
git merge master
```

## Merge-Konflikte

haben zwei Branches die gleiche Zeile unterschiedlich abgeändert, gibt es einen _Merge-Konflikt_

## Merge-Konflikte

Darstellung eines Merge-Konflikts in einer Datei:

```
First line
Second line
<<<<<< HEAD
Thrd line!
======
Third line
>>>>>> master
Fourth line
```

Ein Branch hat ein Ausrufezeichen hinzugefügt, ein anderer einen Schreibfehler behoben

<!--
note: actually there should be one more "<" sign:
<<<<<<<
>>>>>>>
-->

## Merge-Konflikte Auflösen

- Bearbeite die Datei und behalte die gewünschten Änderungen
- Dateien mit gelösten Konflikten mittels _add_ hinzufügen
- `git commit` (ohne extra Argumente)

## Löschen alter Branches

Üblicherweise werden Branches nach dem Merge gelöscht:

Löschen eines Branches, der gemerged wurde:

```
git branch -d footer
```

Löschen eines Branches, der nicht gemerged ist:

```bash
git branch -D footer
```

# Übungen

## Übungen

- Erstelle und ändere eine Todo-Liste
- Arbeite an einem bestehenden Projekt von GitHub (z.B. an der Readme-Datei)

## Übung: Todo-Liste

Erstelle eine Text-Datei mit Todos:

```
- groceries
- taxes
x gardening
```

Verändere die Todos mittels separater _Feature Branches_, z.B. "long-term todos", "new-job", "new-job-sub-items", "taxes-completed", ...

# Der checkout-Befehl

## Der checkout-Befehl

`git checkout` ist ein älterer Befehl, der für ähnliches wie `git switch` und mehr benutzt werden kann; `git switch` wurde 2019 zu Git hinzugefügt (mit git 2.23)

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

# Bearbeiten der Commit-History mittels rebase

## Bearbeiten der Commit-History

Es ist _möglich_, die Commit-History zu bearbeiten - kann aber gefährlich sein

## Bearbeiten der Commit-History

Beispiele für Anwendungsfälle:

- Neustrukturierung von Commits in einem Branch, um sie klarer zu machen
- Rückgängig machen eines Commits

## Bearbeiten der Commit-History

Regeln:

- ändere die Geschichte eines Branches nicht, von dem andere Branches abzweigen könnten (z.B. _master_)
- die Geschichte einer Branches in einem eigenen Repository kann abgeändert werden

## Bearbeiten der Commit-History mittels rebase

ursprünglicher Commit-Log:

```
  * merge branch 'master' into 'footer' (footer)
 /|
* | add company logo (master)
| * add copyright notice to footer
| * merge branch 'master' into 'footer'
|/|
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

## Bearbeiten der Commit-History mittels rebase

neuer Commit-Log:

```
  * add footer (footer)
 /
* add company logo (master)
* add sidebar
* add placeholder content
* initialize website
```

Bemerkung: der _master_-Branch wurde nicht geändert

## Bearbeiten der Commit-History mittels rebase

Befehl in Git:

```bash
git rebase -i master
```

Ermöglicht das Interaktive Bearbeiten des aktuellen Branches von dem Punkt, bei dem er von _master_ abzweigt

## Bearbeiten der Commit-History mittels rebase

Squashing von Commits:

Ändere alle **außer dem ersten** Befehle von _pick_ auf _squash_

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
