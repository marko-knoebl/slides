# Higher-order components

### functions that modify component definitions

## Higher-order components

confusing terminology:

Higher-order components are **not** components 😲

Higher-order components are functions that can change/enhance a component definition

## Higher-order components

Example:

_React_'s `memo` is a higher-order component

It receives a component and returns a memoized component:

```js
const MemoizedRating = memo(Rating);
```

## Higher-order components

Example:

`connect` from _react-redux_ returns a HOC:

```js
// connector is a HOC
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
```

The resulting HOC receives a regular component and returns a component that is connected to the Redux store:

```js
const RatingContainer = connector(Rating);
```
