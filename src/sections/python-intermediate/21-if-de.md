# if

## if

wir erinnern uns:

```py
if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## Kriterien bei if

Bei Kriterien für `if` und `while` verwenden wir üblicherweise Ausdrücke mit Vergleichsoperatoren wie `==`, `!=` oder `<`.

"""Es sind aber auch andere Konstrukte möglich:"""

```py
a = 0
if a: ...
name = "Steven"
if name: ...
products = []
if products
```

## Kriterien bei if

Grundsätzlich können beliebige Werte als Kriterium verwendet werden. Die meisten sind dabei "truthy".

Folgende Werte gelten als "falsy":

- `False`
- `0`, `0.0`
- `None`
- leere Sammlungen (`""`, `[]`, `()`, `{}`)
- Vor Python 3.5: Mitternacht (`datetime.time(0, 0, 0)`)

```py
const name = input("Enter your name:")
# not: if len(name) > 0:
if name:
    ...
```

## if-Expression

```py
age = 'young' if age_seconds < 1000000000 else 'old'
```
