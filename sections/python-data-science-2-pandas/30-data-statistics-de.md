# Statistische Grundwerte

## Statistische Grundwerte

```py
titanic["Age"].describe()
```

```txt
count    714.000000
mean      29.699118
std       14.526497
min        0.420000
25%       20.125000
50%       28.000000
75%       38.000000
max       80.000000
Name: Age, dtype: float64
```

(Siehe nächste Folie für Erklärungen)

## Statistik einer Series

```py
titanic["Age"].describe()
```

obiges berechnet die folgenden Daten:

- `.count()`
- `.mean()`
- `.std()`
- `.quantile(0)` or `.min()`
- `.quantile(0.25)`
- `.quantile(0.5)` or `.median()`
- `.quantile(0.75)`
- `.quantile(1)` or `.max()`

## Statistische Werte

- _std_: _Standardabweichung (Standard deviation)_
- _median_: Hälfte der Werte liegt darüber, Hälfte liegt darunter
- _min_: alle Werte sind größer als das Minimum
- _25%-Quantil_: 25% aller Werte sind kleiner

## Statistiken

Liste einzigartiger Werte:

```py
titanic["Pclass"].unique()
```

```txt
[2, 3, 1]
```

Zählen einzelner Vorkommen:

```py
titanic["Pclass"].value_counts()
```

```txt
3    491
1    216
2    184
```
