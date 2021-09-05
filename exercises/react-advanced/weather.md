# Custom hooks - weather

Create a hook named `useWeather` that can be used to query Weather data - together with an associated context that enables application-wide caching of the data

```js
const { weather, status, reload } = useWeather('vienna', {
  autoReloadInterval: 60,
});
```

## OpenWeatherMap-API

example URL: <http://api.openweathermap.org/data/2.5/weather?appid=66445a4269dd911a5bbe214fadb768d6&units=metric&q=vienna>

(please only use this appid / API key for simple exercises)

entries in the API data:

- `.weather[0].main` (e.g. _Rain_)
- `.main.temp` (e.g. 24.5)
- `.wind.speed` (e.g. 2.5)
- `.name` (e.g. _Vienna_)
