# Parts of programs

## Parts of programs

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

a statement can span across multiple lines if we use parantheses:

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: _escaping_ newlines with `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

## Expressions

_expression_ = something that produces a value (the value might be `None`)

_expression_ = anything that can be on the right-hand side of an assignment (`=`)

examples of expressions:

- `(7 - 3) * 0.5`
- `(7 - 3)`
- `7`
- `round(3.5)`
- `x == 1`
