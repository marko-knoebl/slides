# Continue

## Continue

Schlüsselwort `continue`: kann verwendet werden, um den Rest der _aktuellen_ Iteration einer Schleife zu überspringen

Beispiel:

```py
for name in os.listdir("."):
    if not name.endswith(".txt"):
        # skip .txt files
        continue
    # process other files here
```
