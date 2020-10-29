# Money class

Implement a class named `Money` that has the following behavior:

```py
a = Money(3.10, "USD")
print(a.currency) # USD
print(a.amount) # 3.1
print(a) # 3.10$
print(a.to("EUR")) # 2.82€
print(a + a) # 6.20$
print(3 * a) # 9.30$
print(a / 3) # 1.03$
b = Money.from_string("2.10EUR")
print(b) # 2.10€
```
