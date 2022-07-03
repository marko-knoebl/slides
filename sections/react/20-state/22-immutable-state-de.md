# Immutable State

## Immutable State

**Immutability**: Wichtiges Konzept in der funktionalen Programmierung und bei React

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Immutable State

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Das sollten wir _nicht_ tun - React bemerkt diese Änderungen nicht und aktualisiert die Ansicht eventuell nicht

Objekte im State sollten als _unveränderlich_ erachtet werden

## Immutable State

Wenn ein State-Setter aufgerufen wird:

React vergleicht die _alte State-Referenz_ mit der _neuen State-Referenz_

Wenn die Referenz die gleiche ist, wird die Komponente nicht neu gerendert

## Immutable State

Demo: <https://codesandbox.io/s/immutable-state-demo-r2x1i>
