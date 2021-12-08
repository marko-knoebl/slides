# Component libraries

## Component libraries

for Vue 2:

- vuetify
- bootstrap-vue
- element-ui

for Vue 3:

- _vuetify_ release planned for 2022-02
- _element-plus_ is in beta

## Vuetify 2: setup

add vuetify 2 to a vanilla _Vue CLI_ project:

```bash
npx @vue/cli add vuetify
```

(note: will overwrite _App.vue_ and some other files)

## Vuetify 2: setup

make sure your application in _App.vue_ is enclosed in a `<v-app>` component:

```xml
<template>
  <v-app>
    ...
  </v-app>
</template>
```

## Vuetify 2: components

example component use:

```xml
<v-btn color="primary" type="submit">add</v-btn>
```

```xml
<v-text-field v-model="newTitle" label="new title" />
```

## Vuetify 2: app layout

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

## Vuetify 2: container

_v-container_: responsive container with horizontal margins for spacing

```xml
<v-main>
  <v-container>
    ...
  </v-container>
</v-main>
```

## Vuetify 2: grid system

Vuetify comes with a 12-column grid system (similar to _bootstrap_)

- _v-row_: horizontal container, divided into 12 columns
- _v-col_: contained within _v-row_ elements

## Vuetify 2: grid system

two columns with the same size:

```xml
<v-row>
  <v-col>foo</v-col>
  <v-col>bar</v-col>
</v-row>
```

## Vuetify 2: grid system

configuring the width:

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

- `:cols="12"` - will take up all 12 columns on the smallest screens
- `:sm="6"` - will take up 6 of 12 columns on _small_ or larger screens
- `:md="3"` - will take up 3 columns on _medium_ or larger screens
