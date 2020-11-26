# OOP: Static attributes and methods

## Static attributes and methods

_static attributes_ and _static methods_ are associated with a class, but not with any specific instance of it

example: _static attributes_ and _static methods_ of the _datetime_ class:

- `datetime.today()`
- `datetime.fromisoformat()`
- `datetime.resolution`

## Class attributes (static attributes)

_Class attributes_ are attributes that are only defined on the class (not on each instance) - all instances share these attributes.

## Class attributes (static attributes)

Example: `Money` class with a shared class attribute called `_currency_data`

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

## Static methods

If a method does not have to access data of a specific instance it can be declared as a static Method.

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

Note: A static method does not receive `self` as its first parameter - there is no reference to a specific instance.

## Static methods

There are two main applications for static methods:

- Creation of instances: e.g. `Money.from_string("23.40EUR")`
- Bundling of helper functions into a class: e.g. `_get_currency_data`

## Class methods

If we want to make the followng code more portable (especially for inheritance) it would make sense not to mention the class name (`Money`) in the method definition:

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

## Class methods

Class methods are special static methods which enable referencing the class by a generic name (conventionally `cls`):

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
