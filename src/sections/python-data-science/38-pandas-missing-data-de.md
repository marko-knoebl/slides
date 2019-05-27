# Fehlende Daten

## Fehlende Daten

In den Wechselkursdaten fehlen manche Einträge:

- manche Tage sind nicht eingetragen (Wochenenden)
- manche Tage sind asl `NaN`s eingetragen

## Fehlende Daten

Entfernen aller Zeilen mit fehlenden Daten:

```py
er = er.dropna()
```

Ersetzen aller fehlender Daten mit Nullen:

```py
er = er.fillna(0)
```

Ersetzen aller fehlernder Daten mit Werten der Reihe zuvor:

```py
er = er.fillna(method="backfill")
```

## Fehlende Daten

Daten interpolieren:

```py
er = er.intepolate()
er = er.interpolate(method="spline")
```

Beispiel:

```py
url = 'https://datahub.io/core/interest-rates-gb/r/data.csv'

ir_uk = pd.read_csv(url, index_col="date",
                    parse_dates=True)

ir_uk_weekly = ir_uk.resample('7d').interpolate()
```
