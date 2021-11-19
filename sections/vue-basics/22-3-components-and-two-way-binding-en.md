# Components and two-way binding

## Components and two-way binding

recap: inputs:

explicit two-way binding for inputs:

```html
<input value="title" @input="title = $event.target.value" />
```

short-hand version for two-way binding:

```html
<input v-model="firstName" />
```

## Components and two-way binding

custom components in Vue 3:

```html
<StarsRating
  :modelValue="rating1"
  @update:modelValue="rating1 = $event"
/>
```

short form:

```html
<StarsRating v-model="rating1" />
```

## Components and two-way binding

custom components in Vue 2:

```html
<StarsRating :value="rating1" @input="rating1 = $event" />
```

short form:

```html
<StarsRating v-model="rating1" />
```
