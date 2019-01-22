# Textdateien schreiben

---

## Textdateien lesen und schreiben

Viele Dateiformate am PC sind nichts anderes als eine Folge von Textzeichen - zB die Formate `.txt`, `.html`, `.csv` oder `.py`.

Diese können wir in Python einfach als Strings repräsentieren und leicht lesen und schreiben.

---

## Textdatei schreiben

```py
# zum schreiben öffnen (w = write)
# als utf-8-Datei öffnen
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()
```

---

## Textdatei lesen

```py
# standardmodus = zum lesen öffnen
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

---

## Encoding

Empfehlung: Textdateien _immer_ im utf-8 encoding lesen oder schreiben (beste Unterstützung für Sonderzeichen)

---

## Beispiel

- Programm, das Todos vom Benutzer abfragt und in einer Datei abspeichert
