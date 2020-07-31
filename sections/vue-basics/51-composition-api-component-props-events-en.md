# Composition API: props and events

## Props and events

The `setup` method receives two arguments: `props` and `context`

Example: rating component:

```js
export default {
  props: ['stars'],
  setup(props, context) {
    const ariaLabel = computed(
      () => `${props.stars} out of 5 stars`
    );
    const onStarClick = (id) => {
      context.emit('change', id);
    };
    return { ariaLabel, onStarClick };
  },
};
```
