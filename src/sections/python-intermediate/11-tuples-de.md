# Tupel

## Tupel

```py
date = (1973, 10, 23)
```

- Anwendungsbereich: ähnlich wie Dicts
- Verhalten: ähnlich wie Listen

## Tupel

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

## Tupel

Verhalten: ähnlich wie Listen:

```py
date_tuple[0] # 1973
len(date_tuple) # 3
```

Im Gegensatz zu Listen sind Tupel unveränderlich (kein `.append` / `.pop` / ...)

## Tupel

Erstellung: Einträge werden mit Kommas getrennt, üblicherweise mit runden Klammern umschlossen.

```py
empty_tuple = ()
single_value = ('Thomas', )
two_values = ('Thomas', 'Smith')
two_values = 'Thomas', 'Smith'
```

## Unpacking (von Tupeln)

```py
time = (23, 45, 0)

hour, minute, second = time
```

Tauschen von Variablennamen:

```py
a, b = b, a
```
