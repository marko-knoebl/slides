# Plotting

## Plotting

Plotting-Funktionalität von _pandas_ basiert auf _pyplot_ (ähnliche Funktionalität)

## Plotting

Wrapper für _pyplot_-Funktionen, die auf _Series_- und _DataFrame_-Objekten existieren:

- `data.plot()` oder `data.plot.line()`
- `data.plot.bar()`
- `data.plot.scatter()`
- `data.plot.hist()`
- `data.plot.box()`
- `data.plot.pie()`

## Plotting

Interface von Pandas Plotfunktionen:

ähnlich wie in _pyplot_ - nur müssen Daten nicht explizit übergeben werden:

```py
# pyplot
plt.plot(data, color="C0", marker="o", linestyle="--")
```

```py
# pandas
data.plot(color="C0", marker="o", linestyle="--")
```

## Plotting

Für ein _DataFrame_: übergeben einer Liste von Konfigurationen (klappt nur für manche der Optionen):

```py
df.plot(color=["C0", "C1"], style=["o--", "X--"])
```
