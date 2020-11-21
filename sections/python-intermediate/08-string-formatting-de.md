# String-Formatierung

## String-Formatierung

String-Formatierung = Einsetzen von Werten in Strings

Möglichkeiten:

```py
greeting = "Hello, " + name + "!"
```

```py
greeting = f"Hello, {name}!"
```

## String-Formatierung: Möglichkeiten

```py
city = 'Vienna'
temperature = 23.7

# eher veraltet
'weather in %s: %f°C' % (city, temperature)

'weather in {0}: {1}°C'.format(city, temperature)
'weather in {}: {}°C'.format(city, temperature)
'weather in {c}: {t}°C'.format(c=city, t=temperature)

f'weather in {city}: {temperature}°C'
```

## Formatangaben

- `.4f`: vier Dezimalstellen nach dem Dezimalzeichen
- `.4g`: vier Dezimalstellen

```py
print(f"Pi is {math.pi:.4f}")
# Pi is 3.1416
print(f"Pi is {math.pi:.4g}")
# Pi is 3.142
```

## Formatangaben

- `>8`: rechtsbündig (Gesamtbreite 8)
- `^8`: zentriert
- `<8`: linksbündig

```py
print(f"{first_name:>8}")
print(f"{last_name:>8}")
```

```txt
    John
     Doe
```

## Formatangaben

Kombination:

```py
print(f"{menu_item:<12} {price:>5.2}$")
```

```txt
Burger        11.90$
Salad          8.90$
Fries          3.90$
```

## Formatangaben

weitere Optionen:

[Python String Format Cookbook von Marcus Kazmierczak](https://mkaz.blog/code/python-string-format-cookbook/)
