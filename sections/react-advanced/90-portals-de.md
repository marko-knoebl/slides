# Portale

## Portale

Portale: erlauben es, HTML-Elemente zu rendern, die "außerhalb" der rendernden Komponente liegen

## Portals

Beispiel: `Dialog`-Komponente

Ein `Dialog` kann aus einer beliebigen Komponente gerendert werden - das Rendering wird ein Unterelement des HTML Body-Elements werden

```tsx
function Dialog(props: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div style={dialogStyle}>{props.children}</div>,
    document.querySelector('body') as HTMLBodyElement
  );
}
```
