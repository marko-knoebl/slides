# Reguläre Ausdrücke

Reguläre Ausdrücke werden verwendet, um einen Teil eines Strings, der einem bestimmten Muster entspricht, zu finden

In Python können reguläre Ausdrücke mittels des Pakets `re` behandelt werden, insbesondere:

- `re.search`
- `re.finditer`

## Reguläre Ausdrücke

Beispiel:

```py
import re

match = re.search(r"[a-z][A-Z]", "abCdE")

if match:
    print("match")
    print(match[0]) # bC
else:
    print("no match")
```

## Mehrfach finden

Beispiel:

```py
import re

match_iter = re.finditer(r"https?://.+?\\.com", website_content)

for match in match_iter:
    print(match[0])
```

## Mehrfach finden

Aufgabe: finde alle URLs in einem HTML-Dokument auf der Festplatte

(Beispieldokument: z.B. Seite https://news.ycombinator.com auf Festplatte speichern)

## Einen Ausdruck und Unterausdrücke finden

```py
times = re.finditer(
    r'(\d?\d):(\d\d)',
    'The course times are 9:30 - 16:30'
)

for time in times:
    print(f"hour: {time[1]}")
    print(f"minute: {time[2]}")
```

## Beispiele

- Gleichungen erkennen und auslesen
- Alle Funktionsdefinitionen in einer Python-Datei finden

## Lösung: Gleichung erkennen

`\A-?\d+x[\+-]\d+y[\+-]\d+z=\d+\Z`
