# Defining custom components

## Defining custom components

generic compontent definition in a _.vue_ file:

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

## Defining custom components

possible file name patterns for component files:

- **MyComponent.vue** (recommended)
- _my-component.vue_

component names should _always_ be multiple words (to distinguish them from built-in elements)

## Defining custom components

recap: important props in component definitions:

- **name**
- **data**
- **computed**
- **methods**

## Defining custom components

a component may define an interface to interact with its parent component:

- **props**: data that is passed down
- **events**: may be triggered in a child component

## Props in custom components

Example:

```xml
<Rating :stars="3" />
```

<img src="assets/rating.png" style="width: 16em">

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

## Props in custom components

multi-word props should use _mixedCase_ in JavaScript, but _kebab-case_ in templates

<!-- prettier-ignore -->
```js
props: ['greetingText']
```

```html
<WelcomeMessage greeting-text="hi" />
```

## Events in custom components

Custom events have a name and potentially a payload

Events are emitted via:

```js
this.$emit('eventname', payload);
```

```html
<li>
  <span :class="{ todoitem: true, completed: completed }"
    >{{ completed ? 'DONE' : 'TODO' }}: {{ title }}</span
  >
  <button @click="$emit('toggle')">toggle</button>
  <button @click="$emit('delete')">delete</button>
</li>
```
