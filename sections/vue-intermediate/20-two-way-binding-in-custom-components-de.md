# Two-way Binding in eigenen Komponenten

## Two-way Binding in eigenen Komponenten

(dies gilt für Vue 3)

## Two-way Binding in eigenen Komponenten

two-way binding für inputs:

```xml
<input v-model="newTitle" />
```

Two-way Binding in eigenen Komponenten:

```xml
<star-rating v-model="productRating" />
```

```xml
<todo-item
  v-model:title="todo.title"
  v-model:completed="todo.completed"
/>
```

## Two-way Binding in eigenen Komponenten

Implementierung von `star-rating`:

- prop: `modelValue`
- event: `update:modelValue`

## Two-way Binding in eigenen Komponenten

Implementierung von `todo-item`:

- props: `title`, `completed`
- events: `update:title`, `update:completed`

```xml
<li>
  {{ completed ? "DONE: " : "TODO: " }}
  <input
    :value="title"
    @input="$emit('update:title', $event.target.value)"
    :style="{ border: 'none' }"
  />
  <button @click="$emit('update:completed', !completed)">
    toggle
  </button>
</li>
```
