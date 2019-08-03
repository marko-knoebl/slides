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

# liefert: first_name, last_name, nationality, birth_year
```

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
d[2] = 'ZWEI'
d[3] # KeyError
d.get(3) # None
d.setdefault(2, 'n')
d.setdefault(3, 'n')

d.keys()
d.items()

d1.update(d2)
```

## Dictionaries

Was kann als key verwendet werden?

## Beispiel: Vokabelprogramm

- Einlesen von (JSON-)Datei
- Modellieren mit dictionaries
- zufälliges Auswählen eines Eintrags

## Beispiel: Todo-Liste
