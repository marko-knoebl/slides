# Options API basics

## Options API basics

a component definition object has several specific _props_ / _methods_:

- **data**: reactive component state
- **computed**: derived data
- **methods**: event handlers, ...
- _created_, _mounted_, _updated_, _destroyed_, ...: component lifecycle
- _watch_
- ...

## Example component definition (slideshow component)

```vue
<template>
  <div>
    <button @click="imgId = 0">start</button>
    <button @click="prevImg()">prev</button>
    <img :src="imgUrl" alt="slideshow" />
    <button @click="imgId++">next</button>
  </div>
</template>
```

## Example component definition (slideshow component)

```vue
<script>
export default {
  data: () => ({ imgId: 0 }),
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
</script>
```

## Data, methods, computed, ...

Entries in _data_, _methods_ and _computed_, ... are available via `this.entryname` in the script and via `entryname` in the template

## Data / state

_Data_ or _state_ is initialized via the `data` method

_state_ entries are reactive, meaning Vue can react if they change (and update the component rendering accordingly)

## Methods

_Methods_ are functions associated with a component; they can be called from the template and they can access the state

## Computed

- methods in `computed` can compute derived data
- in general a component should store the _minimal_ state possible (e.g. store the image id, not the entire image URL, don't store redundant data)
- methods in `computed` are automatically called when one of their dependencies changes

## Computed

_How does Vue know when to re-evaluate a computed value?_

Everything inside _data_ is reactive - Vue knows when it's accessed or changed  
During the first creation of a computed value, Vue checks which _data_ entries are accessed - the computed value will re-evaluate whenever on of these dependencies changes
