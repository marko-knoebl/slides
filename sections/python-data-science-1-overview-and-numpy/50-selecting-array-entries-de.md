# Auswählen von Array-Einträgen

## Auswählen von Array-Einträgen

```py
a1d[0] # 0
a2d[0, 1] # 2
a2d[0, :] # [1, 2, 3]
a2d[:, 0] # [1, 4, 7]
```

bei 2D-Arrays: _[Zeilenindex, Spaltenindex]_

im Allgemeinen:

- letzter Index: zählt richtung rechts
- vorletzter Index (sofern er existiert): zählt richtung unten

## Auswählen von Array-Einträgen

```py
a2d[0, :] # [1, 2, 3]
```

Kurzform:

```py
a2d[0] # [1, 2, 3]
```

## Slices

```py
a1d[:3] # [0, 1, 2]
a1d[3:6] # [3, 4, 5]
a1d[6:] # [6, 7, 8, 9]
a1d[0:8:2] # [0, 2, 4, 6]
```

```py
a1d[3:0:-1] # [3, 2, 1]
a1d[::-1] # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

```py
a2d[1:, :] # [[5, 6, 7], [8, 9, 10]]
```

gleiches funktioniert mit Python-Listen
