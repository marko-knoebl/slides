# Bestandteile von Programmen

## Bestandteile von Programmen

- Programme
  - Codeblöcke
    - Anweisungen
      - Ausdrücke

## Leere Codeblöcke

_leere_ Codeblöcke mittels des `pass`-Statements:

```py
# TODO: warn the user if path doesn't exist

if not os.path.exists(my_path):
    pass
```

## Anweisungen über mehrere Zeilen

Ein Statement kann über mehrere Zeilen gehen, wenn wir entsprechend Klammern setzen

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: Escapen von Zeilenumbrüchen mit `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

## Ausdrücke (Expressions)

_Ausdruck_ = etwas, das einen Wert ergibt (der Wert könnte `None` sein)

_Ausdruck_ = alles, was auf der rechten Seite einer Zuweisung (`=`) stehen kann

Beispiele für _Ausdrücke_

- `(7 - 3) * 0.5`
- `(7 - 3)`
- `7`
- `round(3.5)`
- `x == 1`
