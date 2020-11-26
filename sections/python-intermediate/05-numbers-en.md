# Numbers

## Operations with numbers

- Integer division: `10 // 3`
- Remainder: `10 % 3`
- Power: `2 ** 3`

## Underscores in literals

to help us read long numbers:

```py
earth_circumference = 40075017
earth_circumference = 40_075_017
```

## int

integers of arbitrary size

## int

Other numeral systems:

```py
a = 42 # decimal
b = 0b101010 # binary
c = 0o52 # octal
d = 0x2a # hexadecimal
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

**rounding errors**: some numbers cannot be represented as floating point numbers, they will always be approximations

examples in the decimal system: 1/3, 1/7, π

examples in the binary system (i.e. _floats_): 1/10, 1/5, 1/3, π

example: π + π evaluates to `6.2` when using decimal numbers with a precision of 2 (a more exact result would be `6.3`)

example: `0.1 + 0.2` evaluates to ~ `0.30000000000000004` when using 64 bit floats

## float

```py
0.1 + 0.2 == 0.3
# False
```

```py
import math

math.isclose(0.1 + 0.2, 0.3)
# True
```

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

other operations: `-=`, `*=`, ...
