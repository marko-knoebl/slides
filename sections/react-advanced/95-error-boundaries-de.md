# Error Boundaries

## Error Boundaries

Ziel:

Abfangen von Laufzeitfehlern in einer Anwendung, um stattdessen "schöne" Fehlermeldungen für Benutzer zu zeigen

## Error Boundaries

Beispiel: Abfangen von Laufzeitfehlern für die ganze Anwendung

```
<MyErrorBoundary>
  <App />
</MyErrorBoundary>
```

## Error Boundaries

Error Boundary Komponenten können nur als _Klassenkomponenten_ implementiert werden

Error Boundaries fangen folgende Fehler in Unterkomponenten ab:

- Fehler im Rendering-Code / JSX
- Fehler in Lifecycle-Methoden / Effect-Hooks

## Error Boundaries

Implementierung einer `ErrorBoundary`-Komponente:

```tsx
type Props = { children: React.ReactNode };
type State = { hasError: boolean };
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong ...</div>;
    }
    return this.props.children;
  }
}
```
