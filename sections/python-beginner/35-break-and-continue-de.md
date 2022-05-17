# Break und continue

## Break und continue

Die Schlüsselwörter `continue` und `break` können verwendet werden, um einen Schleifendurchlauf bzw die ganze Schleife zu beenden

Bei verschachtelten Schleifen beziehen sie sich auf die innerste Schleife

## Break und continue

Beispiel:

```py
a = 1

while True:
    a = a * 2
    print(a)
    if (a > 1000):
        break
```
