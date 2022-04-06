# Side Effects

## Side Effects

Wenn sich Komponenten-Props bzw State ändern oder die Komponente zum ersten Mal eingebunden wird:

"Main Effect": Komponente wir mit aktuellen Daten (neu) gerendert

mögliche "Side Effects": Auslösen von API-Abfragen, Speichern von Daten, Explizite Änderungen am Dokument, Starten von Timern, ...

## Side Effects

typische Fälle von Side Effects:

- Auslösen von API-Anfragen
  - wenn eine Komponente zum ersten Mal eingebunden wird
  - wenn sich bestimmte Daten (State / Props) geändert haben (z.B. wenn der Benutzer ein bestimmtes Element auswählt, um dessen Details zu sehen)
- Speichern von Daten in _localStorage_, wenn sie sich geändert haben
- Explizite Änderungen am Dokument (DOM)
- Starten von Timern
- ...

## Side Effects

manche Side Effects müssen später "aufgeräumt" werden:

- Abbrechen von API-Anfragen, wenn sie nicht mehr benötigt werden (z.B. wenn sich ein Suchbegriff erneut geändert hat)
- Stoppen von Timern

## Side Effects

Implementierung:

in Funktionskomponenten: mittels des _Effect Hooks_

in Klassenkomponenten: mit Hilfe von Lifecycle-Methoden
