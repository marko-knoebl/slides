# Portals

## Portals

Portals: allow rendering of HTML elements "outside" the component they are created in

## Portals

example: `Dialog` component

A `Dialog` can be rendered from any component - its rendering will become a child of the HTML body element

```tsx
function Dialog(props: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div style={dialogStyle}>{props.children}</div>,
    document.querySelector('body') as HTMLBodyElement
  );
}
```
