# Two-way binding in custom components

## Two-way binding in custom components

two-way binding for inputs:

```xml
<input v-model="newTitle" />
```

two-way binding in custom components:

```xml
<star-rating v-model="productRating" />
```

```xml
<todo-item
  v-model:title="todo.title"
  v-model:completed="todo.completed"
/>
```

## Two-way binding in custom components

<!-- FIXME: update:completed does not work as expected -->

implementation of `todo-item`:

- props: `title`, `completed`
- events: `update:title`, `update:completed`

```xml
<li>
  <input
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
  <button
    @click="$emit('update:completed', !completed)"
  >toggle</button>
</li>
```

## Two-way binding in custom components

implementation of `star-rating`:

- prop: `modelValue`
- event: `update:modelValue`
