# Comprehension

## List Comprehension

Wichtige Möglichkeit, um Listen basierend auf anderen Listen zu erstellen

In anderen Programmiersprachen oft umgesetzt mittels `map` und `filter` / `grep`

## List Comprehension

```py
names = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
["ALICE", "BOB", "CHARLIE"]
```

## List Comprehension

```py
amounts = [10, -7, 8, 19, -2]

negative_amounts = [amount for amount in amounts if amount < 0]
```

## List Comprehension

Allgemeine Syntax:

```py
new_list = [new_entry for entry in old_list]

new_list = [new_entry for entry in old_list if condition]
```

## List Comprehension

Beispiel Todo-Liste: Entfernen erledigter Todos

## Dictionary Comprehension

```py
colors: {
  'red': '#ff0000',
  'blue': '#0000ff',
  'green': '#008000'
}

m_colors = { color: colors[color][1:] for color in colors}
```
