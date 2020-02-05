# Memoisation

## Memoisation

Memoisation = Technik, um z.B. Funktionsaufrufe zu beschleunigen: frühere Resultate werden gespeichert und müssen nicht neu berechnet werden

## Memoisation in React

Verwendung von Memoisation in React:

Wenn sich bei einer Komponente props bzw state nicht ändern, kann das alte Rendering oft beibehalten werden

## Memoisation in React

in Funktionskomponenten gilt:

- Ein Setzen eines geänderten States bewirkt ein neues Rendering
- Ein erneutes Setzen des gleichen States bewirkt kein neues Rendering
- Ein neues Rendering einer Komponente bewirkt üblicherweise das neue Rendering _aller Unterkomponenten_
- Durch den Einsatz von `React.memo` kann erreich werden, dass sich nur jene Unterkomponenten neu rendern, deren props sich geändert haben

## Memoisation in React

Anmerkung: Auch Hooks wie `useContext`, `useReducer`, ... können ähnlich wie `useState` ein Rerendering anstoßen

## Memoisation in React

Visualisierung des Renderings in den React Devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoisation in React

Memoisation von Funktionskomponenten:

```js
import React, { memo } from 'react';

const Rating = props => {
  /*...*/
};
const RatingMemoized = memo(Rating);
```

## Verwaltung von Daten ohne Mutationen

In React werden (nicht-primitive) Einträge in State und Props dann als geändert angesehen, wenn sie sich auf ein anderes Objekt als zuvor beziehen.

## Verwaltung von Daten ohne Mutationen

Bei Memoisation in React: Daten werden mit `===` auf Gleichheit überprüft

Was gibt das folgende Programm aus?

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

## Verwaltung von Daten ohne Mutationen

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

Obiges Programm gibt `true` aus. `state1` und `state2` beziehen sich auf das selbe Objekt. Die Änderung würde bei memoisierten Komponenten kein neues Rendering auslösen.

## Verwalten von Daten ohne Mutationen

Korrekte Verwendung:

```js
const state1 = [1, 2, 3];
const state2 = [...state1, 4];
```
