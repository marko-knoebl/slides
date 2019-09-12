# Fortgeschrittene objektorientierte Programmierung

## Fortgeschrittene objektorientierte Programmierung

Beispiel: Klasse _Length_

```py
a = Length(130, "cm")
a.value # 130
a.unit # cm
a.unit = "in"
a.value # 51.18
str(a) # 51.18in
b = Length.from_string("12cm")
2 * b # 24cm
b + a # 142cm
```
