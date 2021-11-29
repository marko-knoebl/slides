# Vue und TypeScript

## Vue und TypeScript

Einrichtung eines Vue-TypeScript-Projekts:

während der Projekterstellung mit Vue-CLI, wähle "Manually select features"

## Vue und TypeScript

```html
<script lang="ts">
  // ...
</script>
```

## Vue und TypeScript

in Komponentendefnitionen:

```ts
export default {
  name: 'TodoApp',
  // ...
};
```

wird zu:

```ts
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoApp',
  // ...
});
```

## Vue und TypeScript

Konfiguration von _Vetur_ in _VS Code_:

Aktiviere die Option: _Vetur > Experimental: Template Interpolation Service_

## Vue und TypeScript

Deklarieren der Struktur von Komponenten-State:

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

## Vue und TypeScript

Definieren von Props mit _TypeScript_-Annotationen:

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

## Vue und TypeScript

nur **Vue 3**:

Definieren von Events und Event-Payloads (in Validierungsfunktionen):

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
