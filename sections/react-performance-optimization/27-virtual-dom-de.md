# Virtuelles DOM

## Virtuelles DOM

Beim erneuten Rendern einer React-Komponente: Resultate werden nicht direkt and den Browser übergeben.

Stattdessen: Ein _virtuelles DOM_ wird erstellt und mit dem vorherigen virtuellen DOM verglichen. Nur die Unterschiede werden zur Verarbeitung an den Browser übergeben.

## Virtuelles DOM und Wiederholen von Elementen

Üblicherweise ist React sehr effizient dabei, Änderungen herauszufinden - doch es benötigt Hilfe, wenn Elemente in einem Array Wiederholt werden

Faustregel: Wenn wir in unserem JSX-Template `.map` verwenden, sollten innere Elemente eine eindeutige key-Property haben, um React zu unterstützen

## Virtuelles DOM

siehe auch: https://reactjs.org/docs/reconciliation.html
