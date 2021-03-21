# Mehr als ein Weg

## Mehr als ein Weg

aus dem _Zen of Python_:

> There should be one-- and preferably only one --obvious way to do it.

diese Philosophie wird bei _NumPy_ oft _nicht_ angewendet

## Mehr als ein Weg

Beispiel: Transponieren eines Arrays

```py
a2d.T
a2d.transpose()
np.transpose(a2d)
```

## NumPy Funktionen vs Array-Methoden

viele Operationen sind auf zwei Arten verfügbar:

- Funktionen im `numpy`-Paket
- Methoden der `array`-Klasse

wir werden meist Funktionen verwenden

## NumPy Funktionen vs Array-Methoden

verfügbar als Funktionen und Methoden:

```py
np.max(a2d)
a2d.max()
np.round(a2d)
a2d.round()
```

nur als Funktionen verfügbar:

```py
np.sin(a2d)
np.exp(a2d)
np.expand_dims(a2d, 2)
```
