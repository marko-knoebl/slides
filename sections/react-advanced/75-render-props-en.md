# Render props

## Render props

**render props**: pattern that allows a parent to provide additional or derived data when rendering a child

the parent receives instructions for how to render data - these instructions are provided as functions

## Render props

Wishful thinking - if only this would work:

```js
<DataLoader resource="https://jsonplaceholder.typicode.com/todos">
  <DataViewer />
</DataLoader>
```

one way to make it work:

```js
<DataLoader
  resource="https://jsonplaceholder.typicode.com/todos"
  render={(data) => <DataViewer data={data} />}
/>
```

## Render props

full example: `DataLoader`

```js
<DataLoader
  resource="https://jsonplaceholder.typicode.com/todos"
  renderLoading={() => <div>loading</div>}
  renderError={(error) => <div>Error: ...</div>}
  render={(data) => <DataViewer data={data} />}
/>
```

## Render props

example: `DataTable`

```js
<DataTable
  data={todos}
  filter={(todo) => !todo.completed}
  renderRow={(todo) => <tr>{todo.title}</tr>}
/>
```

## Render props

example: _formik_ library

```js
<Formik
  initialValues={/*...*/}
  onSubmit={/*...*/}
  validate={/*...*/}
  children={(props) => <Form>...</Form>}
/>
```
