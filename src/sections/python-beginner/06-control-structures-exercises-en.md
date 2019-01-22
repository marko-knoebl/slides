# control structures - examples

---

## control structures - examples

- leap year
- guess the number with multiple tries
- loop that prints the numbers 1 to 10
- loop that prints the sequence 7, 14, 21, ...
- guess the number with random numbers
- math trainer with random tasks
- babylonian method (for finding the square root)

---

## leap year

example: leap year

- a year is a leap year if it's divisible by for
- exception: it's _not_ a leap year if it's also divisible by 100
- exception from the exception: it _is_ a leap year if it's divisible by 400

Hint: "x is divisible by y" in Python: `x % y == 0`

---

## example: babylonian method

method for computing the square root of a number which was already in use 4000 years ago in mesopotamia

---

## example: babylonian method

```pseudocode
wanted: square root of 12345

n = 12345

Start with two approximations, e.g. a=1 and b=n

repeat the following until a nd b are almost equal:
new a = average of old a and old b
new b = n / a

=> a and b will approach the square root
```

---

## babylonian method: solution

```py
n = 12345
a = 1
b = n
for i in range(10):
    a = (a + b) / 2
    b = n / a
print(b)
```
