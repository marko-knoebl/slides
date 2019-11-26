# Memoisation

## Memoisation

Memoisation = Technik, um z.B. Funktionsaufrufe zu beschleunigen: frühere Resultate werden gespeichert und müssen nicht neu berechnet werden

Kann in React verwendet werden: Wenn sich bei einer Komponente props bzw state nicht ändern, muss sie meist nicht neu gerendert werden.

## Memoisation in React

Auslöser für das neue Rendering einer Komponente:

- **(Re)rendering der Elternkomponente**
- Änderung des States der Komponente
- Anstoß durch einen verwendeten Hook (z.B. `useContext`, `useReducer`, `useSelector`, ...)

Visualisierung des Renderings in den React Devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoisation in React

Verhinderung des (Re)Renderings beim (Re)rendering der Elternkomponente:

Zur Performanceoptimierung ist es oft wünschenswert, dass eine Kindkomponente nicht jedes Mal gerendert wird, wenn deren Elternkomponente neu gerendert wird

Stattdessen soll sie nur dann neu gerender werden, wenn sich ihre Props (bzw ihr State) ändern

Wenn Props (oder State) sich nicht geänder haben, wird das vorherige Resultat (memoisiert) zurückgegeben.

## Memoisation in React

Memoisierte Komponenten in React:

Bei Funktionskomponenten: Verwenden der `memo`-Funktion (memoisierte _props_)

Bei Klassenkomponenten: Erben von `PureComponent` statt `Component` (memoisierte _props_ und _state_)

## Memoisation in React: Funktionskomponenten

```js
import React, { memo } from 'react';

function Rating(...) ...

export default memo(Rating);
```

## Memoisation in React: Klassenkomponenten

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
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
