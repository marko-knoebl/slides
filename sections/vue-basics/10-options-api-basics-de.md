# Options API Grundlagen

## Options API und composition API

- options API: "traditionelle" Möglichkeit, Vue-Komponenten zu schreiben
- composition API: neue Möglichkeit, eingeführt 2020 mit Vue 3 (inspiriert durch React Hooks)

## Komponentendefinition

allgemeine Komponentendefinition in einer _.vue_-Datei:

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

## Beispiel: Slideshow-Komponente

```html
<div>
  <button @click="imgId = 0">start</button>
  <button @click="prevImg()">previous</button>
  <img :src="imgUrl" alt="slideshow" />
  <button @click="imgId++">next</button>
</div>
```

## Beispiel: Slideshow-Komponente

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

## Options API: Grundlagen

angegebene _Properties_ und _Methoden_ in einer Komponentendefition:

- **name**: wird in den Entwicklerwerkzeugen angezeigt
- **data**: Komponenten-State
- **computed**: vom State abgeleitete Werte
- **methods**: Event Handler, ...
- ...

## Data, methods, computed, ...

Einträge in _data_, _methods_, _computed_, ... sind im Skript als `this.entryname` und im Template als `entryname` verfügbar

## State

State wird mittels der `data`-Methode initialisiert

State-Einträge sind reaktiv: Vue kann reagieren, wenn sie sich ändern (und das Rendering der Komponente entsprechend aktualiseren)

## Methoden

_Methoden_ sind Funktionen, die mit einer Komponente assoziiert sind

- können aus dem Template aufgerufen werden
- können auf den State zugreifen

## Computed

- Funktionen in `computed` können abgeleitete Daten berechnen
- im Allgemeinen sollte eine Komponente den _minimalen_ State speichern (z.B. die _Bild-ID_, nicht die ganze _Bild-URL_, vermeiden redundanter Daten)
- Funktionen in `computed` werden automatisch aufgerufen, wenn sich eine Abhängigkeit ändert

## Computed

Wie weiß Vue, wann Werte in computed aktualisert werden müssen?

Während dem ersten Berechnen eines _computed_-Wertes überprüft Vue, auf welche State-Einträge zugegriffen wird - diese zählen später als Trigger für die Aktualisierung
