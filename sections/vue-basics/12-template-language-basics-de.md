# Templatesprache: Grundlagen

## Templatesprache: Grundlagen

- Binden von Inhalten
- Binden von Properties
- Binden von Events
- if / else
- Wiederholen von Elementen
- Two-Way-Binding für Inputs
- Whitespace

## Binden von Inhalten

```html
<div>A year has {{365 * 24}} hours.</div>
```

## Binden von Properties

Kurzform:

```html
<a :href="'https://en.wikipedia.org/wiki/' + topic">
  some article
</a>
```

Langform:

```html
<a v-bind:href="'https://en.wikipedia.org/wiki/' + topic">
  some article
</a>
```

## Class-Property

besondere Syntax für die _class_-Property:

```html
<div :class="{todo: true, completed: isCompleted}">...</div>
```

## Style-Property

besondere Syntax für die _style_-Property:

```html
<div :style="{padding: '8px', margin: '8px'}">...</div>
```

```html
<div :style="{color: completed ? 'grey' : 'black'}">
  ...
</div>
```

## Events binden

Kurzform:

```html
<button @click="alert('hello')">Say Hello</button>
```

Langform:

```html
<button v-on:click="alert('hello')">Say Hello</button>
```

## Events binden

Event-Modifier:

Verhindern des "Default-Verhaltens":

```html
<form @submit.prevent="handleSubmit()">...</form>
```

## Events binden

Zugriff auf das Event-Objekt mittes `$event`:

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

## Wiederholen von Elementen

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{todo.title}}
  </li>
</ul>
```

Jedes wiederholte Element sollte eine lokal eindeutige _key_-Property haben (für Effizienz)

## Two-way Binding für Inputs

Explizites Two-way Binding für Inputs:

```html
<input :value="title" @input="title = $event.target.value" />
```

Kurzform:

```html
<input v-model="firstName" />
```

## Whitespace

Standardmäßig wird Whitespace zwischen Elementen nicht von Vue gerendert

```html
<strong>no</strong> <em>space</em>
```

"Erzwingen" eines Leerzeichens:

```html
<strong>with</strong>{{ " " }}<em>space</em>
```
