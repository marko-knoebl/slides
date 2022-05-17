# Debuggen

## Debuggen

Breakpoints (Haltepunkte) können gesetzt werden, um die Ausführung des Codes an diesem Punkt zu pausieren.

Möglichkeiten, um Breakpoints zu setzen:

- in VS Code links neben die Zeilennummer klicken
- direkt in Python mittels `breakpoint()` (seit Python 3.7)

Ausführung in VS Code:

- Symbol "Run and Debug" in der linken Toolbar
- wähle "create a launch.json file" - "Python" - "Python File"

## Debuggen

Manuell weiterspringen:

- bis zum nächsten Breakpoint weiter ausführen:
  - _Continue_ in VS Code
  - `c` für _continue_ im Python Debugger
- debugging beenden:
  - _Stop_ in VS Code
  - `q` für _quit_ im Python Debugger

## Debuggen

Manuell weiterspringen:

- in die nächste Zeile springen:
  - _Step Over_ in VS Code
  - `n` für _next_ im Python Debugger
- in die nächste Zeile springen - und evtuell einem Funktionsaufruf folgen:
  - _Step Into_ in VS Code
  - `s` für _step_ im Python Debugger
- die aktuelle Funktion verlassen:
  - _Step Out_ in VS Code
  - `r` für _return_ im Python Debugger

## Debuggen

Werte in VS Code begutachten:

- direkt unter _variables_
- eigene Ausdrücke angeben unter _watch_

Ausgabe von Werten im Python Debugger mittels `p` für _print_:

```py
p mylist
p mylist[0]
```
