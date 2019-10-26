# Weitere Datentypen: dict, list

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

## list

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## list

Auslesen von Listenelementen mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[2]
users[-1]
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

## Datentypen - Aufgaben

Wir beginnen mit einem leeren _dictionary_ und erstellen daraus eine Datenstruktur, die z.B. eine Person darstellt

```py
person = {}
```

gewünschtes Resultat z.B.:

```py
{
    "first_name": "Kofi",
    "last_name": "Annan",
    "birth_year": 1938,
    "children": ["Ama", "Kojo"]
}
```

## Datentypen - Aufgaben

erstelle und ändere Datenstrukturen, die folgendes darstellen:

- Daten zu einem Staat der Welt (Einwohnerzahl, Hauptstadt, Nachbarländer)
- eine Liste von erledigten bzw nicht erledigten Todos
- Transaktionen auf einem Bankkonto
