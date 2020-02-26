# React devtools and performance

## React devtools and performance

react devtools functionality:

- visually highlight components whenever they update
- profiler that supports recording and profiling a session

## React devtools and performance

highlightling components whenever they update:

In the React devtools settings: select _Highlight updates when components render._

Components that render get a colored border (color varies based on render frequency)

## React devtools and performance

recording and profiling a session:

In the browser tools' "Profiler" tab:

- click the record button to start
- interact with the React application normally (each user action is recorded via a "_commit_")
- click the record button to stop

## React devtools and performance

exploring the profile data:

Each user interaction (e.g. click, button press) causes a so-called _commit_

Commits are shown as bars in the top right corner

Details of a commit can be seen by clicking on it

## React devtools and performance

Numbers in a commit detail:

```
TodoApp (3ms of 109ms)
```

this means:

- it took 109 milliseconds to render the entire app (note: will be faster in production)
- most time (106 ms) was spent rendering subcomponents
- the contents that are specific to _TodoApp_ took 3 ms

## React devtools and performance

colors in a commit detail:

Color scale from _green_ to _yellow_ shows how much time a component took to render - compared to its siblings

Grey-striped components did not rerender
