# bool

## bool

True oder False

```py
a = True
if a:
    print('hello')
```

## bool

Frage: Für welche Objekte liefert `bool(x)` false? (Welche Objekte sind "falsy"?)

Anekdote: Mitternacht (`datetime.time(0, 0, 0`) vor Python 3.5

## bool

Intern verhält sich `False` fast wie `0` und `True` fast wie `1`

```py
False + True # 1
```
