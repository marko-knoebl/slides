# localStorage

## localStorage

_localStorage_ ist ein einfacher key-value-Store im Browser; Sowohl _keys_ als auch _values_ sind strings

Der Browser speichert Daten seperat für jede Domain

## localStorage

wichtige Methoden:

- `localStorage.setItem('name', 'John')`
- `localStorage.getItem('name')`
- `localStorage.removeItem('name')`

## localStorage

Speichern und Laden von Daten:

```js
const todoString = JSON.stringify(todos);
localStorage.setItem('todos', todoString);
```

```js
const todoString = localStorage.getItem('todos');
todos = JSON.parse(todoString);
```