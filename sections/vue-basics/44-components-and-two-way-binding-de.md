# Komponenten und two-way-Binding

## Komponenten und two-way-Binding

Wiederholung: Inputs:

explizites two-way-Binding für Inputs:

```html
<input value="title" @input="title = $event.target.value" />
```

Kurzversion für two-way-Binding:

```html
<input v-model="firstName" />
```

## Komponenten und two-way-Binding

eigene Komponenten in Vue 3:

```html
<StarsRating
  :modelValue="rating1"
  @update:modelValue="rating1 = $event"
/>
```

Kurzform:

```html
<StarsRating v-model="rating1" />
```

## Komponenten und two-way-Binding

eigene Komponenten in Vue 2:

```html
<StarsRating :value="rating1" @input="rating1 = $event" />
```

Kurzform:

```html
<StarsRating v-model="rating1" />
```
