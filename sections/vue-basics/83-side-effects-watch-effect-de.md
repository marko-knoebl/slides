# Side effects: watchEffect

## watchEffect

Die `watchEffect`-Funktion kann verwendet werden, um _side effects_ auszulösen, wenn die Komponente zum ersten Mal eingebunden wird oder wenn sich Props oder State geändert haben

## watchEffect

Beispiel: Laden von SpaceX-Startdaten beim ersten Einbinden, oder wenn sich `launchNr` geändert hat

```js
function setup() {
  const launchNr = ref(1);
  const loading = ref(true);
  const launchData = reactive({ name: null, date: null });

  watchEffect(async () => {
    loading.value = true;
    const res = await fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr.value}`
    );
    const data = await res.json();
    loading.value = false;
    launchData.name = data.mission_name;
    launchData.date = data.launch_date_utc;
  });

  return { launchNr, launchData };
}
```

## watchEffect

Übungen:

- Laden und Darstellen von mehr Daten
- Hinzufügen eines Ladeindikators

## watchEffect

vollständiger Code für eine SpaceX-Launch-Komponente:

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

Laden aus / Speichern in _localStorage_ (Counter-Komponente):

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
