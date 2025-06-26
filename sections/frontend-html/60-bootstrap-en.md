# Bootstrap

## Bootstrap

CSS framework for creating websites - we don't have to write (much) CSS

## Using Bootstrap

- without any additional work: default style of elements like `body`, `h1`, `button`, ... changes
- for more functionality: set the `class` attribute

## Bootstrap: container

Container = basic building block for bootstrap, top-level division of a document

- `<div class="container-fluid">`: container that is as wide as the page
- `<div class="container">`: container that "locks" on specific sizes

## Bootstrap: column layout (simple)

using classes `container`, `row`, `col`

```html
<div class="row">
  <div class="col">one</div>
  <div class="col">two</div>
  <div class="col">three</div>
</div>
<div class="row">
  <div class="col">four</div>
  <div class="col">five</div>
</div>
```

## Bootstrap: margins

Margins are spacings between elements

Bootstrap classes for margins:

- `ml-1`: small left margin
- `mt-4`: big top margin
- `my-2`: medium margin in y directions (top and bottom)
- `mx-auto`: automatic horizontal margin (centered)

## Bootstrap: elements and components

e.g.:

- button
- card
- carousel
- navbar
- ...

## Bootstrap project: restaurant website

We'll create a simple website - e.g. for a restaurant

contents:

- navigation menu
- table with opening hours
- form for reservations
- slideshow with images
