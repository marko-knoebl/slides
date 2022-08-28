# Render props

## Render props

**render props**: Entwurfsmuster, das es einem Elternelement erlaubt, zusätzliche Daten bereitzustellen, wenn ein Unterelement gerendert wird

das Elternelement erhält eine "Anleitung", um die Daten darzustellen - diese Anleitung wird als Funktion übergeben

## Render props

Wunschdenken - wenn das doch funktionieren würde:

```js
<DataLoader resource="https://jsonplaceholder.typicode.com/todos">
  <DataViewer />
</DataLoader>
```

eine Möglichkeit, es umzusetzen:

```js
<DataLoader
  resource="https://jsonplaceholder.typicode.com/todos"
  render={(data) => <DataViewer data={data} />}
/>
```

## Render props

vollständiges Beispiel: `DataLoader`

```js
<DataLoader
  resource="https://jsonplaceholder.typicode.com/todos"
  renderLoading={() => <div>loading</div>}
  renderError={(error) => <div>Error: ...</div>}
  render={(data) => <DataViewer data={data} />}
/>
```

## Render props

Beispiel: `DataTable`

```js
<DataTable
  data={todos}
  filter={(todo) => !todo.completed}
  renderRow={(todo) => <tr>{todo.title}</tr>}
/>
```

## Render props

Beispiel: _formik_-Library

```js
<Formik
  initialValues={/*...*/}
  onSubmit={/*...*/}
  validate={/*...*/}
  children={(props) => <Form>...</Form>}
/>
```
