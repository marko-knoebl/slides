# Terminal Grundlagen

## Terminal Grundlagen

_Terminal_ = Textinterface für einen Computer

andere Namen: _Konsole_, _Shell_, _Kommandozeile_

Varianten:

- cmd (Windows)
- **powershell** (Windows)
- **bash** und Varianten davon (Unix, Linux, MacOS, [Windows])

## Grundlegende Befehle

- aktuellen Pfad ausgeben: `pwd` (print working directory)
- aktuellen Ordnerinhalt ausgeben: `ls`
- aktuellen Pfad wechseln: `cd`

## Besondere Pfade

diese Pfadbezeichner haben besondere Bedeutungen:

- `.` = aktueller Pfad
- `..` = übergeordneter Pfad
- `~` = persönlicher Ordner des Benutzers

Beispiele für Befehle im Terminal:

```cmd
pwd
ls .
cd ..
ls .
cd ~
pwd
ls .
```

## Befehle ausführen

Befehle und Programme können über ihren Namen ausgeführt werden, z.B. `ls`, `explorer`, `git`, `node`, `python`, ...

## Befehle ausführen: Argumente

Nach dem Befehlsnamen / Programmnamen können wir Argumente anreihen

Positionale Argumente:

- `ls .`
- `mv a.txt archive/a.txt`

## Befehle ausführen: Argumente

Optionen:

- `ls . -a` (Bash)
- `ls . -Force` (Powershell)
- `node -h` (kurzer Optionsname via einzelnem `-`)
- `node --help` (langer Optionsname via `--`)

Benannte Argumente via Optionen (getrennt via Leerzeichen oder Gleichheitszeichen):

- `node --title=playground`
- `node --eval "console.log(1);"`
- `git commit -m "test_message"`

## Befehlsverlauf

_Pfeil nach oben_ (und _Pfeil nach unten_) navigieren durch bisherige Befehle

_Ctrl_ + _R_ durchsucht bisherige Befehle

## Autovervollständigung

Autovervollständigung mittels _Tab_-Taste:

- _powershell_ und _cmd_: Vervollständigen mit erster gefundener Möglichkeit
- _bash_: Vervollständigt eindeutige Befehle, listet ansonsten Möglichkeiten auf

## Autovervollständigung

in _powershell_:

`exp` + `tab` → `Expand-Archive`

`expl` + `tab` → `explorer.exe`

## Autovervollständigung

in _bash_ (hier unter Windows):

`a` + `tab` + `tab` → Listet alle mit _a_ beginnenden Befehle auf (verlassen langer Listen mittels _Q_)

- `cd ~/` + `tab` + `tab` (alle Möglichkeiten im persönlichen Verzeichnis)
- `cd ~/d` + `tab` + `tab` (alle Möglichkeiten, die mit _d_ beginnen)
- `cd ~/de` + `tab` (_~/Desktop/_)
