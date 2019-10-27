# Debuggen

## Debuggen

Breakpoints (Haltepunkte) können gesetzt werden, um die Ausführung des Codes an diesem Punkt zu pausieren.

Möglichkeiten, um Breakpoints zu setzen:

- direkt in Python mittels `breakpoint()` (seit Python 3.7)
- in VS Code links neben die Zeilennummer klicken

Ausführung in VS Code via _Debug - Start Debugging_ oder _F5_.

## Debuggen

Manuell weiterspringen:

- bis zum nächsten Breakpoint weiter ausführen:
  - `c` für _continue_ im Python Debugger
  - _Continue_ in VS Code
- debugging beenden:
  - `q` für _quit_ im Python Debugger
  - _Stop_ in VS Code

## Debuggen

Manuell weiterspringen:

- in die nächste Zeile springen: 
  - `n` für _next_ im Python Debugger
  - _Step Over_ in VS Code
- in die nächste Zeile springen - und evtuell einem Funktionsaufruf folgen:
  - `s` für _step_ im Python Debugger
  - _Step Into_ in VS Code
- die aktuelle Funktion verlassen:
  - `r` für _return_ im Python Debugger
  - _Step Out_ in VS Code

## Debuggen

Ausgabe von Werten im Python Debugger mittels `p` für _print_:

```py
p mylist
p mylist[0]
```

Werte in VS Code begutachten:

- direkt unter _variables_
- eigene Ausdrücke angeben unter _watch_
