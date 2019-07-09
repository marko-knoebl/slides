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

Standard Repräsentation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0]))
```

```py
b'\x00@p\xa0'
```

Wenn möglich werden bytes als ASCII-Zeichen dargestellt; sonst wird ihr Hexadezimalcode angezeigt

Das `b` zeigt an dass, es sich um Bytes - und nicht einen gewöhnlichen String - handelt

## Bytes und Strings

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

## Bytes und Strings

Speichermedien und Netzwerke verarbeiten nur Bytes. Um Text von einem Speichermedium oder Netzwerk zu lesen müssen wir das Encoding kennen bzw spezifizieren.
