# Props

## Props

Props können via `this.props` ausgelesen werden:

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
