# Two-way binding

## Exercise: Rating component

create a component that works like this:

```html
<Rating
  :stars="productRating"
  @update:stars="productRating=$event"
></Rating>
```

i.e. it receives a _stars_ property and it can emit an event named _update:stars_ if it was changed by the user

## Exercise: Rating component

short form for binding _stars_ and _update:stars_ at the same time:

```html
<Rating v-model:stars="productRating"></Rating>
```

## Exercise: Rating component

```vue
<template>
  <div>
    <span
      v-for="i in [1, 2, 3, 4, 5]"
      :key="i"
      @click="onClick(i)"
      >{{ i <= stars ? '★' : '☆' }}</span
    >
  </div>
</template>

<script>
export default {
  props: ['stars'],
  setup(props, context) {
    const onClick = (i) => {
      context.emit('update:stars', i);
    };
    return { onClick };
  },
};
</script>
```
