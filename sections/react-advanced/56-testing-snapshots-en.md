# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - creating tests

with react-testing-library

```jsx
it('matches the snapshot', () => {
  const instance = render(<Slideshow />);
  expect(instance).toMatchSnapshot();
  const slide = instance.getByAltText('slide');
  expect(slide).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```
