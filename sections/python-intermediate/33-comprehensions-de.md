# Comprehension

## List Comprehension

Wichtige Möglichkeit, um Listen basierend auf anderen Listen zu erstellen

In anderen Programmiersprachen oft umgesetzt mittels `map` und `filter` / `grep`

## List Comprehension

_Umwandeln der Einträge_:

```py
names = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
```

Resultat:

```py
["ALICE", "BOB", "CHARLIE"]
```

## List Comprehension

_Filtern_:

```py
amounts = [10, -7, 8, 19, -2]

positive_amounts = [amount for amount in amounts if amount > 0]
```

result:

```py
[10, 8, 19]
```

## List Comprehension

Allgemeine Syntax:

```py
new_list = [new_entry for entry in old_list]

new_list = [new_entry for entry in old_list if condition]
```

## Dictionary Comprehension

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

## Übung

- Beispiel Todo-Liste: Entfernen erledigter Todos
- BankAccount: separate Listen aller Ein- bzw Auszahlungen
