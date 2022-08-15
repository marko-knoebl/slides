# React Ökosystem und Libraries

## React Ökosystem und Libraries

- API-Anfragen
- Routing
- Komponentenlibraries
- Styling-Tools
- Animationen
- Formulare
- State-Management
- ...

## Libraries für API-Anfragen

- _react-query_
- _react-swr_

eingebaut:

- _effect hook_ (kann kompliziert sein)

zukünftig:

- _suspense for data fetching_

<!--
## Libraries für API-Anfragen

Beispiel aus _react-query_:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');
  const exchangeRateQuery = useQuery(
    ['exchangeRate', from, to],
    fetchExchangeRate
  );

  if (exchangeRateQuery.isLoading) {
    return <div>Loading ...</div>;
  } else if (exchangeRateQuery.isError) {
    return <div>Error while loading data</div>;
  }
  return <DataDisplay data={exchangeRateQuery.data} />;
}
``` -->

## Libraries für Routing

- _react-router_

## Komponentenlibraries

- _MUI_
- _Ant Design_
- _Chakra UI_
- _Mantine_
- _Radix UI_

## Styling-Werkzeuge

Werkzeuge für Stylesheets:

- Werkzeuge zum Zusammensetzen von Klassennamen
- _CSS-Module_

Werkzeuge für CSS-in-JS:

- _emotion_
- _styled-components_

## Formular-Libraries

- _react-hook-form_
- _formik_

## State Management Libraries

- _redux_
- _mobX_
- _zustand_
- _recoil_

eingebaut: _Context_ + _Reducer-Hook_ / _Context_ + eigene Hooks
