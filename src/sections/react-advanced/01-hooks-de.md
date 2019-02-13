# Hooks

## Hooks

Hooks: Erweiterung von funktionalen Komponenten; erlauben die Verwendung von state und anderen Features ohne Klassen

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

## Hooks: derzeitiger Stand

- Dokumentation für Einsteiger noch sehr Klassen-orientiert
- Eingeschränkte Unterstützung der React developer tools (Browser Plugins)

## wichtige Hooks

- state Hook
- effect Hook
- context Hook
- reducer Hook

## reducer Hook

## reducer Hook

In komplexeren Anwendungen macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## reducer Hook

Grundprinzipien von state management:

- Anwendungszustand (state) wird in globalem Objekt gespeichert
- _Jede_ Zustandsänderung wird durch eine _Action_ ausgelöst, die die Zustandsänderung genau beschreibt

## reducer Hook

Actions werden durch JavaScript Objekte repräsentiert:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

## reducer Hook

State management mit reducern:

Beim _reducer Hook_ bzw _Redux_:

Der Übergang von einem State auf den nächsten geschieht mittels einer Reducer-Funktion:

Die Reducer-Funktion erhält als Funktionsparameter den alten Zustand (State) und eine Action, die eine Zustandsänderung beschreibt.

Die Reducer-Funktion gibt den neuen Zustand zurück.

## reducer Hook

```js
const counterReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      throw new Error('unknown action');
  }
};
```

## reducer Hook

Auslösen von Actions: wir rufen die `dispatch`-Funktion des Reducers mit der gewünschten Action als Parameter auf
