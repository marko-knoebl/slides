# Side Effects

## Side Effects

Wenn sich Komponenten-Props bzw State ändern:

"Main Effect": Komponente wir mit aktuellen Daten (neu) gerendert

mögliche "Side Effects": Auslösen von API-Abfragen, Speichern von Daten, Explizite Änderungen am DOM, ...

## Side Effects

Typischerweise möchten wir Side Effects auslösen, wenn _sich bestimmte Props oder State geändert haben_ oder wenn _die Komponente zum ersten Mal eingebunden wurde_

## Side Effects

typische Fälle von Side Effects:

- Auslösen von API-Anfragen
  - wenn eine Komponente zum ersten Mal eingebunden wird
  - wenn sich bestimmte Daten (State / Props) geändert haben (z.B. wenn der Benutzer ein bestimmtes Element auswählt, um dessen Details zu sehen)
- Speichern von Daten in _localStorage_, wenn sie sich geändert haben
- Starten von Timern
- ...

## Side Effects

Implementierung:

in Funktionskomponenten: mittels des _Effect Hooks_

in Klassenkomponenten: mit Hilfe von Lifecycle-Methoden
