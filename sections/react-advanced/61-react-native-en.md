# React Native

## React Native

React Native can be used to write React applications for iOS and Android devices

## Options for development

- **Expo Snack**: online editor / playground
- **Expo CLI**: develop locally with little setup
- **React Native CLI**: develop with Xcode or Android Studio - is required when publishing

## Expo: online editor

[snack.expo.io](https://snack.expo.io)

## Expo: local development

installing expo:

```bash
npm install -g expo-cli
```

creating a new expo project:

```bash
expo init myproject
```

## Expo app

**Expo app**: for testing apps during development, available in the Android and iOS app stores

## React Native components

- View (=div)
- Text
- Image
- Button
- TextInput
- ScrollView

[detailed list](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

## React Native components

Example:

```js
<Button title="click me" onPress={handlePress} />
```

## Styling

All React Native components accept a _style_ prop that can take an object:

```js
const todoItemStyle = {
  margin: 5,
  padding: 5,
};

const TodoItem = ({ title, completed }) => (
  <View style={todoItemStyle}>{title}</View>
);
```

## Styling

The style prop can also be an array of objects

Entries that are _falsy_ are ignored - this can be used for conditional styles

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[todoItemStyle, completed && completedStyle]}>
    {title}
  </View>
);
```

## Styling

Creating _stylesheets_ that define multiple sets of styles:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: 'lightred',
  },
  completed: {
    textDecoration: 'line-through',
    backgroundColor: 'lightgrey',
  },
});
```

## Styling

using stylesheets:

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[
      styles.todoItem,
      completed && styles.completed,
    ]}>
    title
  </View>
);
```
