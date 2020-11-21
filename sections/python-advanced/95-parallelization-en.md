# Parallelization

## Threads and multiprocessing - why?

Threads:

- waiting for input / output (I/O)
- dividing resources of a single processor core across various tasks

Multiprocessing:

- using multiple processor cores

Advantages of threads: simpler, variables may be modified directly

## Threads and multiprocessing

general mechanism: we instruct Python to run multiple functions in separate threads / processes, e.g.:

Run `download_xkcd_comic(i)` in parallel threads for i = 100 - 120

Run `is_prime(i)` in parallel processes for several numbers and collect the boolean results in a list

## Threads and multiprocessing

Threads: Python will repeatedly switch between parallel threads so they are seemingly running concurrently; however at any point in time only one thread is active (Global interpreter lock - GIL)

Multiprocessing: Python will start multiple processes (visible in the task manager); it can be harder to share values between processes

## Python Interfaces

high-level:

- `concurrent.futures.ThreadPoolExecutor`
- `concurrent.futures.ProcessPoolExecutor`

low-level:

- `threading.Thread`
- `multiprocessing.Process`

## ThreadPoolExecutor

```py
from concurrent.futures import ThreadPoolExecutor

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

with ThreadPoolExecutor() as executor:
    executor.submit(print_multiple, ".", 200)
    executor.submit(print_multiple, "o", 200)

print("completed all tasks")
```

## Exercise: iterations in a thread

We'll write a program that executes two threads (a and b). The two threads contain loops that count how often they were called

example output:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Exercise: HTML page download via threads

Exercise: concurrently download Python package documentation pages for these topics:

```json
["os", "sys", "urllib", "pprint", "math", "time"]
```

example URL: <https://docs.python.org/3/library/os.html>

The downloads should be saved to a separate _downloads_ folder

## ProcessPoolExecutor

The program must be a Python file that only "runs" its main part if it is executed directly - and not imported (via `__name__ == "__main__"`)

```py
from concurrent.futures.process import ProcessPoolExecutor

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

if __name__ == "__main__":
    with ProcessPoolExecutor() as executor:
        executor.submit(print_multiple, ".", 200)
        executor.submit(print_multiple, "o", 200)
```

## Map

May be used for parallel processing of multiple input data entries to generate output data

example: process every entry in the list `[2, 3, 4, 5, 6]` and determine wheter they are prime numbers → `[True, True, False, True, False]`

```py
with ProcessPoolExecutor() as executor:
    prime_indicators = executor.map(is_prime, [2, 3, 4, 5, 6])
```

## Map

Exercise: write a function that creates a list of prime numbers in a specific range:

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
