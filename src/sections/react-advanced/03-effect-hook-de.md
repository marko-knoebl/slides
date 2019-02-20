# Effect Hook

## Effect Hook

Der effect Hook kann dienen, um zu bestimmten Zeitpunkten im Lebenszyklus einer Komponente Aktionen zu setzen - insbesondere, wenn sich deren _props_ oder _state_ geändert haben - oder, wenn sie neu eingebunden wurde

Beispiele für Einsatzgebiete: Anfragen von APIs, manuelle Änderungen am DOM

## useEffect

`useEffect` bekommt zwei Parameter übergeben: Eine Funktion und ein Array von Werten.

Die Funktion nach dem Rendering einer Komponente ausgeführt, wenn sich einer der Werte geändert hat.

Die Funktion wird auch ausgeführt, wenn die Komponente neu eingebunden und zum ersten Mal gerendert wurde.

## useEffect

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

Wenn ein leeres Array als zweiter Parameter übergeben wird, wird die Funktion nur nach dem ersten Rendering ausgeführt.

Es gibt auch die Möglichkeit, eine Funktion zu definieren, die vor dem _Entfernen_ einer Komponente aufgerufen wird (mehr dazu später).

## useEffect: Beispiel: Weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(
  () => {
    if (stale) {
      refetch();
    }
  },
  [stale]
);
```

## useEffect: Beispiel: Weather

```js
const refetch = () => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather' +
      `?q=${city}&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({ temperature: data.main.temp });
      setStale(false);
    });
};
```

## Beispiel: Weather

Zustand 1a (Ausgangszustand):

keine Wetterdaten vorhanden (null)
es wird gerade geladen (true)
es gibt keine Fehlermeldung
-> 2a, 2b

Zustand 1b:

es sind aktuelle Wetterdaten vorhanden ({...})
es wird geladen (true)
es gibt keine Fehlermeldung
-> 2a, 2b

## Beispiel: Weather

Zustand 2a:

es sind aktuelle Wetterdaten vorhanden ({...})
es wird nicht geladen (false)
-> 1b

Zustand 2b:

es sind keine aktuellen Wetterdaten vorhanden (null)
es wird nicht geladen (false)
es gibt eine Fehlermeldung (404 oder 400)
-> 1a
