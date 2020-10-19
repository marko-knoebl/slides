# For-Schleifen

## For-Schleifen mit Entpacken von Tupeln

Wiederholung: Entpacken von Tupeln

```py
time = (23, 45, 0)

hour, minute, second = time
```

## For-Schleifen mit Entpacken von Tupeln

Aufzählen von Listenelementen:

```py
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

Enumerate gibt eine Datenstruktur zurück, die sich wie die folgende Liste verhält:

```py
[(0, 'Alice'), (1, 'Bob'), (2, 'Charlie')]
```

## For-Schleifen mit Entpacken von Tupeln

Auflisten von Ordnerinhalten (inklusive Unterodner) mittels `os.walk`:

```py
import os

for directory, dirs, files in os.walk("C:\\"):
    print(f"{directory} {files}")
```

```
C:\ []
C:\PerfLogs []
C:\Program Files []
C:\ProgramData []
...
```
