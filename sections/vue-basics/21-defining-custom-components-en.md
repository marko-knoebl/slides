# Defining custom components

## Defining custom components

generic compontent definition:

```xml
<template>
...
</template>

<script>
...
</script>

<style scoped>
...
</style>
```

## Props in custom components

Example:

```xml
<Rating :stars="3" />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

Example:

```xml
<TodoItem :title="'learn vue'" :completed="false" />
```

## Props in custom components

Any props of a component must be listed in the component config:

```js
export default {
  props: ['title', 'completed'],
};
```

They are then accessible in the same ways as entries in `data`, `methods`, ...

## Events in custom components

Custom events have a name and potentially a payload

Events are emitted via:

```js
this.$emit('eventname', payload);
```

```vue
<template>
  <li @click="$emit('toggle')">
    <span :class="{ todoitem: true, completed: completed }"
      >{{ completed ? 'DONE: ' : 'TODO: '
      }}{{ title }}</span
    >
    <button @click.stop="$emit('delete')">X</button>
  </li>
</template>
```
