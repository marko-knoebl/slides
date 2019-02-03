# Context

## Context

Context is a means to provide values from a components to all components that are contained within it - without explicitly passing it through all intermediate levels.

## Context

two main elements:

- `Provider`: provides values
- `Consumer`: uses these values (the consumer may be deep down in the component hierarchy)

## Context

The interface of context can pass both data and event handler

## Context - example: Provider

```jsx
const MyContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <MyContext.Provider
        value={{
          todos: this.state.todos,
          onToggle: this.handleToggle,
        }}>
        <TodoList />
      </MyContext.Provider>
    );
  }
}
```

## Context - example: Consumer

```jsx
class TodoList extends React.Component {
  render() {
    <MyContext.Consumer>
      {context => (
        <div>
          {JSON.stringify(context)}
          <button
            onClick={() => {
              context.onToggle(2);
            }}
          />
        </div>
      )}
    </MyContext.Consumer>;
  }
}
```
