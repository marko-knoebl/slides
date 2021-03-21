# Array Typen

## Array Typen

Jedes NumPy Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

## Array Typen

Jedes Array hat einen vorgegebenen Datentyp für alle Einträge

```py
a = np.array([1])
a.dtype # int32
b = np.array([1.0])
b.dtype # float64
c = np.array(['abc'])
c.dtype # <U3
d = np.array([b'abc'])
d.dtype # |S3
```

## Array Typen

Typen können explizit angegeben werden:

```py
a = np.array([1, 2, 3, 4], dtype='int64')
b = np.array([1, 2, 3, 4], dtype='uint8')
```

Typen werden wenn möglich automatisch umgewandelt:

```py
c = a + b
c.dtype # int64
```

## Array Typen

wichtige Typen:

- _bool_ / <em>bool\_</em> (Speicherverbrauch 8 Bit)
- _int8_, _int16_, _int32_, _int64_
- _uint8_, _uint16_, _uint32_, _uint64_
- _float16_, _float32_, _float64_

## Float Typen

Genauigkeit für float Typen:

- _flaot16_: ~3 Dezimalstellen
- _float32_: ~7 Dezimalstellen
- _float64_: ~16 Dezimalstellen

Floats haben ebenfalls einen Minimal- und Maximalwert

## Float Typen

float16: genau für etwa 3 Dezimalstellen

```py
np.array([2.71828, 0.271828], dtype="float16")
# array([2.719 , 0.2717])
```

## Float Typen

float16: overflow

```py
np.array([65450, 65500, 65550], dtype="float16")
# array([65440, 65500, inf])
```

float16: underflow

```py
np.array(
    [3.141e-5, 3.141e-6, 3.141e-7, 3.141e-8, 3.141e-9],
    dtype="float16"
)
# array([3.14e-05, 3.16e-06, 2.98e-07, 5.96e-08, 0.00e+00])
```
