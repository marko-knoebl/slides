# Props

## Props

Props können via `this.props` ausgelesen werden:

```jsx
class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.completed ? 'DONE: ' : 'TODO: '}
        {this.props.title}
      </div>
    );
  }
}
```
