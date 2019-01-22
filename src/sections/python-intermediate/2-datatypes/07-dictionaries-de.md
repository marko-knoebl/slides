# Dictionaries

---

## Dictionaries

Dictionaries sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John"
    "last_name": "Doe"
    "nationality": "Canada"
    "birth_year": 1980
}
```

---

## Dictionaries

Elementezugriff bei dictionaries

```py
person["first_name"] # "John"
```

---

## Dictionaries

Iteration über Dictionaries

```py
for entry in person:
    print(entry)

# liefert: first_name, last_name, nationality, birth_year
```

---

## Dictionaries

Iteration über Schlüssel/Werte - Paare:

```py
for key, value in person.items():
    print(f'{key}, {value}')
```

---

## Operationen auf Dictionaries

```py
d = {0: 'null', 1: 'eins', 2: 'zwei'}

d[2]
d[2] = 'ZWEI'
d[3] # KeyError
d.get(3, None)

d.keys()
d.items()

d1.update(d2)
```

---

## Beispiel: Vokabelprogramm

???

(Einlesen von (JSON-)Datei)
random.choice
dictionary

---

## Beispiel: Todo-Liste

---

## Dictionaries

Was kann als key verwendet werden?
