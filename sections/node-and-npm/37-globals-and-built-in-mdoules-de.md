# Globals und eingebaute Module

## Globals

etwas andere globale Objekte als im Browser

## Globals

nur im Browser:

- `window` (globaler Namespace) - Alternativname `globalThis`
- `fetch`
- `localStorage`, `sessionStorage`

nur in Node

- `global` (globaler Namespace) - Alternativname `globalThis`
- `process` (z.B. `process.argv`)
- `__filename` und `__dirname`

## Eingabaute Module (built-in)

- assert
- fs (file system)
- http(s)
- net (TCP)
- os
- path
- ...

## Reading command line arguments

command line arguments are available via the global `process.argv`

example:

```bash
node program.js 1 2 3
```

will result in

```json
["node", "/path/to/your/program.js", "1", "2", "3"];
```

## Exercise

Implement a program that would work like this:

```bash
node sum.js 1 2 3

the sum is 6
```
