# Functions: Exercises

## Exercises

- function that verifies a credit card number / ISBN / IBAN
- prime numbers within an interval
- fibonacci numbers

For ISBN / primes: use the % operator

## Luhn algorithm (checksum)

The Luhn algorithm is used to prevent errors in identification numbers, such as credit card numbers

The last digit of these numbers is a check digit which is computed from the other digits

Example: the sequence `7992739871` has a check digit of `3`, so the entire number would be `79927398713`

## Luhn algorithm

Computing the check digit:

starting from the right, replace every _other_ digit based on this schema:

0 → 0, 1 → 2, 2 → 4, 3 → 6, 4 → 8,  
5 → 1, 6 → 3, 7 → 5, 8 → 7, 9 → 9

(For example `7992739871` will become `7994769772`)

sum all digits

(For example `7994769772` will sum to 67)

the check digit is the number that's missing from the next full 10

(in this case, it's 3)

## ISBN

International Standard Book Number = 10-digit book number with a check digit at its end

computing the check digit:

(1st digit + 2 \* 2nd digit + 3 \* 3rd digit ... + 9 \* 9th digit) modulo 11

task:

```py
check_isbn("3826604237") # True or False
```

## ISBN

```py
isbn = "3826604237"
expected = 7

def check_isbn(isbn, checksum):
    return isbn_checksum(isbn) == checksum


def isbn_checksum(isbn):
    sum = 0
    for i in range(9):
        sum += int(isbn[i]) * (i + 1)

    return sum % 11

print(check_isbn(isbn, expected))
```

## IBAN
