# Asynchrones JavaScript

## Asynchrones JavaScript

manche Aufgaben in JavaScript können gleichzeitig laufen (insbesondere Aufgaben bezüglich Input / Output):

- Netzwerkanfragen
- Lesen / Schreiben von Dateien in node.js
- Timer
- ...

## Asynchrones JavaScript

Beispiele für Tasks und Zeiten:

| Task                                         | ungefähre Zeit           |
| -------------------------------------------- | ------------------------ |
| einzelner CPU-Zyklus                         | **0.000000001 s** (1 ns) |
| Lesen aus dem RAM (1 Byte)                   | **0.0000001 s** (100 ns) |
| Lesen von einer SSD (1 Byte)                 | **0.0001 s** (100 µs)    |
| Anzeigen eines Frames auf einem Display      | **0.01 s** (10 ms)       |
| 1 Byte aus dem Internet anfragen & empfangen | **0.1 s** (100 ms)       |

## Tools für asynchrones JavaScript

- **callbacks, promises, async / await**: für parallels Input / Output
- _(Web) Worker_: für Parallelisierung von CPU-intensiven Aufgaben (JavaScript Code läuft tatsächlich parallel)

## Asynchrones JavaScript

- _callbacks_: traditionelle Möglichkeit, um asynchrone Anfragen zu bearbeiten
- promises und .then()
- **promises und async / await**

## Asynchrones JavaScript

Möglichkeiten, um Netzwerkanfragen zu machen:

- **fetch** (Promises)
- **axios** (Promises)
- jQuery
- XMLHttpRequest

## Asynchrones JavaScript

Beispiel: Anfragen mit _axios (await)_, _axios (then)_ und _jQuery (callback)_:

```js
const res = await axios(url);
console.log(res.data);
```

```js
axios(url).then((res) => console.log(res.data));
```

```
jquery.getJSON(url, (data) => console.log(data));
```
