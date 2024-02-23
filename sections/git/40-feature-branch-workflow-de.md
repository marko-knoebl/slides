# Feature Branch Workflow

## Feature Branch Workflow

Workflow:

Um neue Features / Änderungen umzusetzen, erstellt man einen sogenannten _Feature Branch_

Der Feature Branch kann sich individuell parallel zum main Branch entwickeln

Entwickelt sich der main Branch weiter, können die Änderungen in den Feature Branch übernommen werden

Ist ein Feature komplett, können die Änderungen in den main Branch übernommen werden (nach begutachtung durch andere Entwickler)

## Feature Branch Workflow

Feature Branches können oft auf einen kleinen Rahmen beschränkt sein, z.B. _fix-spelling-error-in-readme_

manche Feature Branches müssen großen Umfang haben, z.B. _port-to-typescript_

## Feature Branch Workflow

Nachdem die Änderungen eines Feature Branches in den Haupt-Branch übernommen wurden, wird der Feature Branch üblicherweise gelöscht

## Feature Branch Workflow

Beispiel: Entwickler arbeiten an zwei unterschiedlichen Tasks gleichzeitig:

```txt
* add sidebar (sidebar)
| * add logo to footer (footer)
| * add footer with basic content
|/
* add placeholder content (main)
* initialize website
```

## Feature Branch Workflow

nach Vervollständigung eines Features kann es in den main-Branch eingebunden werden:

```txt
* merge branches (main)
|\
* | add sidebar
| * add logo to footer
| * add footer with basic content
|/
* add placeholder content
* initialize website
```

alte Feature-Branches werden üblicherweise gelöscht

## Feature Branch Workflow

während der Entwicklung:

- erstelle einen neuen Feature-Branch, der von _main_ abzweigt
- füge bei Änderungen regelmäßig neue Commits hinzu
- merge (oder rebase), wenn neue Commits auf dem _main_-Branch gemacht werden

wenn das Feature fertiggestellt ist:

- optional: kombiniere alle Commits auf dem Branch zu einem (rebase)
- merge in den _main_-Branch
- lösche den Feature-Branch

## Siehe auch

- https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
<!-- https://stackoverflow.com/questions/tagged/git?tab=Votes -->
