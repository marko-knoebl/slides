# Daten vorbereiten

## Daten vorbereiten

erwünschtes Datenformat für Machine Learning Algorithmen:

- _x_ oder _X_: zweidimensionales Array mit numerischen Eingangsdaten
- _y_ oder _Y_: ein- oder zweidimensionales Array mit numerischen Resultaten

## Daten vorbereiten

Aufgaben:

- "Flattening" von verschachtelten Daten
- Skalieren von Werten
- Fehlende Daten ergänzen
- Kategoriedaten in numerische Daten umwandeln
- Textdaten in numerische Daten umwandeln

## Skalieren von Werten

Welcher dieser beiden Sterne ist der Sonne am ähnlichsten?

```py
# data: radius (km), mass (kg), temparature (K)
sun =    [7.0e7, 2.0e30, 5.8e3]

star_a = [6.5e7, 2.2e30, 5.2e3]
star_b = [7.0e8, 2.1e30, 8.1e3]
```

manche Machine Learning Algorithmen wie z.B. k-Nearest-Neighbor betrachten Absolutwerte.

Hier würde vom Algorithmus im wesentlichen nur die Masse herangezogen werden, da alle anderen Werte im Vergleich verschwindend gering sind.

## Skalieren von Werten

Lösung: Bevor ein Algorithmus angewendet wird, werden die Werte zentriert und skaliert (z.B. so, dass ihr Mittelwert 0 und ihre Standardabweichung 1 sind)

## Fehlende Daten

Fehlende Daten werden häufig in der Form von `NaN`s auftreten.

Mögliche Behandlungen:

- Löschen aller Zeilen, die an irgendeiner Stelle undefinierte Werte enthalten
- Interpolieren der fehlenden Werte durch andere Daten

## Kategorien als Daten

Manchmals: _Kategorien_ als Eingangs- oder Ausgangsdaten - z.B. Land, Berufsgruppe, Messverfahren, ...

Beispiel für Eingangsdaten:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

oftmals als Strings angegeben, Kodierung als Zahlen gewünscht

## Kategorien als Daten

Eingangsdaten:

```py
[["fr", "chrome"], ["uk", "chrome"], ["us", "firefox"]]
```

Kodierung als Ordinale (nicht für alle Algorithmen geeignet, da implizit geordnet (fr=0, uk=1, us=2)):

```py
[[0., 0.], [1., 0.], [2., 1.]]
```

## Kategorien als Daten

Eingangsdaten:

```py
[["fr", "chrome"],
 ["uk", "chrome"],
 ["us", "firefox"]]
```

One-Hot-Kodierung:

```py
# fr?, uk?, us?, chrome?, firefox?
[[1., 0., 0., 1., 0.],
 [0., 1., 0., 1., 0.],
 [0., 0., 1., 0., 1.]]
```

## Textdaten

Beispiel für Preprocessing für Textklassifikation: Zählen von Wörtern
