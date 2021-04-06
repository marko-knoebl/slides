# Statistische Grundwerte

## Statistische Grundwerte

```py
countries["area"].describe()
```

```txt
count     3.000000
mean     12.133333
std       4.215843
min       9.600000
25%       9.700000
50%       9.800000
75%      13.400000
max      17.000000
dtype: float64
```

(Siehe nächste Folie für Erklärungen)

## Statistik einer Series

```py
countries["area"].describe()
```

berechnet die folgenden Daten:

- `area.count()`
- `area.mean()`
- `area.std()`
- `area.quantile(0)` oder `area.min()`
- `area.quantile(0.25)`
- `area.quantile(0.5)` oder `area.median()`
- `area.quantile(0.75)`
- `area.quantile(1)` oder `area.max()`

## Statistische Werte

- _std_: _Standardabweichung (Standard deviation)_
- _median_: Hälfte der Werte liegt darüber, Hälfte liegt darunter
- _min_: alle Werte sind größer als das Minimum
- _25%-Quantil_: 25% aller Werte sind kleiner

## Statistiken

Liste einzigartiger Werte:

```py
titanic["pclass"].unique()
```

```txt
[2, 3, 1]
```

Zählen einzelner Vorkommen:

```py
titanic["pclass"].value_counts()
```

```txt
3    491
1    216
2    184
```
