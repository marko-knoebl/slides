# Defining custom components

## Defining custom components

possible file name patterns for component files:

- **MyComponent.vue** (recommended)
- _my-component.vue_

component names should _always_ be multiple words (to distinguish them from built-in elements)

## Defining custom components

recap: important props in component definitions:

- **name**
- **data**
- **computed**
- **methods**

## Defining custom components

a component may define an interface to interact with its parent component:

- **props**: data that is passed down
- **events**: may be triggered in a child component
