# Error boundaries

## Error boundaries

goal:

catch errors in a deployed application and show "nice" error messages to users

## Error boundaries

example: catch runtime errors in the entire application

```
<MyErrorBoundary>
  <App />
</MyErrorBoundary>
```

## Error boundaries

Error boundary components can only be implemented as _class components_

Error boundaries _will_ catch these errors of subcomponents:

- errors in the rendering code / JSX
- errors inside lifecycle methods / effect hooks

## Error boundaries

implementation of an `ErrorBoundary` component:

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
