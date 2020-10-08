# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshots are simple text representations of rendered content

Snapshot tests are usually used for regression tests

## Snapshot tests

snapshots are usually stored as text files in a location like `__snapshots__/Counter.test.js.snap`

```
exports[`matches the snapshot 1`] = `
<div>
  <div>
    count:
    0
    <button>
      +
    </button>
  </div>
</div>
`;
```

## Creating snapshot tests

with react-testing-library:

```jsx
it('matches the snapshot', () => {
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const li = screen.getByRole('listitem');
  expect(li).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behavior of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```
