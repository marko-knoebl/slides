# Prop-Types und Prop-Validierung

## Prop-Types und Prop-Validierung

minimale Prop-Definition einer Komponente:

```js
export default {
  props: ['title', 'completed'],
};
```

## Prop-Types und Prop-Validierung

```js
export default {
  props: {
    title: String,
    completed: Boolean,
  },
};
```

## Prop-Types und Prop-Validierung

```js
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
};
```
