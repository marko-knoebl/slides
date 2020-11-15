# Array types

## Array types

Each array can only hold data of one type (e.g. only 64 bit floats or only bytes)

## Array types

Each array has a predefined data type for all entries

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

## Array types

Types may be stated explicitly:

```py
a = np.array([1, 2, 3, 4], dtype='int64')
b = np.array([1, 2, 3, 4], dtype='uint8')
```

If possible, types are converted automatically:

```py
c = a + b
c.dtype # int64
```

## Array types

common types:

- _bool_ / <em>bool\_</em> (stored as 8 bits)
- _int8_, _int16_, _int32_, _int64_
- _uint8_, _uint16_, _uint32_, _uint64_
- _float16_, _float32_, _float64_

## Integer types

An _int8_ can represent 2^8 (256) different numbers

number of representable values for integer types:

- _int8_: 256 (-128 to +127)
- _int16_: 65,536 (-32768 to +32769)
- _int32_: 4,294,967,296
- _int64_: 18,446,744,073,709,551,616

## Integer types

```py
np.array([127, 128, 129], dtype="int8")
```

output (integer overflow):

```py
array([127, -128, -127])
```

## Float types

precision for float types:

- _float16_: ~3 decimal digits
- _float32_: ~7 decimal digits
- _float64_: ~16 decimal digits

floats are also limited in how big or small they can be

## Float types

float16: exact for ~3 decimal digits

```py
np.array([2.71828, 0.271828], dtype="float16")
# array([2.719 , 0.2717])
```

## Float types

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
