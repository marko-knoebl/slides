# Template language basics

## Template language basics

- binding content
- binding properties
- binding events
- if / else
- repeating elements
- two-way binding for inputs
- whitespace

## Binding content

```html
<div>A year has {{365 * 24}} hours.</div>
```

## Binding properties

short form:

```html
<a :href="'https://en.wikipedia.org/wiki/' + topic">
  some article
</a>
```

long form:

```html
<a v-bind:href="'https://en.wikipedia.org/wiki/' + topic">
  some article
</a>
```

## Class property

special syntax for the _class_ property:

```html
<div :class="{todo: true, completed: isCompleted}">...</div>
```

## Style property

special syntax for the _style_ property:

```html
<div :style="{padding: '8px', margin: '8px'}">...</div>
```

```html
<div :style="{color: completed ? 'grey' : 'black'}">
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
<form @submit.prevent="handleSubmit()">...</form>
```

## Binding events

accessing the event object via `$event`:

```html
<button @click="handleClick($event)">handle event</button>
```

## If / else

```html
<div v-if="request.loading">Loading...</div>
<div v-else-if="request.error">Error while loading</div>
<div v-else>
  <h1>Results</h1>
  ...
</div>
```

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

explicit two-way binding for inputs:

```html
<input :value="title" @input="title = $event.target.value" />
```

short-hand version for two-way binding:

```html
<input v-model="firstName" />
```

## Whitespace

By default, whitespace between elements will not be rendered by Vue

```html
<strong>no</strong> <em>space</em>
```

forcing a space:

```html
<strong>with</strong>{{ " " }}<em>space</em>
```
