# Komponenten-Libraries

## Komponenten-Libraries

für Vue 2:

- vuetify
- bootstrap-vue
- element-ui

für Vue 3:

- _vuetify_-Release geplant für 2022-02
- _element-plus_ ist in der Beta-Phase

## Vuetify 2: Setup

Hinzufügen von Vuetify 2 zu einem neuen _Vue CLI_-Projekt:

```bash
npx @vue/cli add vuetify
```

(Bemerkung: überschreibt _App.vue_ und manche andere Dateien)

## Vuetify 2: Setup

Stelle sicher, dass der ganze Komponentenbaum in _App.vue_ von einer `<v-app>`-Komponente umfasst wird:

```xml
<template>
  <v-app>
    ...
  </v-app>
</template>
```

## Vuetify 2: Komponenten

Beispiel für die Verwendung von Komponenten:

```xml
<v-btn color="primary" type="submit">add</v-btn>
```

```xml
<v-text-field v-model="newTitle" label="new title" />
```

## Vuetify 2: App-Layout

```xml
<v-app>
  <v-app-bar app>
    <v-toolbar-title>Todo</v-toolbar-title>
  </v-app-bar>
  <v-main>
    ...
  </v-main>
  <v-footer app>Todo App by Marko</v-footer>
</v-app>
```

## Vuetify 2: Container

_v-container_: responsive Container mit horizontalen Margins (Abständen)

```xml
<v-main>
  <v-container>
    ...
  </v-container>
</v-main>
```

## Vuetify 2: Grid-System

Vuetify bietet ein Grid-System mit 12 Spalten (ähnlich wie _bootstrap_)

- _v-row_: horizontaler Container, unterteilt in 12 Spalten
- _v-col_: beinhaltet in _v-row_-Elementen

## Vuetify 2: Grid-System

zwei Spalten mit gleicher Breite:

```xml
<v-row>
  <v-col>foo</v-col>
  <v-col>bar</v-col>
</v-row>
```

## Vuetify 2: Grid-System

Konfigurieren der Breite:

```xml
<v-row>
  <v-col :cols="12" :sm="6" :md="3">
    <v-text-field v-model="newTitle" label="new title" />
  </v-col>
  <v-col>
    <v-btn color="primary" type="submit">Add</v-btn>
  </v-col>
</v-row>
```

- `:cols="12"` - nutzt auf den kleinsten Bildschirmen alle 12 Spalten
- `:sm="6"` - nutzt auf Bildschirmen der Mindestgröße _small_ 6 Spalten
- `:md="3"` - nutzt auf Bildschirmen der Mindestgröße _medium_ 3 Spalten
