# Prop types and prop validation

## Prop types and prop validation

minimal prop definition of a component:

```js
export default {
  props: ['title', 'completed'],
};
```

## Prop types and prop validation

```js
export default {
  props: {
    title: String,
    completed: Boolean,
  },
};
```

## Prop types and prop validation

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
