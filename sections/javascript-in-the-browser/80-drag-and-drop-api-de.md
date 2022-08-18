# JavaScript: Drag and drop

## Themen

- Drag and drop
- JavaScript Wiederholung / Vertiefung

## Vorschau: Resultate

## Vorwissen / Wiederholung

- `for ... of`
- Template-Strings
- Pfeilfunktionen

<!-- list separator -->

- `getElementById` / `getElementsByClassName` / `querySelectorAll`
- `addEventListener`
- `innerText` / `innerHTML`
- `preventDefault`

## Drag and drop

- **Drag and drop von Elementen innerhalb eines HTML-Dokuments (in ein anderes Element hinein)**
- Drag and drop von Elementen außerhalb des Browsers in das Dokument hinein (z.B. Text in ein Eingabefeld hinein)
- Drag and drop von Elementen innerhalb des Browser nach draußen (z.B. Text in einen Texteditor)

## Draggable

Elemente, die standardmäßig "draggable" sind:

- ausgewählter Text
- Bilder
- Links

Frage: praktische Anwendung? / Wohin können wir ziehen?

## Draggable

weitere Elemente "draggable" machen:

```html
<div draggable="true">drag me!</div>
```

## Drag-Events

welche Drag-Events gibt es?

und auf welchen Elementen werden diese ausgelöst?

## Drag and drop events

Events des "bewegten" Elements:

- _dragstart_
- _drag_
- _dragend_

<!-- sep -->

Events des Ziels:

- _dragenter_
- _dragover_
- _dragleave_
- _drop_

## Events

Übung: mehrere "draggable" Elemente, die jeweils anzeigen, wie of sie schon "gedraggt" wurden

## Drag and drop

"drop" auf Elementen erlauben:

bei "dragenter" und "dragover" Events des Ziels `.preventDefault()` aufrufen

```js
function onDragEnter(event) {
  event.preventDefault();
}
function onDragOver(event) {
  event.preventDefault();
}
```

## Drag and drop

auf "drop" reagieren:

```js
function onDrop(event) {
  event.preventDefault();
  event.target.innerText += ' drop ';
}
```

## Drag and drop

Übung: ein Element das mitzählt, wie oft auf es gedroppt wurde

## Drag and drop: Daten mitgeben

Bei "drag start" Daten bestimmter Formate mitgeben:

```js
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', 'foo bar');
  event.dataTransfer.setData(
    'text/html',
    '<em>foo</em> bar'
  );
}
```

Beispiel: Draggen von HTML-Inhalten nach _Word_ und in einen _Plain-Text-Editor_

## Drag and drop: Daten mitgeben und wieder auslesen

bei "drag start" Daten eines Bestimmten Types mitgeben:

```js
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', 'foo');
}
```

bei "drag end" Daten auslesen:

```js
function onDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
}
```

## Drag and drop: Daten übertragen

Übung: verschiedene Produkte, die in den Einkaufswagen gezogen werden können

## Drag and drop: Elemente verschieben

Wir können auch ein ganzes Element durch drag and drop in ein anderes Element verschieben lassen

## Drag and drop: Elemente verschieben

Verfahren: Der Dateneintrag, der übergeben wird, kann die ID des Elements sein - basierend darauf können wir das verschobene Element in sein neues Elternelement verschieben
