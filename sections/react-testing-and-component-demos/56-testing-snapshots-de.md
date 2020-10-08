# Snapshot Tests

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshots sind einfache Textrepräsentationen von gerenderten Inhalten

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests

Snapshots werden üblicherweise als Textdateien z.B. unter `__snapshots__/Counter.test.js.snap` gespeichert

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

## Snapshot Tests erstellen

mit react-testing-library:

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

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft, können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```
