# Übungsaufgaben

## Übungsaufgaben

- Programm, das eine Kreditkartennummer / ISBN / IBAN validiert
- Tic-Tac-Toe - Spiel mit textbasierter grafischer Ausgabe
- Primzahlen in einem Intervall
- Fibonacci-Zahlen

Für ISBN / Primzahlen: %-Operator

## Luhn Algorithmus (Prüfziffer)

Der Luhn Algorithm wird verwendet, um Fehler in Identifikationsnummern, wie z.B. Kreditkartennummern, zu vermeiden.

Die letzte Ziffer dieser Nummern ist eine Prüfziffer die sich aus den anderen Ziffern errechnet

Beispiel: Die Nummer `7992739871` hat die Prüfziffer `3`, die vollständige Nummer wäre also `79927398713`

## Luhn Algorithmus (Prüfziffer)

Prüfziffer errechnen:

Beginnend von rechts, ersetze jede zweite Ziffer mittels dieses Schemas:

0 → 0, 1 → 2, 2 → 4, 3 → 6, 4 → 8,  
5 → 1, 6 → 3, 7 → 5, 8 → 7, 9 → 9

(Beispiel: `7992739871` wird zu `7994769772`)

Addiere alle Ziffern

(Beispiel: `7994769772` wird zu 67)

Die Prüfziffer ist jene Ziffer, die auf die nächstgrößere Zehnerzahl fehlt

(im Beispiel: 3)

## ISBN

International Standard Book Number = 10-stellige Buchnummer mit Prüfziffer am Ende

Berechnung der Prüfziffer:

(erste Ziffer + 2 \* zweite Ziffer + 3 \* dritte Ziffer ... + 9 \* neunte Ziffer) modulo 11

Aufgabe:

```py
check_isbn("3826604237") # True oder False
```

## ISBN

```py
isbn = "3826604237"
expected = 7

def check_isbn(isbn, checksum):
    return isbn_checksum(isbn) == checksum


def isbn_checksum(isbn):
    sum = 0
    for i in range(9):
        sum += int(isbn[i]) * (i + 1)

    return sum % 11

print(check_isbn(isbn, expected))
```

## IBAN
