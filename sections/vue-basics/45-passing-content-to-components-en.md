# Passing content to components: slots

## Passing content to components: slots

we may create components that can be used like this:

```xml
<DialogModal type="error">
  <p>Changes could not be saved</p>
  <button>OK</button>
</DialogModal>
```

## Passing content to components: slots

template for `DialogModal`:

```xml
<div :class="{dialog: true, dialogType: type}">
  <slot></slot>
</div>
```
