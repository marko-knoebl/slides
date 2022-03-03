# Variablendeklaration

## Variablendeklaration

Wie wir schon gesehen haben: Variablen werden üblicherweise mit `let` deklariert

Alternativen:

- Deklaration mit `const` (nicht mehr neu zuweisbar)
- Deklaration mit `var` ("veraltete" Version von `let`)

Mit `let` oder `const` deklarierte Variablen sind nur innerhalb des enstprechenden Codeblocks (innerhalb der umgebenden geschweiften Klammern) gültig. (Mehr dazu später)

## Variablendeklaration

mit `const` deklarierte Zuweisungen können nicht mehr geändert werden

ungültig:

```js
const names = ['Alice', 'Bob', 'Charlie'];
names = [];
```

Objekte, die hinter diesen Variablennamen stecken, dürfen aber abgeändert werden:

```js
const names = ['Alice', 'Bob', 'Charlie'];
names.push('Dana');
```
