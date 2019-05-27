# Bytes

## Bytes

= Sequenz von Zahlen zwischen 0 und 255

```py
m = bytes([0, 0x40, 0x70, 0xa0])
```

```
m[1] == 64
m[2] == 160
```

## Bytes

Standard representation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0]))
```

```py
b'\x00@p\xa0'
```

Wenn möglich werden bytes als ASCII-Zeichen dargestellt; sonst wird ihr Hexadezimalcode angezeigt

Das `b` zeigt an dass, es sich um Bytes - und nicht einen gewöhnlichen String - handelt

## Bytes and Strings

Bytes können beliebige Daten beinhalten - oft beinhalten sie aber codierten Text

Wenn wir das Encoding kennen, können wir zwischen Bytes und Strings wechseln:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```

## Umwandlung zwischen Strings und Bytes

Strings können jeden beliebigen Text darstellen (intern üblicherweise mittels Unicode repräsentiert)

Bytes können einen encodierten String enthalten. Dabei gilt:

Für die Bytes von 0-127 ist das Zeichen in jedem Encoding das gleiche.
Für Bytes über 128 können verschiedene Encodings verschiedene Repräsentationen liefern.

## Encodings

```py
'a'.encode('ascii')
# b'a'

'a'.encode('latin-1')
# b'a'

'a'.encode('utf-8')
# b'a'
```

## Encodings

```py
'ä'.encode('ascii')
# UnicodeEncodeError: 'ascii' codec can't encode character ...

'ä'.encode('latin-1')
# b'\xe4'

'ä'.encode('utf-8')
# b'\xc3\xa4'
```
