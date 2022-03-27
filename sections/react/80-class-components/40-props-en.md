# Props

## Props

Props can be accessed via `this.props`:

```tsx
type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
};

class TodoItem extends Component<TodoItemProps> {
  render() {
    return (
      <li>
        {this.props.todo.completed ? 'DONE: ' : 'TODO: '}
        {this.props.todo.title}
      </li>
    );
  }
}
```
