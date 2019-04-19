# Bytes

## Bytes

= Sequenz von Zahlen zwischen 0 und 255

```py
m = bytes([104, 101, 108, 108, 111])

# oder:

m = b"hello"
```

## Bytes

Können zum Teil (bis 127) als ASCII-Text dargestellt werden

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
