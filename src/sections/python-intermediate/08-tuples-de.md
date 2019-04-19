# Tupel

## Tupel

Repräsentieren üblicherweise inhomogene Daten vorgegebener Länge - jeder Eintrag hat eine besondere Bedeutung

Erstellung: Einträge werden mit Kommas getrennt, üblicherweise mit runden Klammern umschlossen

Tupel sind nach der Erstellung unveränderlich

## Tupel

Bei Tupeln hat jeder Eintrag eine bestimmte Bedeutung

Alternative Datenstrukturen mit benannten Einträgen:

- `dict`
- `NamedTuple`

## Tupel

```py
empty_tuple = ()
single_value = ('Thomas', )
two_values = ('Thomas', 'Bauer')
two_values = 'Thomas', 'Bauer'
```

## Unpacking (von Tupeln)

```py
# Tauschen von Variablennamen

a, b = b, a
```

## Unpacking (von Tupeln)

```py
# enumerate
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```
