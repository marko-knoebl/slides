# React Native

## React Native

React Native can be used to write React applications for iOS and Android devices

## Options for development

- **Expo**: simple option, quick to get started
- **React Native CLI**: enables integration of native modules (Java / Objective-C)

## Expo tools

- **Expo Snack**: online editor / playground
- **Expo CLI**: local development
- **Expo App**: emulator for live testing on Android / iOS (available on app stores)

## Expo Snack

<https://snack.expo.io>

options:

- run web version
- emulate Andoid / iOS online (limited capacity)
- run on local device (via Expo App)

## Expo CLI

installation:

```bash
npm install -g expo-cli
```

creating a new expo project:

```bash
expo init myproject
```

running a project (will open a dashboard at _localhost:19002_):

```bash
npm run start
```

## Expo CLI

running on a device:

- select _tunnel_
- wait
- scan QR code with Expo app

## React Native components

- View (=div)
- Text
- Image
- Button
- TextInput
- ScrollView

[detailed list](https://facebook.github.io/react-native/docs/components-and-apis#basic-components)

## React Native components

Examples:

```js
<Button title="press me" onPress={handlePress} />
```

```js
<TextInput value={myText} onChangeText={setMyText} />
```

## Styling

All React Native components accept a _style_ prop that can take an object:

```js
const TodoItem = ({ title, completed }) => (
  <View style={{ margin: 5, padding: 8 }}>
    <Text>{title}</Text>
  </View>
);
```

## Styling

The style prop can also receive an array of objects which are merged (_falsy_ entries are ignored)

```js
const TodoItem = ({ title, completed }) => (
  <View
    style={[
      { padding: 8, backgroundColor: 'lightcoral' },
      completed && { backgroundColor: 'lightgrey' },
    ]}
  >
    <Text>{title}</Text>
  </View>
);
```

## Styling

Creating _stylesheets_ that define multiple sets of styles:

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    padding: 8,
    backgroundColor: 'lightcoral',
  },
  completedView: {
    backgroundColor: 'lightgrey',
  },
  completedText: {
    textDecoration: 'line-through',
  },
});
```

## Styling

using stylesheets:

```js
const TodoItem = ({ title, completed, onToggle }) => (
  <View
    style={[
      styles.todoItem,
      completed && styles.completedView,
    ]}
  >
    <Text style={[completed && styles.completedText]}>
      {completed ? 'DONE: ' : 'TODO: '}
      {title}
    </Text>
  </View>
);
```

## Platform-specific code

option 1 (simple cases):

```js
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  // 'web' / 'ios' / 'android'
}
```

option 2 (platform-specific components):

- `AddTodo.web.js`
- `AddTodo.ios.js`
- `AddTodo.android.js`
