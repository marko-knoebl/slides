# Reguläre Ausdrücke

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
re.search(
    r'\d?\d\.\d?\d\.\d\d\d\d',
    'Heute ist der 23.10.1970!'
)
```

## Einen Ausdruck und Unterausdrücke finden

```py
m = re.search(
    r'(\d?\d)\.(\d?\d)\.(\d\d\d\d)',
    'Heute ist der 23.1.1970!'
)
m[0] # 23.1.1970
m[1] # 23
m[2] # 1
m[3] # 1970
```

## Beispiele

- Lesbarkeitsanalyse (Lesbarkeitsindex)
- Beispiel: Gleichungen erkennen und auslesen
- Beispiel: Alle Funktionsdefinitionen in einer Python-Datei finden

## Lösung: Gleichung erkennen

`\A-?\d+x[\+-]\d+y[\+-]\d+z=\d+\Z`
