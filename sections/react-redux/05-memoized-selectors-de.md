# Memoisierte Selektoren

## Memoisierung

Memoisierung bezeichnet das Cachen von Rückgabewerten reiner Funktionen

## Memoisierung in reselect

_Reselect_ = Library für Memoisierung.

Einfaches Standardverhalten:

Letzter Input und Output einer Berechnung werden gecacht; Wird die Berechnung erneut mit dem gleichen Input angefordert, wird das gecachte Resultat verwendet

## Memoisierung in reselect

```js
import { createSelector } from 'reselect';

// regular function that computes the area of a rectangle
const getRectArea = rect => rect.length * rect.width;

// memoized function that computes the area of a rectangle
const getRectAreaMemoized = createSelector(
  // selector functions signify which input values to watch:
  [rect => rect.length, rect => rect.width],
  // this function will only be called if one of the
  // input values changed:
  (length, width) => length * width
);
```

## Memoisierung in reselect

The last function call will not recompute the area

```js
getRectArea({ length: 2, width: 3, color: 'blue' });
getRectArea({ length: 2, width: 3, color: 'red' });

getRectAreaMemoized({ length: 2, width: 3, color: 'blue' });
getRectAreaMemoized({ length: 2, width: 3, color: 'red' });
```

## Reselect installieren

```bash
npm install reselect
```
