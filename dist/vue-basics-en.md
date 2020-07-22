# Vue.js

## What is Vue?

one of the 3 big JavaScript UI frameworks (besides React, Angular)

## Basics of modern JavaScript UI frameworks

- declarative
- component-based

## Declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

## Component-based

- "custom" HTML tags
- data flow via props and events
- usually unidirectional data flow (from parent to child)

## Example: data model and data flow in a todo app

<img src="assets/todo-components-datamodel.svg" type="text/svg" style="width: 300px"/>

## What makes Vue special?

- simpler than others
- _may_ be used without a build step

## History of Vue

- initial release in 2014
- planned for 2020: Vue 3 (new composition API)

# Vue basics

## Options API and composition API

- options API: traditional way to write Vue components
- composition API: new possibility introduced in 2020 with Vue 3.0 (inspired by React hooks)

## Online editor

- <https://codesandbox.io> (Vue 2)
- <https://codesandbox.io/s/vue-3-ce53j> (Vue 3)

## Example component definition (counter component)

template:

```vue
<template>
  <div>
    count: {{ count }}
    <button @click="count++">increment</button>
  </div>
</template>
```

## Example component definition (counter component)

behavior (options API):

```vue
<script>
export default {
  // data / state initialization function
  data: () => ({ count: 0 }),
};
</script>
```

## Example component definition (simple todo app)

```vue
<template>
  <div>
    <h1>Todo</h1>
    <form @submit.prevent="addTodo()">
      <input v-model="newTitle" />
      <button role="submit">add</button>
    </form>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
```

## Example component definition (simple todo app)

```vue
<script>
export default {
  data: () => ({
    newTitle: '',
    todos: [
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'taxes', completed: true },
    ],
  }),
  methods: {
    addTodo() {
      this.todos.push({
        id: Math.max(0, ...this.todos.map((t) => t.id)) + 1,
        title: this.newTitle,
        completed: false,
      });
      this.newTitle = '';
    },
  },
};
</script>
```

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
  <div id="app">
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

## Data, methods, computed

Entries in _data_, _methods_ and _computed_ are available via `this.entryname` in the script and via `entryname` in the template

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

# Template language

## Template language basics

- binding content
- binding properties
- binding events
- if / else if / else
- repeating elements
- two-way binding for inputs

## Binding content

```html
<div>A year has {{365 * 24}} hours.</div>
```

## Binding properties

short form:

```html
<a :href="'https://en.wikipedia.org/wiki/' + topic"
  >some article</a
>
```

long form:

```html
<a v-bind:href="'https://en.wikipedia.org/wiki/' + topic"
  >some article</a
>
```

## Class property

the _class_ property supports special syntax:

```html
<div :class="{todo: true, completed: isCompleted}">
  ...
</div>
```

## Binding events

short form:

```html
<button @click="alert('hello')">Say Hello</button>
```

long form:

```html
<button v-on:click="alert('hello')">Say Hello</button>
```

## Binding events

event modifiers:

preventing default:

```html
<form @submit.prevent="handleSubmit()">
  ...
</form>
```

stopping event propagation / bubbling:

```html
<span @click.stop="...">...</span>
```

## Binding events

accessing the event object via `$event`:

```html
<button @click="handleClick($event)">handle event</button>
```

## If / else if / else

```html
<div v-if="loggedIn">
  Welcome
</div>
<div v-else>
  Please log in!
</div>
```

also available: `v-else-if`

## Repeating elements

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{todo.title}}
  </li>
</ul>
```

Each repeated element should have a locally unique _key_ property (for efficiency)

## Two-way binding for inputs

```html
<input v-model="count" />
```

# Exercise: todo list

## Exercise: todo list

Create a todo list application with the following functionality:

- displaying completed and incomplete todos
- toggling the completed state of a todo
- deleting a todo
- adding a new todo from a form
- displaying the total number of completed and incomplete todos

# Using custom components

## Using custom components

Custom components must be listed in the _components_ entry of the component they are used in

```js
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
export default {
  components: { TodoItem, AddTodo },
  // ...
};
```

Custom components are commonly defined in camel case (e.g. `TodoItem`) - they can then be used in kebab case (e.g. `todo-item`)

## Component libraries

(for Vue 2)

- vuetify: components in _material design_
- bootstrap-vue
- element-ui
- ...

# Defining custom components

## Defining custom components

generic compontent definition:

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

## Props in custom components

Example:

```xml
<Rating :stars="3" />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

Example:

```xml
<TodoItem :title="'learn vue'" :completed="false" />
```

## Props in custom components

Any props of a component must be listed in the component config:

```js
export default {
  props: ['title', 'completed'],
};
```

They are then accessible in the same ways as entries in `data`, `methods`, ...

## Events in custom components

Custom events have a name and potentially a payload

Events are emitted via:

```js
this.$emit('eventname', payload);
```

```vue
<template>
  <li @click="$emit('toggle')">
    <span :class="{ todoitem: true, completed: completed }"
      >{{ completed ? 'DONE: ' : 'TODO: '
      }}{{ title }}</span
    >
    <button @click.stop="$emit('delete')">X</button>
  </li>
</template>
```

# Lifecycle hooks

## Lifecycle hooks

Component methods that are called when certain lifecylce events occur:

- `created`
- `mounted`
- `updated`
- `destroyed`
- ...

## Lifecycle hooks

alternatives:

- **watchEffect** function (composition API)
- _watch_ function

## Fetching data on component mount

```js
export default {
  // ...
  created() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => (this.todos = todos));
  },
};
```

# Vue CLI

## Vue CLI

a tool for initializing a Vue project

## Developing with node.js and npm

- node.js: JS runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

## Vue CLI

install and run:

```bash
npm install -g @vue/cli

vue create my-app
```

or run directly (without installing):

```bash
npx @vue/cli create my-app
```

## Vue CLI

Creates a simple Vue app which can be used as a starting point

many aspects can be set up automatically:

- webpack and babel for building
- local development server
- linter
- TypeScript support
- testing
- CSS tooling

## Default project structure

- _public/index.html_, _src/main.js_: entry points
- _src/App.vue_: defines the App component
- _node_modules_: dependencies

## Development server and build

inside the project directory:

- `npm run serve`: starts the local development server
- `npm run build`: creates a build (for deployment)
