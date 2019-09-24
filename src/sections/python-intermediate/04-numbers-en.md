# Numbers

## int

integers of arbitrary size

## int

Other numeral systems:

```py
a = 42
b = 0o52
c = 0x2a
d = 0b101010
```

```py
e = int('101010', 2)
```

## float

64 bit float

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
```

## float

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers, they will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

example: `0.3 - 0.2` evaluates to `0.09999999999999998`

In general a 64-bit float will be exact for about 15 decimal places.

## float

_IEEE 754_: standardized floating point arithmetic

Python mostly acts as defined in the standard

deviation from the standard: in some cases Python will throw exceptions where the standard produces a result - e.g. `1.0/0.0`

Special numbers in IEEE 754:

- `inf` and `-inf` (infinite values)
- `nan` (not-a-number: undefined / unknown value)

## complex

```py
a = 2 + 3j
```

## Augmented assignment

For binary operators there are so-called _augmented assignments_:

```py
a = a + 1
```

short form (augmented assignment):

```py
a += 1
```

## Operations with numbers

- Integer division: `10 // 3`
- Remainder: `10 % 3`
- Power: `2 ** 3`
