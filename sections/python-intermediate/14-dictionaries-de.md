# Dictionaries

## Dictionaries

Dictionaries sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## Dictionaries

Elementzugriff bei dictionaries

```py
person["first_name"] # "John"
```

## Dictionaries

Iteration über Dictionaries

```py
for entry in person:
    print(entry)
```

Dies liefert die Schlüssel: `"first_name"`, `"last_name"`, `"nationality"`, `"birth_year"`

Seit Python 3.7 bleiben die Schlüssel garantiert in der ursprünglichen Reihenfolge

## Dictionaries

Iteration über Schlüssel/Werte - Paare:

```py
for key, value in person.items():
    print(f'{key}, {value}')
```

## Operationen auf Dictionaries

```py
d = {0: 'zero', 1: 'one', 2: 'two'}

d[2]
d[2] = 'TWO'
d[3] # KeyError
d.get(3) # None
d.setdefault(2, 'n')
d.setdefault(3, 'n')

d.keys()
d.items()

d1.update(d2)
```

## Gültige Keys

Jedes unveränderliche Objekt kann als Key verwendet werden - meistens sind es Strings

## Übungen

- Vokabeltrainer
- Todo-Liste
