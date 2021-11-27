# Composition API: Props und Events

## Props und Events

Die `setup`-Methode erhält zwei Argumente: `props` und `context`

Beispiel: Rating-Komponente:

```js
export default {
  name: 'StarsRating',
  props: ['value'],
  setup(props, context) {
    const ariaLabel = computed(
      () => `${props.value} out of 5 stars`
    );
    const onStarClick = (id) => {
      context.emit('change', id);
    };
    return { ariaLabel, onStarClick };
  },
};
```
