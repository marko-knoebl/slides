# Three steps to update a component

## Three steps to update a component

1. build a virtual DOM representation of the new rendering ("render phase")
2. create a diff between the new and old virtual DOM ("reconciliation phase")
3. apply any changes in the virtual DOM to the real DOM ("commit phase")

## Three steps to update a component

speeding up the three steps:

- memoizing costly computations (_useMemo_) - may speed up step 1
- preventing unneeded component rerenderings - skips all steps if nothing changed
- using the _key_ property - helps with finding the minimal diff
