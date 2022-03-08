# JavaScript im Browser: Grundlagen

## JavaScript im Browser

Wir schreiben ein einfaches JavaScript-Programm für den Browser

## JavaScript im Browser

_index.html_:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>hello!</h1>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

_index.js_:

```js
alert('hello!');
```

## JavaScript im Browser

zwei einfache Funktionen, die im Browser vordefiniert sind:

- `alert()` - um Text in einem Dialog anzuzeigen
- `prompt()` - um den Benutzer in einem Dialog nach einer Eingabe zu fragen

## Eingabe und Ausgabe

Eingabe: Mit Hilfe von `prompt`:

```js
let name = prompt('What is your name?');
```

`prompt` liefert immer einen String zurück

## Eingabe und Ausgabe

Ausgabe der Begrüßung

```js
alert(`Nice to meet you, ${name}!`);
```

## Übung: Alter anhand Geburtsjahr

Schreibe ein Programm, das den Benutzer nach dem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2022 wird

## Übung: Zufallszahl

Benutzer gibt einen Höchstwert ein (z.B.: 10)

Programm gibt eine Zufallszahl im gewünschten Intervall aus (z.B.: 7)

Verwende hierfür Funktionen aus dem `Math`-Objekt (schlage selbst in der Dokumentation nach)
