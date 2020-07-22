# Using custom components

## Using custom components

Custom components must be listed in the _components_ entry of the component they are used in

```js
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
export default {
  components: { TodoItem, AddTodo },
  // ...
};
```

Custom components are commonly defined in camel case (e.g. `TodoItem`) - they can then be used in kebab case (e.g. `todo-item`)

## Component libraries

(for Vue 2)

- vuetify: components in _material design_
- bootstrap-vue
- element-ui
- ...
