# Eigene Komponenten: Properties & Events

## Eigene Properties & Events

Properties und Events stellen die wichtigsten Mechanismen dar, mit denen Komponenten in SPAs miteinander interagieren.

In Angular verwendet man auch die Begriffe:

- input = Property
- output = Event

## Eigene Properties

Beispiel Ratingkomponente

Wir erstellen eine Komponente, die eine bestimmte Anzahl an Sternen anzeigt, welche sich über eine Property steuern lässt:

```html
<app-rating [stars]="4"></app-rating>
```

## Eigene Properties

Wir verändern _rating.component.ts_ folgendermaßen:

zunächst importieren wir den Input-Decorator:

```js
import { Input } from '@angular/core';
```

## Eigene Properties

weiters setzen wir in der Komponentenklasse Typinformationen fest:

```js
  @Input() stars: number;
```

## Eigene Properties

aus dem Template rufen wir die folgende Hilfsmethode auf:

```js
getStarString = () => {
  return '*'.repeat(this.stars);
};
```

## Properties: weitere Beispiele

- diashow - Komponente (mit Properties)
- roman-number - Komponente
- playing-card - Komponente

## Eigene Events

Definition eigener Events:

- Eventname
- evtl zugehöriger Parameter (zB Zahl, String, oder auch ein komplexeres Objekt) - dieser wird im _$event_-Parameter übergeben
- für den zugehörigen Parameter muss ein Typ festgelegt werden (kann auch _void_ sein)

## Eigene Events - Definition

```js
import { Output, EventEmitter} from '@angular/core';

[...]

  @Output() tick: EventEmitter<number> =
    new EventEmitter<number>();

  [...]

  this.tick.emit(this.remainingTime);
```

## Eigene Events - Beispiel

Timer mit Events: start, tick, end

Nutze diese Events für Beispielnachrichten:

- "Der Timer ist gestartet"
- "Nur noch 3 Sekunden"
- "Zeit abgelaufen"

## Eigene Events - Beispiele

```html
<app-timer
  (start)="displayStartMessage()"
  (tick)="updateTime($event)"
  (end)="displayEndMessage()">
</app-timer>
```

## Eigene Events - Beispiele

Beispiel: rating

Wir ändern die rating-Komponente, sodass durch einen Klick auf einen Stern ein entsprechendes Event an die Elternkomponente übergeben wird

```html
<app-rating (change)="onRatingChange($event)"></app-rating>
```

## Beispiel: Todo-App
