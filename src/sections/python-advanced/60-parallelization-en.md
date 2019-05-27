# Parallelization: threads & multiprocessing

## Threads & multiprocessing - why?

Threads:

- dividing resources of a single processor core across various tasks
- waiting for I/O

Multiprocessing:

- using multiple processor cores

Advantages of threads: simpler, variables may be modified directly

## Threads

Python will repeatedly switch between parallel threads so they are seemingly running concurrently  
However at any point in time only one thread is active (Global interpreter lock - GIL)

Two threads may access the same data

## Starting a new thread

```py
from threading import Thread

my_thread = Thread(target=print, args=('hello', ), kwargs={end: ""})
my_thread.start()
```

## Waiting for a thread to end

```py
my_thread.join()
```

## Example: repeated printing

```py
def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()
```

## Exercise: iterations in a thread

We'll write a program that executes two threads (a and b)

The two threads contain loops that count how often they were called

example output:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Locks

Limiting execution to a single thread for some time (e.g. to print multiple things)

Other threads are blocked during this time

## Locks

In the entire program there should only be one lock object

```py
from threading import Lock

l = Lock()
```

## Locks

```py
def print_multiple_locked(text, n):
    with l:
        for i in range(n):
            print(text, end="")
```

## Threads - Example

```py
threads = []

for i in range(1000000000000, 1000000000064):
    prime_thread = Thread(target=print_is_prime, args=(i,))
    prime_thread.start()
    threads.append(prime_thread)

for thread in threads:
    thread.join()
print('all threads finished')
```

## Threads and xkcd download

Task: download xkcd comics 100-109 - once in sequence and once in parallel

## Multiprocessing

## Running functions in separate processes

Multiprocessing enables running a function inside a separate process

```py
from multiprocessing import Process

if __name__ == "__main__":
    p = Process(target=hello)
    p.start()
```

## Running functions in separate processes

```py
from multiprocessing import Process

if __name__ == "__main__":
    processes = []
    for i in range(30, 40):
        p = Process(target=print_fib, args=(i,))
        processes.append(p)
        p.start()
    for process in processes:
        process.join()
```

## Pools

My be used for concurrent processing of multiple data points which is started concurrently

Example: processing all images inside a folder

## Pools

Task: compute fibonacci numbers via map() (1 process)

input: `[0, 1, 2, 3, 4, 5, 6, ...]`

return value: `[0, 1, 1, 2, 3, 5, 8, ...]`

## Pools

```py
with Pool(processes=4) as pool:
    print(pool.map(fib, range(1000, 1100)))
```

## Data exchange: shared memory

Integers and floats (and arrays of these types) may be shared across processes

```py
from multiprocessing import Value, Array, Process

a = Array('i', [2, 4, 13])
p = Process(target=f, args=(a,))
p.start()
...
```

## Other possibilities: Pipes & Queues

_Pipe_: Messaging between processes in two directions - e.g. 1 background process which receives tasks from time to time and idles in the meantime

_Queue_: Messaging in one direction from various producers to various consumers (slower than pipes)
