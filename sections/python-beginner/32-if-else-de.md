# If / else

## If / else

Beispiel:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## If / elif / else

```py
if age_seconds < 100000000:
    print("You are less than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are between 100 million and 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are between 1 billion and 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

## Übung: Münzwurf

Simuliere einen zufälligen Münzwurf mittels `random.choice(["heads", "tails"])`

Lasse den Benutzer das Ergebnis raten und sage ihm, ob er richtig lag
