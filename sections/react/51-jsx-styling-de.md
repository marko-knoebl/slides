# Styling in JSX

## CSS-Klassen

```jsx
<div
  className={'todoitem' + isCompleted ? ' completed' : ''}>
  [...]
</div>
```

## CSS-Klassen

Hilfs-Utility: npm-Paket _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: isCompleted,
  })}>
  [...]
</div>;
```

## CSS-Module

Bei create-react-app sind CSS-Module vorkonfiguriert. Diese erlauben das Verwenden von CSS-Klassennamen, die garantiert über CSS-Dateien hinweg eindeutig sind.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## SCSS einbinden

```bash
npm install node-sass
```

```js
import styles from './TodoItem.module.scss';
```

```scss
/* TodoItem.module.scss */
@import '../colors';
...
```

```scss
/* colors.scss */
$primary: lightblue;
```

## JSX: Dynamische Stile

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
```
