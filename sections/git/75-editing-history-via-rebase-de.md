# Bearbeiten der Commit-History mittels rebase

## Bearbeiten der Commit-History

Es ist _möglich_, die Commit-History zu bearbeiten - kann aber gefährlich sein

## Bearbeiten der Commit-History

Beispiele für Anwendungsfälle:

- Neustrukturierung von Commits in einem Branch, um sie klarer zu machen
- Rückgängig machen eines Commits

## Bearbeiten der Commit-History

Regeln:

- ändere die Geschichte eines Branches nicht, von dem andere Branches abzweigen könnten (z.B. _main_)
- die Geschichte einer Branches in einem eigenen Repository kann abgeändert werden

## Bearbeiten der Commit-History mittels rebase

ursprünglicher Commit-Log:

```
  * merge branch 'main' into 'footer' (footer)
 /|
* | add company logo (main)
| * add copyright notice to footer
| * merge branch 'main' into 'footer'
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
* add company logo (main)
* add sidebar
* add placeholder content
* initialize website
```

Bemerkung: der _main_-Branch wurde nicht geändert

## Bearbeiten der Commit-History mittels rebase

Befehl in Git:

```bash
git rebase -i main
```

Ermöglicht das Interaktive Bearbeiten des aktuellen Branches von dem Punkt, bei dem er von _main_ abzweigt

## Bearbeiten der Commit-History mittels rebase

Squashing von Commits:

Ändere alle **außer dem ersten** Befehle von _pick_ auf _squash_
