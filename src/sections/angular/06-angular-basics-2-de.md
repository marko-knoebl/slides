# Angular - Grundlagen II

## VS Code - Plugins

Empfehlung

- Angular Snippets (by John Papa)
- Angular Language Service
- TSLint

## Templatesprache: Properties

Dynamisches Setzen von Properties:

```xml
<input type="number" [value]="1/3">
```

## Properties: Aufgaben

- Zeige ein zufälliges Bild an. Verwende dazu:

```js
const getImgUrl = () =>
  'https://picsum.photos/200/300?image=' +
  Math.floor(Math.random() * 100);
```

## Templatesprache: \*ngFor

Mit _\*ngFor_ können wir HTML-Elemente wiederholen:

```html
<div *ngFor="let todo of todos">
  {{ todo.title }}
</div>
```

\*ngFor wiederholt das Element, auf das es angewendet wird (hier: das div-Element)

## Templatesprache: \*ngFor

Optional können wir mit Hilfe der index-Variable mitzählen:

```html
<div *ngFor="let todo of todos; index as i">
  {{i}}: {{ todo.title }}
</div>
```

## Templatesprache: \*ngFor

Beispiel: Rating-Komponente, die Sterne anzeigt (mit zunächst unveränderlicher Anzahl)

## Templatesprache: \*ngIf

Mit _\*ngIf_ können wir ein Element unter bestimmten Bedingungen ein- oder ausblenden.

Beispiele:

```html
<div *ngIf="item.importance >= 3">{{ item.text }}</div>
```

## Templatesprache: Klassen

Wir können CSS-Klassen dynamisch zuweisen:

```html
<div [class.important]="isImportant()">…</div>

<span [class.negative]="item.amount < 0">
  {{ item.amount }}
</span>
```

## Templatesprache: Klassen

Weitere Möglichkeiten:

```html
<div [ngClass]=
  "{important: isImportant(), negative: item.amount < 0}">
  ...
</div>
```

## Templatesprache: Stile

Für jede Komponente können wir CSS-Stile festlegen. Diese betreffen dann nur eine Komponente.

Dazu gibt es zwei Möglichkeiten in der Konfiguration:

`styleUrls: ['./app.component.css']`  
oder  
`styles: ['h1 {..} …']`

## Templatesprache: Stile

In Komponentenstilen bezieht sich der besondere `:host`-Selektor auf das Komponententag selbst.

```css
:host {
  display: block;
}
```

## Templatesprache: Stile

Für einzelne HTML-Elemente können wir direkt mit einer Angular-eigenen Syntax Stile via Properties setzen:

```html
<div [style.color]="getTextColor()">…</div>
<span [stlye.font-size.px]="getFontSize()">…</span>
<div [style.width.%]="100 / n">…</div>
```

## Templatesprache: Stile

Beispiel: Wir erstellen ein `<div>`-Element, dessen Schriftgröße zufällig festgesetzt wird

## Templatesprache: Pipes

Pipe = im wesentlichen eine Funktion, die im Template zur string-Formatierung zur Verfügung steht

## Templatesprache: Pipes

Beispiele:

- `Today is {{ today | date }}`
- `My name is {{ name | uppercase }}`
- `The price is {{ price | number:'1.2-2'}}`
- `Debugging information: {{ todo | json }}`
- `Total amount: {{total | currency:'EUR':'symbol':'1.2-2'}}`

## Lokalisierung von Pipes

angular.json:

`...targets.build.configurations.de.i18nLocale` = `"de"`

`...targets.serve.configurations.de.browserTarget` = `"$projectname:build:de"`

im Terminal:

`ng serve --configuration=de`

## Templatesprache: Templatevariablen

Mit Templatevariablen können wir direkt auf Elemente aus dem Template zugreifen. Dazu verwenden wir das #-Zeichen.

```html
Todo: <input #newtodo>
<button (click)="addTodo(newtodo.value)">
  Add
</button>
```

## Templatesprache: Events

Wir können alle Standard-DOM-Events über die folgende Syntax überwachen:

```html
<div (eventname)="eventHandler()">…</div>
```

Liste von Standard-DOM-Events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## Templatesprache: Events

```html
<button (click)="increase()"> + </button>

<input (keydown)="onKeyDown()">
```

## Standard-Events: Event-Objekt

Das JavaScript Event-Objekt können wir über den Parameter mit dem Namen $event erhalten.

```html
<input (keydown)="onKeyDown($event)">
```

```js
onKeyDown(event: KeyboardEvent) {
  event.preventDefault();
  this.key = event.key;
}
```

## Standard-Events: Event-Filter

```html
<input (keyup.enter)="onEnter()">
```

Mit der obigen Syntax können Events auf bestimmte Kategorien beschränkt werden

## Beispiele

- counter-Komponente
- diashow-Komponente
