# JSX und Sicherheit

## JSX und Sicherheit

beim zuweisen von _Inhalten_ werden XML-Tags automatisch escaped

der folgende Code wird nur reinen Textinhalt darstellen - er ist kein Angriffsziel:

```jsx
const userSuppliedValue = 'abc <script>alert()</script>';

element = <div>{userSuppliedValue}</div>;
```

## JSX und Sicherheit

manche Attribute - insbesondere _href_ - bieten Angriffziele

```jsx
<h1>profile</h1>
<p>name: {userName}</p>
<p><a href={userWebsite}>website</a></p>
```

Ein Angreifer könnte seine Website auf `javascript:alert("foo")` gesetzt haben

mögliche Lösung: stelle sicher, dass User-generierte externe URLs mit _http://_ oder _https://_ beginnen

<small>siehe auch: [Artikel auf pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [Artikel von Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request mit mehr Details](https://github.com/facebook/react/pull/15047)</small>
