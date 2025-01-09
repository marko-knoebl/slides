# Custom elements

## Custom elements

Custom elements can be created via JavaScript and used like regular HTML elements

## Custom elements

example: footer that can be used on multiple pages

```js
<my-footer></my-footer>
```

## Custom elements

example: elements that form a navbar

```js
<my-navbar>
  <my-logo></my-logo>
  <my-navbar-item>
    <a href="...">Home</a>
  </my-navbar-item>
  <my-navbar-item>
    <a href="...">About</a>
  </my-navbar-item>
</my-navbar>
```

## Custom elements

example: map view with various configuration options

```js
<my-map-view lat="48.2" lon="17.5" zoom="8"></my-map-view>
```

## Custom elements

example: email list with various events

```js
<my-email-list>
  <my-email from="..." to="..." title="..."></my-email>
  <my-email from="..." to="..." title="..."></my-email>
</my-email-list>
```

## Custom elements: functionalities

relatively easy to implement:

- custom, scoped styling
- passing content to elements (slots)
- passing data via static properties
- custom events (e.g. custom button press, value change, other interactions)

more complicated (without additional tooling):

- components that change over time (e.g. because of changing properties or user interactions)
