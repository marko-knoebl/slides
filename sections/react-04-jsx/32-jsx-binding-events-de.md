# JSX: Binden von Events

## Events binden

```jsx
function sayHello() {
  alert('hello world');
}
```

```jsx
<button onClick={() => sayHello()}>Say Hello</button>
```

Liste von Browser-Events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

## Events binden

Zugriff auf das Event-Objekt als Funktionsparameter:

```js
<button
  onClick={(event) => {
    console.log(event);
  }}
>
  click me
</button>
```

hier wird das Event ein [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)-Objekt sein

## Events binden

Achtung: Ein Event Handler muss eine **Funktion** sein, und nicht ein Funktionsaufruf

OK:

```js
<button onClick={(event) => handleEvent(event)}>
  click
</button>
```

OK:

```js
<button onClick={handleEvent}>click</button>
```

nicht OK:

```js
<button onClick={handleEvent()}>click</button>
```

## Events binden

Standard-Verhalten eines Submit-Events in einem Formular: Direktes Senden von Daten zum Server

Ersetzen des Standardverhaltens:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```
