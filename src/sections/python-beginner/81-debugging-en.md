# Debugging

## Debugging

Breakpoints can be set to pause execution at a certain point.

Possibilities to set breakpoints:

- directly in Python Code via `breakpoint()` (since Python 3.7)
- in VS Code: click next to the line number

Executing in VS Code via _Debug - Start Debugging_ or _F5_.

## Debugging

Continuing manually:

- proceed until the next breakpoint:
  - `c` for _continue_ in the Python debugger
  - _Continue_ in VS Code
- end debugging:
  - `q` for _quit_ in the Python debugger
  - _Stop_ in VS Code

## Debugging

Continuing manually:

- proceed to the next line:
  - `n` for _next_ in the Python debugger
  - _Step Over_ in VS Code
- proceed to the next line - potentially following function calls
  - `s` for _step_ in the Python debugger
  - _Step Into_ in VS Code
- run the current function to its end:
  - `r` for _return_ in the Python debugger
  - _Step Out_ in VS Code

## Debugging

Printing values in the Python debugger via `p`:

```py
p mylist
p mylist[0]
```

Examining values in VS Code:

- local variables in the _variables_ widget
- watch custom expressions in the _watch_ widget
