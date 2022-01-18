# Strukturierende Elemente

## Strukturierende Elemente

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

## Headings und strukturierende Elemente

_h1_-Elemente innerhalb von _nav_, _aside_, _article_, _section_ haben automatisch angepasste Größen:

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
