# Basic terminal usage

## Basic terminal usage

terminal = text interface to a computer

variants:

- cmd (Windows)
- powershell (Windows)
- bash (Unix, Linux, MacOS)

## Basic commands

- get the current directory: `pwd` (print working directory)
- get the directory content: `dir` (cmd) or `ls`
- change current directory: `cd`

## Special paths

These paths have special meanings:

- `.` = current directory
- `..` = parent direcotry

example terminal commands:

```cmd
pwd
ls .
cd ..
ls .
```

## Running programs

Programs may be run by typing their name, e.g. `explorer`, `git`, `node`, ...

## Arguments

After the program name / command name we can add some arguments:

positional arguments:

- `ls .`
- `mv a.txt archive/a.txt`

options:

- `ls . -l`
- `ls . -t`
- `node -h` (short option name with single dash)
- `node --help` (long option name with double dash)

named arguments via options (separated via a space or equal sign):

- `node --title=playground`
- `node --eval "console.log(1);"`
- `git commit -m "test_message"`
