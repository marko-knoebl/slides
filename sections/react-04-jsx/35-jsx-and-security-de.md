# JSX und Sicherheit

## JSX und Sicherheit

mögliches Angriffsziel am Front-End: **XSS-Angriffe**

## JSX und Sicherheit

XSS-Angriffe:

ein böswilliger Benutzer stellt Inhalte auf unserer Website online (z.B. in einem Post oder auf der Profilseite) - wenn andere die Website besuchen, wird der böswillige Code im Browser des jeweiligen Beutzers ausgeführt, während dieser unsere Website besucht

[Demo für Experimente](https://codesandbox.io/s/jsx-xss-attack-gzb21j)

## JSX und Sicherheit

🙂 beim zuweisen von _Inhalten_ werden XML-Tags automatisch escaped

der folgende Code wird nur reinen Textinhalt darstellen - er ist kein Angriffsziel:

```jsx
const userAddress =
  'foo <script>prompt("enter credit card number:");</script>';
```

```jsx
<h1>profile</h1>
<p>address: {userAddress}</p>
```

## JSX und Sicherheit

🙁 das Attribut _href_ bietet Angriffsziele:

```jsx
const userWebsite =
  'javascript:prompt("enter credit card number:");';
```

```jsx
<h1>profile</h1>
<p>address: {userAddress}</p>
<p><a href={userWebsite}>website</a></p>
```

mögliche Lösung: stelle sicher, dass User-generierte externe URLs mit _http://_ oder _https://_ beginnen

<small>siehe auch: [Artikel auf pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [Artikel von Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request mit mehr Details](https://github.com/facebook/react/pull/15047)</small>
