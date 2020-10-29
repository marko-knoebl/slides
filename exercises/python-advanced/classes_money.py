import re


class Money:

    _currency_data = [
        {"code": "USD", "symbol": "$", "rate": 1.0},
        {"code": "EUR", "symbol": "€", "rate": 1.1},
        {"code": "GBP", "symbol": "£", "rate": 1.25},
        {"code": "JPY", "symbol": "¥", "rate": 0.01},
    ]

    @classmethod
    def _get_currency_data(cls, code):
        for currency in cls._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")

    @classmethod
    def from_string(cls, currency_string):
        match = re.search(r"^(\d+)(\.(\d+))?([A-z]+)$", currency_string)
        amount = float(match[1] + (match[2] or ""))
        currency_code = match[4]
        return cls(amount, currency_code)

    def __init__(self, amount, currency="USD"):
        self.amount = amount
        self.currency = currency

    def __str__(self):
        symbol = Money._get_currency_data(self.currency)["symbol"]
        return f"{self.amount:.2f}{symbol}"

    def __repr__(self):
        return f'Money({self.amount:.2f}, "{self.currency}")'

    def to(self, currency):
        from_currency = Money._get_currency_data(self.currency)
        to_currency = Money._get_currency_data(currency)
        amount = self.amount * from_currency["rate"] / to_currency["rate"]
        return Money(amount, currency)

    def __add__(self, other):
        if self.currency != other.currency:
            raise ValueError(
                f"Incompatible currencies: {self.currency} and {other.currency}"
            )
        return Money(self.amount + other.amount, self.currency)

    def __sub__(self, other):
        if self.currency != other.currency:
            raise ValueError(
                f"Incompatible currencies: {self.currency} and {other.currency}"
            )
        return Money(self.amount - other.amount, self.currency)

    def __mul__(self, factor):
        return Money(self.amount * factor)
    
    def __rmul__(self, factor):
        return self * factor

    def __truediv__(self, divisor):
        return Money(self.amount / divisor)

