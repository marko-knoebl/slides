# Custom components

## Custom components

Custom components must be listed in the _components_ entry of the component they are used in:

```js
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
export default {
  components: { TodoItem, AddTodo },
  // ...
};
```

## Custom components

Custom components can typically be written in two ways:

recommended:

<!-- prettier-ignore -->
```html
<TodoItem />
<VBtn>foo</VBtn>
```

alternative:

<!-- prettier-ignore -->
```html
<todo-item />
<v-btn>foo</v-btn>
```
