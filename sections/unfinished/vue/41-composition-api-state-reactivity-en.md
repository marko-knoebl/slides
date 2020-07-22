# State and Reactivity

## State and Reactivity

Components may have an internal _state_

The state can be referenced in the template. The view will automatically update if parts of the state are changed.

## State in the composition API

two mechanisms:

- `ref` for primitive / immutable data (strings, numbers, ...)
- `reactive` for objects, arrays, ...

## ref

initializing a ref:

```js
const newTitle = ref('');
```

reading / writing from script code:

```js
const a = newTitle.value;
newTitle.value = 'foo';
```

reading / writing from the template:

```vue
<div>new title is {{newTitle}}</div>
<button @click="newTitle = 'foo'">set to foo</button>
```

## Derived / computed data

We should always store the _minimal_ state (i.e. no redundant data)

## Derived / computed data

example of derived / computed data: number of active todos

```js
const numCompleted = computed(
  () => todos.filter((t) => t.completed).length
);
```

The computation will only re-run if a dependency (`todos`) has changed

## Example: Slideshow

implement a slideshow that shows images like the following:

`https://picsum.photos/200?image=10`

- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index becoming negative

## Example: Slideshow

```vue
<template>
  <div id="app">
    <button @click="imgId = 0">start</button>
    <button @click="prev()" disabled={imgId.value === 0}>prev</button>
    <img :src="imgUrl" alt="slideshow" />
    <button @click="imgId++">next</button>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api';
export default {
  setup() {
    const imgId = ref(0);
    const imgUrl = computed(
      () => `https://picsum.photos/200?image=${imgId.value}`
    );
    const prev = () => {
      if (imgId.value > 0) {
        imgId.value--;
      }
    };
    return { imgId, imgUrl };
  },
};
</script>
```
