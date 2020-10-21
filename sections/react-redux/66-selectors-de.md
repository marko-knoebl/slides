# Selektoren

## Speicherung des minimalen States

Best Practice in Redux: Immer den _minimalen_ State speichern (keine redundanten Daten)

Negativbeispiele:

```js
{
  todos: [...],
  maxTodoId: 3
}
```

```js
{
  shoppingCartItems: [{itemid: ..., price: ...}, ...],
  totalPrice: ...
}
```

## Speicherung des minimalen States

Daten wie `maxTodoId` und `totalPrice` können aus den anderen Daten abgeleitet werden und sollten keinen separaten Eintrag im State haben.

## Selektoren

Selektor = Funktion, die abgeleitete Daten aus einem minimalen State errechnet

Ein Selektor erhält den ganzen State als Argument und gibt abgeleitete Daten zurück

## Beispiele für Selektoren

- `getMaxTodoId`
- `getFilteredTodos`

## Beispiele für Selektoren

```js
const getMaxTodoId = (state) =>
  state.todos.reduce((aggregator, item) =>
    Math.max(aggregator, item.id, 1)
  );
```

```js
const getFilteredTodos = (state) =>
  state.todos.filter((todo) =>
    todo.title
      .toLowerCase()
      .includes(state.ui.filterText.toLowerCase())
  );
```
