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

```py
t = 333.333
f'{t:.4f}°K' # 333.3330°K
f'{t:.4g}°K' # 333.3°K
```

https://mkaz.blog/code/python-string-format-cookbook/
