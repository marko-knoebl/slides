# Querying APIs with watchEffect

## Querying APIs with watchEffect

The _watchEffect_ function can be used to perform actions when a component is mounted for the first time or when its props / state have changed.

It is useful for querying web APIs.

## Querying APIs with watchEffect

Example: load SpaceX launch data when component mounted or when `launchNr` changed

```js
function setup() {
  const launchNr = ref(1);
  const launchData = reactive({ name: null, date: null });

  watchEffect(() => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        launchData.name = data.mission_name;
        launchData.date = data.launch_date_utc;
      });
  });
  return { name, date };
}
```

## Querying APIs with watchEffect

Tasks:

- load and display more data
- add a loading indicator

## Querying APIs with watchEffect

complete code for SpaceX launch component:

```vue
<template>
  <article>
    <button @click="launchNr--">prev</button>
    <button @click="launchNr++">next</button>
    <div v-if="loading">loading...</div>
    <div v-else>
      <h1>{{ launchData.name }}</h1>
      <p>{{ launchData.date }}</p>
      <img :src="launchData.patch" :key="Math.random()" />
    </div>
  </article>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';
export default {
  setup() {
    const launchNr = ref(1);
    const loading = ref(true);
    const launchData = reactive({
      name: null,
      date: null,
      patch: '',
    });

    watchEffect(() => {
      loading.value = true;
      fetch(
        `https://api.spacexdata.com/v3/launches/${launchNr.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          loading.value = false;
          launchData.name = data.mission_name;
          launchData.date = data.launch_date_utc;
          launchData.patch = data.links.mission_patch_small;
        });
    });
    return { launchNr, launchData, loading };
  },
};
</script>
```
