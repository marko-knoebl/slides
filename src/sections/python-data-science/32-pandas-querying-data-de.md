# Pandas: Daten auslesen

## Daten auslesen (nach Zeilen- und Spaltennummern)

- `df.iloc[5]`: Zeile 5 (gibt `Series`-Objekt zurück)
- `df.iloc[:5]`: erste 5 Zeilen (gibt `DataFrame`-Objekt zurück)
- `df.iloc[10:20]`: Zeilen 10-19
- `df.iloc[5, 1]`: Zeile 5, Spalte 1
- `df.iloc[5, [0, 2]]`: Zeile 5, Spalten 0 und 2

## Daten auslesen (nach Zeilen- und Spaltennamen)

- `df.index`: Zeilennamen
- `df.columns`: Spaltennamen

<!-- -->

- `df.loc["2009-01-02"]`: Zeile mit bestimmtem Indexwert
- `df.loc["2009-01-01" : "2009-01-31"]`: Zeile in bestimmtem Bereich (beide Grenzen inklusive)
- `df.loc[:, "rate"]`: Spalte `"rate"`
- `df["rate"]`: Spalte `"rate"` (Kurzschreibweise)
- `df.rate`: Spalte `"rate"` (kürzere Version - klappt nicht mit Sonderzeichen)
- `df.loc[:, ["rate", "maturity_level"]]`: zwei Spalten
- `df.loc["2009-01-02", "rate"]`: Bestimmte Zeile und Spalte

## Zeilen sortieren

- `df.sort_values(by="rate")`
- `df.loc["2009-01-02" : "2009-12-31"].sort_values(by="rate")`
- `df.sort_index(ascending=False)`

## Zufällig Daten auswählen

- `df.sample()` - ein zufälliger Eintrag)
- `df.sample(5)` - fünf Einträge
- `df.sample(frac=0.1)` - 10% aller Einträge

## Zeilen suchen

Boolesche Indizierung arbeitet bei DataFrames zeilenweise:

- `df[df.rate < 0]`
- `df[df.length < 0] = np.nan`
- `df[df.name == "Iris-setosa"]`
- `df[df.name.isin(["Iris-setosa", "Iris-virginica"])])]`

## Zeilen suchen

SQL Vorlage:

```sql
SELECT * FROM df
WHERE a < b AND b < c
```

Pandas:

```py
df[(df.a < df.b) & (df.b < df.c)]
```

oder

```py
df.query("a < b < c")
```

## Aufgaben (Euribor)

- erster Eintrag
- letzter Eintrag
- letzte 10 Einträge
- Eintrag vom 2.1.2009
- Einträge aus dem Jahr 2009

## Lösungen (Euribor)

- erster Eintrag: `euribor.iloc[0]`
- letzter Eintrag: `euribor.iloc[-1]`
- letzte 10 Einträge: `euribor.iloc[-10:]`
- Eintrag vom 2.1.2009: `euribor.loc["2009-01-02"]`
- Einträge vom 1.1.2009 bis 31.12.2009: `euribor.loc["2009-01-01": "2009-12-31"]`

## Aufgaben (Iris)

- Maximale _petal length_ von _iris setosa_ (ohne `.max`)
