# Terminal basics

## Terminal basics

_terminal_ = text interface to a computer

other names: _console_, _shell_, _command line_

variants:

- cmd (Windows)
- **powershell** (Windows)
- **bash** (Unix, Linux, MacOS, [Windows])

## Basic commands in bash and powershell

- get the current directory: `pwd` (print working directory)
- list directory content: `ls`
- change current directory: `cd`

## Special paths

These paths have special meanings:

- `.` = current directory
- `..` = parent directory
- `~` = user's personal directory

example terminal commands:

```cmd
pwd
ls .
cd ..
ls .
cd ~
pwd
ls .
```

## Running commands

Commands and programs may be run by typing their name, e.g. `ls`, `explorer`, `git`, `node`, `python`, ...

## Running commands: arguments

After the command name / program name we can add some arguments

positional arguments:

- `ls .`
- `mv a.txt archive/a.txt`

## Running commands: arguments

options:

- `ls . -a` (bash)
- `ls . -Force` (powershell)
- `node -h` (short option name with single dash)
- `node --help` (long option name with double dash)

named arguments via options (separated via a space or equal sign):

- `node --title=playground`
- `node --eval "console.log(1);"`
- `git commit -m "test_message"`

## Command history

_up arrow_ (and _down arrow_) to go through previous commands

_ctrl_ + _R_ to search through previous commands

## Auto completion

auto completion via _tab_ key:

- _powershell_ and _cmd_: complete with first found option
- _bash_: completes unambiguous commands, lists options otherwise

## Auto completion

in _powershell_:

`exp` + `tab` → `Expand-Archive`

`expl` + `tab` → `explorer.exe`

## Auto completion

in _bash_ (under Windows):

`a` + `tab` + `tab` → lists all commands starting with _a_ (exit long lists via _Q_)

- `cd ~/` + `tab` + `tab` (all possibilites in personal folder)
- `cd ~/d` + `tab` + `tab` (all possibilities starting with _d_)
- `cd ~/de` + `tab` (_~/Desktop/_)
