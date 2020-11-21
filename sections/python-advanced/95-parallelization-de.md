# Prallelisierung

## Threads und Multiprocessing - wozu?

Threads:

- Warten auf Input / Output (I/O)
- Resourcen eines Prozessorkerns gerecht auf verschiedene Aufgaben aufteilen

Multiprocessing:

- Mehrere Prozessorkerne nutzen

Vorteil von Threading: einfacher, Variablen können direkt verändert werden

## Threads und Multiprocessing

generella Arbeitsweise: Wir beauftragen Python damit, einzelne Funktionen in separaten Threads / Prozessen auszuführen, z.B.:

Führe `download_xkcd_comic(i)` in parallelen Threads für i = 100 - 120 aus

Führe `is_prime(i)` in parallelen Prozessen für mehrere Zahlen aus und sammle die booleschen Ergebnisse in einer Liste

## Threads und Multiprocessing

Threads: Python schaltet wiederholt zwischen parallel laufenden Threads um, sodass diese scheinbar parallel laufen; in Wahrheit ist aber zu jedem Zeitpunkt nur ein Thread aktiv (Global Interpreter Lock - GIL)

Multiprocessing: Python startet mehrere Prozesse (sichtbar auch im Taskmanager); Teilen von Werten zwischen Prozessen kann schwerer sein

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

## Übung: Iterationen in Threads

Wir schreiben ein Programm, das zwei Threads (a und b) ausführt. Die zwei Threads enthalten Schleifen, welche mitzählen, wie oft sie aufgerufen wurden.

Beispielausgabe:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Übung: HTML-Seiten-Downloader via Threads

Übung: Lade parallel Python Dokumentationsseiten für die folgenden Themen herunter:

```json
["os", "sys", "urllib", "pprint", "math", "time"]
```

Beispiel-URL: <https://docs.python.org/3/library/os.html>

Die Downloads sollten in einem separaten _downloads_-Ordner gespeichert werden

## ProcessPoolExecutor

Programm muss eine Python-Datei sein, die den "Hauptteil" nur dann ausführt, wenn sie selbst direkt ausgeführt - und nicht importiert - wurde (via `__name__ == "__main__"`)

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

Verwendung für die parallele Verarbeitung mehrerer Eingangsdaten zu Ausgangsdaten

Beispiel: Verarbeitung jedes Eintrages in `[2, 3, 4, 5, 6]`, um zu bestimmen, ob die Zahl eine Primzahl ist → `[True, True, False, True, False]`

```py
with ProcessPoolExecutor() as executor:
    prime_indicators = executor.map(is_prime, [2, 3, 4, 5, 6])
```

## Map

Übung: Schreibe eine Funktion, die eine Liste von Primzahlen in einem bestimmten Bereich erstellt:

```py
prime_range(100_000_000_000_000, 100_000_000_000_100)
# [100000000000031, 100000000000067,
#  100000000000097, 100000000000099]
```

Verwende einen `ProcessPoolExecutor` und diese Funktion:

```py
def is_prime(n):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```
