# Side Effects

## Side Effects

Komponenten können _Side Effects_ auslösen, wenn sie (neu) gerendert wurden

Typischerweise möchten wir Side Effects auslösen, wenn _sich bestimmte Props oder State geändert haben_ oder wenn _die Komponente zum ersten Mal eingebunden wurde_

## Side Effects

typische Fälle von Side Effects:

- Auslösen einer API-Anfrage, wenn eine Komponente zum ersten Mal eingebunden wird
- Auslösen einer API-Anfrage, wenn sich bestimmte Daten geändert haben (z.B. wenn der Benutzer ein bestimmtes Element auswählt, um dessen Details zu sehen)
- Speichern von Daten in _localStorage_, wenn sie sich geändert haben
- Starten von Timern
- ...

## Side Effects

Implementierung:

in Funktionskomponenten: mittels des _Effect Hooks_

in Klassenkomponenten: mit Hilfe von Lifecycle-Methoden wie `componentDidMount`, `componentDidUpdate` oder `componentWillUnmount`
