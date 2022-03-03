# Zusammengesetzte Datentypen: dict, list, tuple

## dict

Dicts (_dictionaries_) sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## dict

Elementzugriff bei dicts

```py
person["first_name"]
```

```py
person["first_name"] = "Jane"
```

## dict

Übung:

Erstelle und verändere Dictionaries, die verschiedene Objekte repräsentieren - z.B.:

- einen Kalendereintrag
- eine Person
- ein Produkt in einem Online-Shop
- ...

## list

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]

products = [
    {"name": "IPhone 12", "price": 949},
    {"name": "Fairphone", "price": 419},
    {"name": "Pixel 5", "price": 799}
]
```

## list

Auslesen von Listenelementen mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[1]
users[-1] # last element
```

## list

Überschreiben von Listenelementen

```py
users[0] = "Andrew"
```

## list

Anhängen von Listenelementen

```py
users.append("Dora")
```

## list

Entfernen des letzen Elements:

```py
users.pop()
```

Entfernen anhand des Index:

```py
users.pop(0)
```

## list

Die Länge einer Liste bestimmen:

```py
len(users)
```

## list

Übungen:

Erstelle und ändere Daten, die aus _dicts_ und _lists_ bestehen und die verschiedene Objekte repräsentieren, z.B.:

- Todos
- Kalendereinträge
- Produkte in einem Online-Shop / Einkaufskorb
- Transaktionen auf einem Bankkonto

## tuple

```py
date = (1973, 10, 23)
```

- Anwendungsbereich: ähnlich wie Dicts
- Verhalten: ähnlich wie Listen

## tuple

Anwendungsbereich: ähnlich wie dict:

```py
point_dict = {"x": 2, "y": 4}
point_tuple = (2, 4)

date_dict = {
  "year": 1973,
  "month": 10,
  "day": 23
}
date_tuple = (1973, 10, 23)
```

Jeder Eintrag in einem Tupel hat eine bestimmte Bedeutung

## tuple

Verhalten: ähnlich wie Listen:

```py
date_tuple[0] # 1973
len(date_tuple) # 3
```

Im Gegensatz zu Listen sind Tupel unveränderlich (kein `.append` / `.pop` / ...)

## Datentypen - Aufgaben

erstelle und ändere Datenstrukturen, die _dicts_, _lists_ und _tuples_ beinhalten
