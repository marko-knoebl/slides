# Zahlen

## Zahlen

wichtige Arten von Zahlen in der Informatik:

- _integer_ (Ganzzahlen)
- _floating-point number_ oder _float_ (Kommazahlen im Binärsystem)
- _decimal_ (Kommazahlen im Dezimalsystem)

## Zahlen

In Programmiersprachen werden hauptsächlich _integer_ und _floats_ verwendet

In Datenbanken oder CSV-Dateien kommt auch der Typ _decimal_ vor

## Zahlen

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräsentiert werden, sie werden immer gerundet

z.B.: `1/3`

Im Binärsystem können auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentiert werden - hier gibt es ganz kleine Abweichungen

Beispiel: `0.3 - 0.2` ergibt in Programmiersprachen nicht exakt `0.1`, sondern meist `0.09999999999999998`

## Zahlen

Typen wie _integer_ oder _float_ haben üblicherweise eine vorgegebene Genauigkeit

Beispiele:

- ein _integer_ in _SQL_ kann typischerweise die Werte _-2,147,483,648_ bis _2,147,483,647_ annehmen
- eine Kommazahl im Binärsystem hat in JavaScript und Python ca eine Genauigkeit von 15 Stellen (_64-Bit_ Genauigkeit)
