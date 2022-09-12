# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

The interface of context can pass both data and event handlers

## Context

an application can have many different context types, e.g.:

- `ThemeContext`
- `LanguageContext`
- `UserContext`
- `TodosContext`
- ...

## Context

a component higher up in the component tree may **provide** a context

a component lower down may **consume** a context

(downwards dataflow, but with skipped intermediate levels)

## Context

possible structure with "stateful providers":

- _LanguageProvider_ (manages / provides language state)
  - _ThemeProvider_ (manages / provides theme state)
    - _TodosProvider_
      - _App_
        - _TodoList_
          - _TodoItem_
            - ...

## Provider components

distinction of providers:

- "pure provider" - receives data via props, does not have internal state
- "stateful provider" - has internal state, uses a "pure provider" to make its state available
  - may be defined "manually"
  - may be defined via the _constate_ library
