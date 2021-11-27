# Inhalte an Komponenten übergeben: Slots

## Inhalte an Komponenten übergeben: Slots

Wir können Komponenten erstellen, die wie folgt verwendet werden können:

```xml
<DialogModal type="error">
  <p>Changes could not be saved</p>
  <button>OK</button>
</DialogModal>
```

## Inhalte an Komponenten übergeben: Slots

Template für `DialogModal`:

```xml
<div :class="{dialog: true, dialogType: type}">
  <slot></slot>
</div>
```
