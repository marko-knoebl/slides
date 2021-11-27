# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Component events

events have a name and potentially contain some data ("payload(s)")

## Component events

example: handling component events

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

## Component events

Events are emitted from a child component via:

```js
this.$emit('eventname', payload);
```

## Component events

example: `StarsRating`:

- Vue 2: https://codesandbox.io/s/stars-rating-8h600
- Vue 3: https://codesandbox.io/s/stars-rating-vue3-sup3p
