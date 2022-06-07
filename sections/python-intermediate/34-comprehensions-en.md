# Comprehensions

## List comprehensions

_List comprehensions_ enable the creation of lists based on existing lists

In other programming languages this is often done via `map` and `filter`

## List comprehensions

_Transforming each entry_:

```py
names = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
```

result:

```py
["ALICE", "BOB", "CHARLIE"]
```

## List comprehensions

_Filtering_:

```py
amounts = [10, -7, 8, 19, -2]

positive_amounts = [amount for amount in amounts if amount > 0]
```

result:

```py
[10, 8, 19]
```

## List comprehensions

Generic syntax:

```py
new_list = [new_entry for entry in old_list]

new_list = [new_entry for entry in old_list if condition]
```

## Dictionary comprehensions

```py
colors = {
  'red': '#ff0000',
  'green': '#008000',
  'blue': '#0000ff',
}
```

```py
m_colors = { color: colors[color][1:] for color in colors}
```

or

```py
m_colors = {
    name: value[1:] for name, value in colors.items()
}
```

## Exercises

- todo list: add functionality to remove completed entries
- bank account: get separate lists of all withdrawals / deposits
