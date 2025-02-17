# DOM: Events

## DOM: Events

Wir können auf Benutzerinteraktionen und andere Ereignisse reagieren, z.B.:

- Klicken / Drücken auf ein Element
- Bewegen der Maus über ein Element
- Eingabe in ein Eingabefeld
- Absenden eines Formulars
- ...

## DOM: Events

Wir können Funktionen als "Event-Listener" hinzufügen:

```js
let button = document.querySelector('#my-button');

button.addEventListener('click', () => {
  console.log('click event triggered on button');
});
```

## DOM: Events

Beispiel: Klickzähler - Anzeigen einer Zahl in einem div, die bei jedem Klick auf einen Button erhöht wird

```js
let counterDisplay = document.createElement('div');
counterDisplay.textContent = '0';
let counterButton = document.createElement('button');
counterButton.textContent = 'increment';

counterButton.addEventListener('click', () => {
  counterDisplay.textContent =
    Number(counterDisplay.textContent) + 1;
});

document
  .querySelector('body')
  .append(counterDisplay, counterButton);
```

## DOM: Events

Eventnamen:

- _click_ (kann durch jedes HTML-Element ausgelöst werden)
- _input_ (wird ausgelöst, wenn der Wert eines Eingabefelds geändert wird)
- _submit_ (für Formulare)
- _mouseenter_ (wenn der Mauszeiger in ein Element hinein bewegt wird)
- ...

Siehe <https://www.w3schools.com/jsref/dom_obj_event.asp> für eine ausführliche Liste

## DOM: Events

Übung: Erstelle eine HTML-Datei mit verschiedenen Elementen, die Event-Listener haben. Wenn ein Event auftritt, logge es in die Konsole.

Beispielausgabe in der Konsole:

```
button1: mouseenter
button1: click
button1: mouseleave
textbox1: mouseenter
textbox1: click
textbox1: input
textbox1: input
textbox1: mouseleave
```

## DOM: Event-Objekte

Wenn ein Event auftritt, können wir in JavaScript auf das entsprechende `Event`-Objekt zugreifen:

```js
myButton.addEventListener('click', (event) => {
  console.log('myButton was clicked');
  console.log('mouse button:', event.button);
  console.log('coordinates:', event.clientX, event.clientY);
});
```

## DOM: Events

Beispiele:

- Spiel: click the box

## DOM: Formulare und Formularereignisse

Beispiel: Todo-Liste
