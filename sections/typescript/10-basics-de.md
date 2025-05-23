# TypeScript Grundlagen

<!-- closely realated content in presentations typescript and react-->

## TypeScript

TypeScript: Verbreitete Alternative zu _JavaScript_

_Statische Typisierung_ → bessere Autovervollständigung und Fehlererkennung

## Statische Typisierung

Datentypen können _explizit_ vom Entwickler angegeben werden oder von der Entwicklungsumgebung _abgeleitet_ werden (engl. _type inference_)

Vortile:

- bessere Autovervollständigung
- bessere Fehlererkennung

## Statische Typisierung

Beispiel:

```ts
let names: Array<string> = [];

names.push('Alice');
names.push('Bob');

console.log(names[0].toUpperCase());
```

## Playground

online mit TypeScript experimentieren:

https://www.typescriptlang.org/play
