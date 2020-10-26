# Datum und Zeit

## Datum und Zeit

Python-Pakete:

- **datetime**: Arbeiten mit Zeiten und Datumsangaben
- **time**: Arbeiten mit Unix-Timestamps, sleep

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

aktuelle Unix-Zeit (Sekunden seit 1970-01-01 00:00:00 UTC)

```py
import time
time.time()
```
