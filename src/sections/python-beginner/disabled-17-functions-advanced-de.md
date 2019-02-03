class: center, middle

# Standardparameter

Parameter können einen Standardwert haben. Dieser wird verwendet, wenn kein expliziter anderer Wert übergeben wird.

Beispiel:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hallo") # HALLO!
shout("hi", ".") # HI.
```

# Schlüsselwortparameter

# beliebige Anzahl von Parametern
