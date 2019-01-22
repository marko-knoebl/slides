# NumPy

---

## NumPy

Library zur effizienten Datenverarbeitung

Daten sind in mehrdimensionalen arrays gespeichert, die resourcenschonend umgesetzt sind

???

Erklären: Unterschied: Liste vs Array - warum array weniger resourcen

---

## NumPy

NumPy Arrays vs Python Listen:

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

---

## NumPy

NumPy Arrays vs Python Listen:

```py
list_a = [1, 2] # Python - Liste (mit Verweisen auf andere Integer)
list_b = [3, 4] # Python - Liste

# NumPy - Array - Daten sind hierin enthalten, ohne auf Python-Integer zu verweisen
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

array_a + array_b # sehr schnell (da in C implementiert)
```

---

## NumPy

Kapitel 30

- Rechnen mit Matrizen
- Darstellung von Daten (matplotlib): Graphen, Histogramme

Übungen:

- 10 mio mal Würfeln (mit 10 Würfeln)
- Gleichungslösung (Klassen, doctests, numpy)
- Lagerbestand von Produkten (2d-array) & preisliste (1d-array); gesucht: warenwert pro lager
