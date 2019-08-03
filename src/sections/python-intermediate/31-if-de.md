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

Bei Kriterien für `if` und `while` verwenden wir üblicherweise Ausdrücke, die bei der Auswertung boolesche Werte ergeben.

Wir könnten jedoch auch andere Typen verwenden:

```py
a = 0
if a: ...

name = input("enter your name")
if name: ...

products = []
if products: ...
```

Diese Typen werden in boolesche Werte konvertiert bevor sie als Kriterium herangezogen werden.

## Kriterien bei if

Grundsätzlich können beliebige Werte als Kriterium verwendet werden. Die meisten sind dabei "truthy".

Folgende Werte gelten als "falsy" - ein Aufruf von `bool(...)` liefert `False` zurück:

- `False`
- `0`, `0.0`
- `None`
- leere Sammlungen (`""`, `[]`, `()`, `{}`)
- Vor Python 3.5: Mitternacht (`datetime.time(0, 0, 0)`)

## Kriterien bei if

nicht "pythonic":

```py
name = input("Enter your name:")
if name != "":
    ...
```

"pythonic":

```py
name = input("Enter your name:")
if name:
    ...
```

## if Expression

Ein Ausdruck, der einen von zwei möglichen Werten ergibt - basierend auf einem booleschen Kriterium

```py
size = 'small' if length < 110 else 'big'
```

In anderen Sprachen:

```js
// JavaScript
size = length < 110 ? 'small' : 'big';
```
