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
