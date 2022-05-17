# Debugging

## Debugging

Breakpoints can be set to pause execution at a certain point.

Possibilities to set breakpoints:

- in VS Code: click next to the line number
- directly in Python Code via `breakpoint()` (since Python 3.7)

Executing in VS Code:

- Symbol "Run and Debug" in the left toolbar
- select "create a launch.json file" - "Python" - "Python File"

 via _Debug - Start Debugging_ or _F5_.

## Debugging

Continuing manually:

- proceed until the next breakpoint:
  - _Continue_ in VS Code
  - `c` for _continue_ in the Python debugger
- end debugging:
  - _Stop_ in VS Code
  - `q` for _quit_ in the Python debugger

## Debugging

Continuing manually:

- proceed to the next line:
  - _Step Over_ in VS Code
  - `n` for _next_ in the Python debugger
- proceed to the next line - potentially following function calls
  - _Step Into_ in VS Code
  - `s` for _step_ in the Python debugger
- run the current function to its end:
  - _Step Out_ in VS Code
  - `r` for _return_ in the Python debugger

## Debugging

Examining values in VS Code:

- local variables in the _variables_ widget
- watch custom expressions in the _watch_ widget

Printing values in the Python debugger via `p`:

```py
p mylist
p mylist[0]
```
