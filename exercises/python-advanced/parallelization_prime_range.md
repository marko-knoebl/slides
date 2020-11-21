# Prime range

write a function that creates a list of prime numbers in a specific range:

```py
prime_range(100_000_000_000_000, 100_000_000_000_100)
# [100000000000031, 100000000000067,
#  100000000000097, 100000000000099]
```

Make use of a `ProcessPoolExecutor` and use this function:

```py
def is_prime(n):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```
