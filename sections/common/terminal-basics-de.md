# Terminal: Grundlagen

## Terminal: Grundlagen

Terminal = Textinterface für einen Computer

Varianten:

- cmd (Windows)
- powershell (Windows)
- bash (Unix, Linux, MacOS)

## Grundegende Befehle

- aktuellen Pfad ausgeben: `pwd` (print working directory)
- aktuellen Ordnerinhalt ausgeben: `dir` (cmd) oder `ls`
- aktuellen Pfad wechseln: `cd`

## Besondere Pfade

diese Pfadbezeichner haben besondere Bedeutungen:

- `.` = aktueller Pfad
- `..` = übergeordneter Pfad

Beispiele für Befehle im Terminal:

```cmd
pwd
ls .
cd ..
ls .
```

## Programme ausführen

Programme können über ihren Namen ausgeführt werden, z.B. `explorer`, `git`, `node`, ...

## Argumente

Nach dem Programmnamen / Befehlsnamen können wir Argumente anreihen:

Positionale Argumente:

- `ls .`
- `mv a.txt archive/a.txt`

Optionen:

- `ls . -l`
- `ls . -t`
- `node -h` (kurzer Optionsname via einzelnem `-`)
- `node --help` (langer Optionsname via `--`)

Benannte Argumente via Optionen (getrennt via Leerzeichen oder Gleichheitszeichen):

- `node --title=playground`
- `node --eval "console.log(1);"`
- `git commit -m "test_message"`
