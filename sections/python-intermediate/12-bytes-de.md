# Bytes

## Bytes

beim Lesen von Datenträgern oder Empfangen von Daten müssen wir manchmals mit Bytes arbeiten: Abfolgen von Zahlen im Bereich von 0 bis 255 (8 Bit)

Bytes können Bilder, Text, Daten, ... repräsentieren

## Hexadezimalnotation

Bytes werden oft in Hexadezimalnotation statt dezimal geschrieben:

- 1<sub>dec</sub> = 1<sub>hex</sub>
- 9<sub>dec</sub> = 9<sub>hex</sub>
- 10<sub>dec</sub> = a<sub>hex</sub>
- 15<sub>dec</sub> = f<sub>hex</sub>
- 16<sub>dec</sub> = 10<sub>hex</sub>
- 17<sub>dec</sub> = 11<sub>hex</sub>
- 31<sub>dec</sub> = 1f<sub>hex</sub>
- 32<sub>dec</sub> = 20<sub>hex</sub>

## Hexadezimalnotation

hex-Literale in Python:

- 1 = `0x1`
- 9 = `0x9`
- 10 = `0xa`
- 15 = `0xf`
- 16 = `0x10`
- 17 = `0x11`
- 31 = `0x1f`
- 32 = `0x20`

## Erstellen

Erstellen von Bytes aus einer Liste von Zahlen:

```py
a = bytes([0, 64, 112, 160, 255])
b = bytes([0, 0x40, 0x70, 0xa0, 0xff])
```

Erstellen von Bytes aus einem Byte String-Literal:

```py
c = b"\x00\x40\x70\xa0\xff"
```

ASCII-Werte können direkt verwendet werden (`\x40` = "@", `\x70` = "p"):

```py
d = b"\x00@p\xa0\xff"
```

## Bytes

Standard Repräsentation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0]))
```

```py
b'\x00@p\xa0\xff'
```

Wenn möglich werden bytes als ASCII-Zeichen dargestellt; sonst wird ihr Hexadezimalcode angezeigt

## Bytes und Strings

Bytes beinhalten of codierten Text

Wenn wir das Encoding kennen, können wir zwischen Bytes und Strings wechseln:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```
