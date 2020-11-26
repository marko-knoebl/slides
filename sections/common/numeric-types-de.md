# Numerische Typen

## Numerische Typen

- **int**
- **float**
- decimal

## Int

ein _int8_ besteht aus 8 bits und kann 2^8 (256) verschiedene Zahlen darstellen

Anzahl an darstellbaren Zahlen:

- _int8_: 256 (-128 bis +127)
- _int16_: 65,536 (-32,768 bis +32,767)
- _int32_: 4,294,967,296
- _int64_: 18,446,744,073,709,551,616

## Int

Ein _unsigned integer (uint)_ kann nur nicht-negative Zahlen repräsentieren

z.B. bei _uint8_: 0 bis 255

## Float

Standard für die Repräsentation reeller Zahlen in Computern: _IEEE 754_

- **binäre Gleitkommazahlen**
- dezimale Gleitkommazahlen

## Float

wichtige Gleitkommatypen:

- _float32_ (_single_): exakt für ~7 Dezimalstellen
- _float64_ (_double_): exakt für ~16 Dezimalstellen

## Float

**Rundungsfehler**: manche Zahlen können nicht als Gleitkommazahlen dargestellt werden, sie sind immer Annäherungen

Beispiele im Dezimalsystem: 1/3, 1/7, π

Beispiele im Binärsystem (_floats_): 1/10, 1/5, 1/3, π

Beispiel: π + π ergibt `6.2`, wenn wir Dezimalzahlen mit 2 Stellen verwenden (besseres Ergebnis wäre `6.3`)

Beispiel: `0.1 + 0.2` ergibt ~ `0.30000000000000004`, wenn wir 64-bit floats verwenden

## Float

manche Operationen führen zu einem Verlust von Genauigkeit - z.B. Subtrahieren von nahe beieinanderliegenden Zahlen

Beispiel:

```
a = 0.001234567 (7 relevante Dezimalstellen)
b = 0.001234321 (7 relevante Dezimalstellen)

c = a - b
c = 0.000000246 (3 relevante Dezimalstellen)
```

## Float

Besondere Werte in IEEE 754:

- `inf` und `-inf` (unendliche Werte)
- `nan` (not-a-number: undefinierter / unbekannter Wert)
