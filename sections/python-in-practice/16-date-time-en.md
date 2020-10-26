# Date and time

## Date and time

Python packages:

- **datetime**: working with times and dates
- **time**: working with Unix timestamps, sleep

## datetime

- `datetime.date`
- `datetime.time`
- `datetime.datetime`

## datetime

```py
a = datetime.time(hour, minute, second, microsecond)
```

```py
b = datetime.datetime(2018, 1, 13)
c = datetime.datetime(2018, 3, 26, 12, 30)

c - b
```

## time.sleep

```py
import time
for i in range(10):
    print(i)
    time.sleep(1)
```

## time.time

current Unix time (seconds since 1970-01-01 00:00:00 UTC)

```py
import time
time.time()
```
