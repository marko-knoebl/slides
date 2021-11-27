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

typische Auslöser für Side Effects:

- beim ersten Rendern einer Komponente
- wenn sich Einträge in _state_ / _props_ ändern

## Side Effects

Side Effects im Options API:

- Lifecycle-Event: `created`
- beim Ändern von Daten: `watch`-Funktion

Side Effects im Composition API (Variante 1):

- Initialisierung in `setup`
- wenn sich Daten Ändern: `watch`-Funktion

Side Effects im Composition API (Variante 2):

- `watchEffect`-Funktion: Läuft beim ersten Rendering und bei Änderungen von überwachten Werten
