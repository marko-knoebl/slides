# Prallelisierung: Threads & Multiprocessing

## Threads & Multiprocessing - wozu?

Threads:

- Resourcen eines Prozessorkerns gerecht auf verschiedene Aufgaben aufteilen
- Warten auf I/O

Multiprocessing:

- Mehrere Prozessorkerne nutzen

Vorteil von Threading: einfacher, Variablen können direkt verändert werden

## Threads

Python schaltet wiederholt zwischen parallel laufenden Threads um, sodass diese scheinbar parallel laufen.  
In Wahrheit ist aber zu jedem Zeitpunkt nur ein Thread aktiv (Global Interpreter Lock - GIL)

Zwei Threads können auf die gleichen Daten zugreifen

## neuen Thread starten

```py
from threading import Thread

my_thread = Thread(target=print, args=('hello', ), kwargs={end: ""})
my_thread.start()
```

## auf beendigung des Threads warten

```py
my_thread.join()
```

## Beispiel: wiederholtes printen

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

## Übung: Iterationen in Thread

Wir schreiben ein Programm, das zwei Threads (a und b) ausführt. Die zwei Threads enthalten Schleifen, welche mitzählen, wie oft sie aufgerufen wurden.

Beispielausgabe:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Locks

für bestimmte Zeit auf einen Thread beschränken (zB um mehrere Dinge zu printen) - andere Threads sind währenddessen blockiert

## Locks

Im ganzen Programm sollte es nur 1 Lock-Objekt geben

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

## Threads - Beispiel

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

## Threads und xkcd-Download

Aufgabe: die xkcd-Comics 100-109 herunterladen - einmal sequenziell und einmal parallel

## Multiprocessing

## Funktionen in eigenen Prozessen starten

Python ermöglicht es, eine Funktion jeweils in einem eigenen Prozess laufen zu lassen.

```py
from multiprocessing import Process

if __name__ == "__main__":
    p = Process(target=hello)
    p.start()
```

## Funktionen in eigenen Prozessen starten

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

Für gleichartige Verarbeitung mehrerer Daten, die gleichzeitig gestartet wird.

Beispiel: Alle Bilder in einem Verzeichnis verarbeiten

## Aufgabe: Fibonaccizahlen mit map() (1 Prozess)

Ausgangswert: `[0, 1, 2, 3, 4, 5, 6, ...]`

Rückgabewert: `[0, 1, 1, 2, 3, 5, 8, ...]`

## Pools

```py
with Pool(processes=4) as pool:
    print(pool.map(fib, range(1000, 1100)))
```

## Datenaustausch: shared memory

integer und floats (und arrays davon) über mehrere Prozesse verteilen

```py
from multiprocessing import Value, Array, Process

a = Array('i', [2, 4, 13])
p = Process(target=f, args=(a,))
p.start()
...
```

## Weitere Möglichkeiten: Pipes & Queues

Pipe: Messaging zwischen Prozessen in zwei Richtungen - zB Hintergrundprozess, der immer wieder etwas zu tun bekommen und dazwischen im Ruhezustand ist

Queue: Messaging in eine Richtung von verschiedenen Producern zu verschiedenen Consumern (langsamer als Pipes)
