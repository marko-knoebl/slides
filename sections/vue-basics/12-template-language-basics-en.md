# Template language basics

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
<input v-model="firstName">
```
