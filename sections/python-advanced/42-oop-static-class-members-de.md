# OOP: Statische Attribute und Methoden

## Statische Attribute und Methoden

_Statische Attribute_ und _Statische Methoden_ sind mit einer Klasse assoziiert, jedoch nicht mit einer spezifischen Instanz davon

Beispiel anhand der _datetime_-Klasse:

- `datetime.today()`
- `datetime.fromisoformat()`
- `datetime.resolution`

## Klassenattribute (statische Attribute)

_Klassenattribute_ sind Attribute, die nur auf der Klasse (nicht auf jeder Instanz) definiert sind - alle Instanzen teilen sich die Attribute.

## Klassenattribute (statische Attribute)

Beispiel `Money`-Klasse: `_currency_data` kann von allen Instanzen verwendet werden.

```py
class Money:
    _currency_data = [
        {"code": "USD", "symbol": "$", "rate": 1.0},
        {"code": "EUR", "symbol": "€", "rate": 1.1},
        {"code": "GBP", "symbol": "£", "rate": 1.25},
        {"code": "JPY", "symbol": "¥", "rate": 0.01},
    ]

    def __init__(self, ...):
        ...
```

## Statische Methoden

Muss eine Methode nicht auf die Daten einer bestimmten Instanz zugreifen, so kann sie als statische Methode deklariert werden.

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

Beachte: Bei einer statischen Methode wird als erster Parameter nicht `self` übergeben - die Referenz auf die Instanz ist nicht vorhanden.

## Statische Methoden

Statische Methoden haben zwei wichtige Anwendungsbereiche:

- Erstellen von Instanzen: z.B. `Money.from_string("23.40EUR")`
- Bündeln von Hilfsfunktionen mit einer Klasse: z.B. `_get_currency_data`

## Klassenmethoden

Um den folgenden Code für Vererbung portabler zu machen, wäre es sinnvoll, den Klassennamen (`Money`) nicht in der Methodendefinition zu erwähnen:

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

## Klassenmethoden

Klassenmethoden sind besondere statische Methoden, die die Möglichkeit bieten, unter einem allgemeinen Namen (üblicherweise `cls`) auf die Klasse zu verweisen:

```py
class Money:
    ...

    @classmethod
    def _get_currency_data(cls, code):
        for currency in cls._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```
