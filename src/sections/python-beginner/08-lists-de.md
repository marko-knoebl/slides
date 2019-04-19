# Listen

## Listen

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

## Erstellen von Listen

Mit eckigen Klammern:

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## Auslesen von Listenelementen

Mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

print(users[0])
print(users[2])
print(users[-1])

print(len(users))
```

## Operationen mit Listen

- Überschreiben: `users[0] = "Andrew"`
- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Ein Element anhand des Index entfernen: `users.pop(2)`
- Länge: `len(users)`
- Zusammenhängen: `primes + users`
- Abfragen, ob Element in Liste: `if "Andrew" in users:`

## Übung: Einkaufsliste

Beispielhafter Programmlauf:

```text
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```
