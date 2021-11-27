# Komponenten-Events

## Datenfluss

- parent → child: props
- child → parent: events

## Komponenten-Events

events have a name and potentially contain some data ("payload(s)")

## Komponenten-Events

Beispiel: Verarbeiten von Komponenten-Events

```html
<StarsRating
  :value="rating1"
  @update:value="rating1 = $event"
/>
```

```html
<TodoItem
  :todo="todo"
  @delete="deleteTodo($event)"
  @update:completed="changeTodoCompleted($event)"
/>
```

## Komponenten-Events

Auslösen eines Events aus einer Unterkomponente:

```js
this.$emit('eventname', payload);
```

## Komponenten-Events

Beispiel: `StarsRating`:

- Vue 2: https://codesandbox.io/s/stars-rating-8h600
- Vue 3: https://codesandbox.io/s/stars-rating-vue3-sup3p
