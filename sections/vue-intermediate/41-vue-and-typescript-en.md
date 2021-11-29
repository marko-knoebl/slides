# Vue and TypeScript

## Vue and TypeScript

setting up a Vue TypeScript project:

during project creation with Vue-CLI, choose "Manually select features"

## Vue and TypeScript

```html
<script lang="ts">
  // ...
</script>
```

## Vue and TypeScript

for better type annotations support:

```ts
export default {
  name: 'TodoApp',
  // ...
};
```

becomes:

```ts
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoApp',
  // ...
});
```

## Vue and TypeScript

configuration of _Vetur_ in _VS Code_:

Activate option: _Vetur > Experimental: Template Interpolation Service_

## Vue and TypeScript

declaring the structure of the component state:

```ts
type ComponentState = {
  todos: Array<Todo>;
};
```

```ts
export default defineComponent({
  data(): ComponentState {
    // ...
  },
});
```

## Vue and TypeScript

defining props with _TypeScript_ annotations:

```ts
import { defineComponent, PropType } from 'vue';

// define interface / type "Todo" here

export default defineComponent({
  props: {
    type: [] as PropType<Array<Todo>>,
    required: true,
  },
});
```

## Vue and TypeScript

**Vue 3** only:

defining events and event payloads (inside validator functions):

```ts
export default defineComponent({
  emits: {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    delete(id: number) {
      return true;
    },
    toggle(id: number) {
      return true;
    },
    /* eslint-enable @typescript-eslint/no-unused-vars */
  },
});
```
