# Structuring elements

## Structuring elements

- h1 - h6
- p

<!-- separator -->

- header
- main
- footer
- aside

<!-- separator -->

- nav

<!-- separator -->

- section
- article

## Headings and Structuring elements

_h1_ elements inside of _nav_, _aside_, _article_ and _section_ have their font sizes adjusted automatically:

```html
<h1>big heading</h1>
<section>
  <h1>medium heading</h1>
  ...
</section>
<section>
  <h1>medium heading</h1>
  <section>
    <h1>small heading</h1>
    <p>...</p>
  </section>
</section>
```
