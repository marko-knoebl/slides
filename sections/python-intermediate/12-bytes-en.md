# Bytes

## Bytes

= Sequence of numbers in the range of 0 to 255

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

Where possible, bytes will be represented by ASCII characters; otherwise their hex code will be shown

The `b` signifies a byte string literal

## Bytes and Strings

Bytes can hold arbitrary data, but often they will hold encoded text

If we know the encoding we can convert between bytes and strings:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```

## Bytes and Strings

Storage media and networks will only handle bytes; in order to read a text file from disk or from the network we need to know / specify the encoding
