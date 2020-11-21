# String formatting

## String formatting

String formatting = placing values in strings

Methods:

```py
greeting = "Hello, " + name + "!"
```

```py
greeting = f"Hello, {name}!"
```

## String formatting: methods

```py
city = 'Vienna'
temperature = 23.7

# rather obsolete
'weather in %s: %f°C' % (city, temperature)

'weather in {0}: {1}°C'.format(city, temperature)
'weather in {}: {}°C'.format(city, temperature)
'weather in {c}: {t}°C'.format(c=city, t=temperature)

f'weather in {city}: {temperature}°C'
```

## Format specification

- `.4f`: four decimal places after the decimal point
- `.4g`: four decimal places

```py
print(f"Pi is {math.pi:.4f}")
# Pi is 3.1416
print(f"Pi is {math.pi:.4g}")
# Pi is 3.142
```

## Format specification

- `>8`: right-aligned (total width 8)
- `^8`: centered
- `<8`: left-aligned

```py
print(f"{first_name:>8}")
print(f"{last_name:>8}")
```

```txt
    John
     Doe
```

## Format specification

combination:

```py
print(f"{menu_item:<12} {price:>5.2}$")
```

```txt
Burger        11.90$
Salad          8.90$
Fries          3.90$
```

## Format specification

further options:

[Python String Format Cookbook by Marcus Kazmierczak](https://mkaz.blog/code/python-string-format-cookbook/)
