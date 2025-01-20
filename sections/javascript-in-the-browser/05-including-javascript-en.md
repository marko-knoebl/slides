# Including JavaScript in HTML documents

## Including JavaScript in HTML documents

possibilities:

internally, within the HTML code:

```html
<script type="module">
  console.log('hello world');
</script>
```

externally, in a separate file:

```html
<script src="main.js" type="module"></script>
```

## Meaning of type="module"

"older" version of including JS:

```html
<script></script>
```

"modern" version:

```html
<script type="module"></script>
```

## Meaning of type="module"

effects of using `type="module"`:

- JS is only executed once the HTML document has fully loaded and is ready (JS is execution is "deferred")
- JS is executed in "strict mode" (e.g. forbids undeclared variables)
- import / export functionality is enabled
