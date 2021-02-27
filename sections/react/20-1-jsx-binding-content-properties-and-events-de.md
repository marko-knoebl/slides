# JSX: Binden von Inhalten, Properties und Events

## Inhalte binden

wir können Zahlen und Strings als grundlegende Typen direkt einbinden:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

## Properties binden

Der Wechsel von XML auf JS klappt auch bei Properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Beachte die fehlenden Anführungszeichen bei href

## Events binden

```jsx
const sayHello = () => {
  alert('hello world');
};
```

```jsx
<button onClick={sayHello}>Say Hello</button>
```

Liste von Browser-Events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

## Events binden

Achtung: Ein Event Handler muss eine **Funktion** sein, und nicht ein Funktionsaufruf

OK:

```js
<button onClick={alert}>Say something</button>
```

nicht OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

## Property- und Event-Namen

Manche Properties von Elementen haben andere Namen als in standard HTML (spiegeln teilweise die standard DOM-Properties wider)

- `className` (anstatt `class`)
- `onClick` (anstatt `onclick`)
- `htmlFor` (anstatt `for`)
