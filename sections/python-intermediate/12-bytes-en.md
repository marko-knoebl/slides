# Bytes

## Bytes

when reading from storage media or reading network responses we may have to deal with bytes: sequences of integers in the range of 0 to 255 (8 bits)

bytes may represent images, text, data, ...

## Hexadecimal notation

bytes are often written in hexadecimal notation instead of decimal:

- 1<sub>dec</sub> = 1<sub>hex</sub>
- 9<sub>dec</sub> = 9<sub>hex</sub>
- 10<sub>dec</sub> = a<sub>hex</sub>
- 15<sub>dec</sub> = f<sub>hex</sub>
- 16<sub>dec</sub> = 10<sub>hex</sub>
- 17<sub>dec</sub> = 11<sub>hex</sub>
- 31<sub>dec</sub> = 1f<sub>hex</sub>
- 32<sub>dec</sub> = 20<sub>hex</sub>

## Hexadecimal notation

hexadecimal literals in Python:

- 1 = `0x1`
- 9 = `0x9`
- 10 = `0xa`
- 15 = `0xf`
- 16 = `0x10`
- 17 = `0x11`
- 31 = `0x1f`
- 32 = `0x20`

## Creation

creating bytes from a list of numbers:

```py
a = bytes([0, 64, 112, 160, 255])
b = bytes([0, 0x40, 0x70, 0xa0, 0xff])
```

creating bytes from a byte string literal:

```py
c = b"\x00\x40\x70\xa0\xff"
```

ASCII values can be included directly (`\x40` = "@", `\x70` = "p"):

```py
d = b"\x00@p\xa0\xff"
```

## Bytes

Standard representation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0, 0xff]))
```

```py
b'\x00@p\xa0\xff'
```

Where possible, bytes will be represented by ASCII characters; otherwise their hex code will be shown

## Bytes and Strings

Bytes will often hold encoded text

If we know the encoding we can convert between bytes and strings:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```
