# Props

## Props

Props can be accessed via `this.props`:

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
