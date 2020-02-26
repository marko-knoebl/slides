# Optimizing performance

## Optimizing performance

topics:

- visualizing updates in the React devtools
- measuring render times in the React devtools
- memoizing components based on props
- memoizing expensive calculations for rendering
- virtual DOM and the _key_ prop

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

## Optimizing performance

what React already does for us:

- hooks (state, reducer, context) will _not_ trigger a re-rendering if their value has not changed

what we can add:

- memoizing component renderings based on their props (so they don't have to be rerendered by their parent if their props don't change)
- memoizing expensive calculations
- providing a key prop for repeating elements
