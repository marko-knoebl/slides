# State (Komponentenzustand)

## Themen

- State-Grundlagen
- Input-State
- Immutability - Arrays und Objekte im State

## State

Komponenten können einen internen Zustand (_State_) haben

Auf den State kann im Template verwiesen werden

Die Anzeige wird automatisch aktualisiert, wenn Teile des States neu gesetzt werden

## State Hook

State Hook in Funktionskomponenten:

```js
import { useState } from 'react';

function Slideshow() {
  const [imgId, setImgId] = useState(0);
  const [imgWidth, setImgWidth] = useState(300);
  const [imgHeight, setImgHeight] = useState(200);

  return ...
};
```

## State Hook

```js
const [imgId, setImgId] = useState(0);
```

`useState` kann in der Komponentenfunktion (wiederholt) aufgerufen werden, um State-Einträge zu deklarieren

**Parameter**: ursprünglicher State

**Array von Rückgabewerten**: aktueller State, Setter-Funktion

## Verwenden des minimalen States

Richlinie: Verwende den _minimalen_ State (d.h. keine redundanten Daten)

Weitere Daten können aus dem State abgeleitet werden

Beispiele:

- _Slideshow_: speichere die Bild-ID - die Bild-URL kann davon abgeleitet werden
- _Todos_: speichere ein Array von Todos mit ihrem Status - die Anzahl an erledigten oder nicht-erledigten Todos kann davon abgeleitet werden
- _Textfeld_: speichere den Inhalte - der Gültigkeitsstatus kann davon abgeleitet werden

## Übung: Slideshow (Teil 1)

Implementiere die zuvor gesehene Slideshow-Komponente erneut; versuche, nicht auf den bisherigen Code zu blicken

- zeige Bilder wie z.B. `https://picsum.photos/300/200?image=0`
- Buttons für _vorwärts_ und _zurück_
- Button für _zurück zum Start_
- verhindere, dass ins negative gezählt wird

## Übung: Slideshow (Teil 2)

Füge weitere Features hinzu, z.B.:

- Button für zufälliges Bild
- Buttons zum Ändern der Breite des Bildes (z.B. Umschalten zwischen _300x200_ und _400x200_)
- kleines Vorschaubild für das vorherige und nächste Bild
- ... (deine eigene Ideen)

_vermeide_ vorerst folgendes:

- Arrays / Objekte im State
- Verwenden von Inputs (Textfeldern)
- Verwenden von Timern (`setTimeout`, `setInterval`)
- Styling
