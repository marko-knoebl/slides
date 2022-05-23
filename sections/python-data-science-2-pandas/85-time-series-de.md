# Zeitreihen

## Zeitreihen

Datentypen:

- _time stamp_: ein Bestimmter Zeitpunkt (z.B. 1955-11-12, 10:04)
- _time period_: eine Bestimmte Periode (z.B. November 1955)
- _time delta_: eine Zeitdifferenz (z.B. 1 Stunde)

## Zeitreihen

erstellen von Datumsfolgen (als Index-Objekte):

```py
every_day = pd.date_range("2000-01-01", "2000-12-31")
last_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="M"
)
first_of_each_month = pd.date_range(
    "2000-01-01", "2000-12-31", freq="MS"
)
every_10_days = pd.date_range(
    "2000-01-01", "2000-12-31", freq="10D"
)
```

## Zeitreihen

Konvertieren zwischen _time stamps_ und _time periods_:

- `.to_period()`
- `.to_timestamp()`

(funktioniert auf Index-Objekten und auf Series / DataFrame - Objekten)

## Resampling

Resampling: Berechnen abgeleiteter Daten für andere Zeitintervalle

Beispiel: basierend auf **monatlichen** Daten:

- Berechnen **jährlicher** Daten (z.B. Durchschnitt aller Monate eines Jahres)
- Berechnen **täglicher** Daten (z.B. via Interpolation)

## Resampling

```py
sp500.resample("Y").mean()
sp500.resample("D").interpolate()
```

## Zeitreihen

Überprüfen, ob der erste Tag jedes Monats in den S&P 500 Daten vorhanden ist:

```py
sp500.index.equals(
    pd.date_range(
        sp500.index[0], sp500.index[-1], freq="MS"
    )
)
# True
```
