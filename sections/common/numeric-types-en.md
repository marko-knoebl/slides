# Numeric types

## Numeric types

- **int**
- **float**
- decimal

## Int

an _int8_ consists of 8 bits and can store 256 different numbers

integers of different bit sizes can represent different amounts of numbers:

- _int8_: 256 numbers (-128 to +127)
- _int16_: 65,536 numbers (-32,768 to +32,767)
- _int32_: 4,294,967,296 numbers
- _int64_: 18,446,744,073,709,551,616 numbers

## Int

an _unsigned integer (uint)_ can only represent non-negative numbers

e.g. _uint8_: 0 to 255

## Float

standardized way of representing real numbers in computers: _IEEE 754_

- **binary floating point numbers**
- decimal floating point numbers

## Float

common floating point types:

- _float32_ (_single_): exact for ~7 decimal digits
- _float64_ (_double_): exact for ~16 decimal digits

## Float

**rounding errors**: some numbers cannot be represented as floating point numbers, they will always be approximations

examples in the decimal system: 1/3, 1/7

examples in the binary system: 1/10, 1/5, 1/3

example: `0.1 + 0.2` evaluates to `0.30000000000000004` when using 64 bit floats

## Float

Special values in IEEE 754:

- `inf` and `-inf` (infinite values)
- `nan` (not-a-number: undefined / unknown value)
