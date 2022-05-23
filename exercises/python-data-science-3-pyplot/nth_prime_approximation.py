import matplotlib.pyplot as plt
import numpy as np
import math

def is_prime(n):
    """Determine whether a given number is a prime number."""
    if n <= 1:
        return False
    if n == 2:
        return True
    for i in range(2, math.ceil(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

primes = []
approx = []

x_range = np.arange(1, 101)

p = 0

for x in x_range:
    while not is_prime(p):
        p += 1
    primes.append(p)
    p += 1

for x in x_range:
    approx.append(x * math.log(x))

plt.plot(x_range, primes, "r.")
plt.plot(x_range, approx)

plt.show()
