# Constituent parts of programs

## Constituent parts of programs

- programs
  - code blocks
    - statements
      - expressions

## Empty code blocks

_empty_ code block via the `pass` statement:

```py
# TODO: warn the user if path doesn't exist

if not os.path.exists(my_path):
    pass
```

## Statements across multiple lines

If a statement should encompass multiple lines it is usually written in parentheses:

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: _escaping_ newlines with `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```
