# Side effects

## Side effects

use cases:

- query an API when a component is first included
- query an API when component state / props change
- persist component state to _localStorage_ when it changes
- start a timer when a component is included
- ...

## Side effects

methods for implementing side effects:

- watchEffect function (composition API only)
- watch function
- lifecycle events

## watchEffect

common practice in the composition API:

- initialization code goes into the `setup` method
- side effects are triggered via the `watchEffect` function

## watchEffect

The `watchEffect` function can be used to perform _side effects_ when a component is mounted for the first time or when its props / state have changed.

It is useful for querying web APIs, setting up timers, persisting data to _localStorage_, ...

## watchEffect

Example: load SpaceX launch data when the component has mounted or when `launchNr` changed

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
  return { launchNr, launchData };
}
```

## watchEffect

Tasks:

- load and display more data
- add a loading indicator

## watchEffect

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

    watchEffect(async () => {
      loading.value = true;
      const res = await fetch(
        `https://api.spacexdata.com/v3/launches/${launchNr.value}`
      );
      const data = await res.json();
      loading.value = false;
      launchData.name = data.mission_name;
      launchData.date = data.launch_date_utc;
      launchData.patch = data.links.mission_patch_small;
    });
    return { launchNr, launchData, loading };
  },
};
</script>
```

## watchEffect

loading from / persisting to _localStorage_ (counter component):

```js
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    // try to load
    const countStored = Number(
      localStorage.getItem('count')
    );
    const count = ref(countStored || 0);
    // persist to localStorage if count changes
    watchEffect(() => {
      localStorage.setItem('count', count.value);
    });
    return { count };
  },
};
```

## Lifecycle events

Options API: Component methods that are called when certain lifecylce events occur:

- `created`
- `mounted`
- `updated`
- `destroyed`
- ...

## Lifecylcle events

Composition API: equivalent functions

- `created` → `setup`
- `mounted` → `onMounted`
- `updated` → `onUpdated`
- `destroyed` → `onUnmounted`
- ...

## Lifecycle events

Fetching data on component mount (options API):

```js
export default {
  // ...
  async created() {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    );
    const todos = await res.json();
    this.todos = todos;
  },
};
```
