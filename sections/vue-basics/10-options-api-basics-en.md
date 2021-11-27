# Options API basics

## Options API and composition API

- options API: traditional way to write Vue components
- composition API: new possibility introduced in 2020 with Vue 3 (inspired by React hooks)

## Component definition

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

## Example component definition (slideshow component)

```html
<div>
  <button @click="imgId = 0">start</button>
  <button @click="prevImg()">previous</button>
  <img :src="imgUrl" alt="slideshow" />
  <button @click="imgId++">next</button>
</div>
```

## Example component definition (slideshow component)

```js
export default {
  name: 'MySlideshow',
  data() {
    return { imgId: 0 };
  },
  computed: {
    imgUrl() {
      return `https://picsum.photos/200?image=${this.imgId}`;
    },
  },
  methods: {
    prevImg() {
      if (this.imgId > 0) {
        this.imgId--;
      }
    },
  },
};
```

## Options API basics

a component definition object has several specific _props_ / _methods_:

- **name**: will show up in the developer tools
- **data**: reactive component state
- **computed**: derived data
- **methods**: event handlers, ...
- ...

## Data, methods, computed, ...

Entries in _data_, _methods_ and _computed_, ... are available via `this.entryname` in the script and via `entryname` in the template

## State

Component _state_ is initialized via the `data` method

_state_ entries are reactive, meaning Vue can react if they change (and update the component rendering accordingly)

## Methods

_Methods_ are functions associated with a component

- can be called from the template
- can access the state

## Computed

- methods in `computed` can compute derived data
- in general a component should store the _minimal_ state possible (e.g. store the image id, not the entire image URL, avoid redundant data)
- methods in `computed` are automatically called when one of their dependencies changes

## Computed

_How does Vue know when to re-evaluate a computed value?_

During the first computation Vue tracks which state entries are accessed - these will subsequently act as triggers for updates
