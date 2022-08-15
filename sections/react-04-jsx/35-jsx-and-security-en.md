# JSX and security

## JSX and security

potential threat on the front-end: **XSS attacks**

## JSX and security

XSS attacks:

a malicious user submits some content to our website (e.g. in a post or on their profile page) - when other users visit the site, the malicious code will be executed in the other user's browser while visiting our website

[demo for experiments](https://codesandbox.io/s/jsx-xss-attack-gzb21j)

## JSX and security

🙂 when binding _content_, XML tags will be escaped automatically

the following code will just display plain text content - it is not an attack target:

```jsx
const userAddress =
  'foo <script>prompt("enter credit card number:");</script>';
```

```jsx
<h1>profile</h1>
<p>address: {userAddress}</p>
```

## JSX and security

🙁 the attribute _href_ does offer attack targets:

```jsx
const userWebsite =
  'javascript:prompt("enter credit card number:");';
```

```jsx
<h1>profile</h1>
<p>address: {userAddress}</p>
<p><a href={userWebsite}>website</a></p>
```

possible solution: make sure user-supplied external URLs start with _http://_ or _https://_

<small>see also: [article on pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [article by Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request with more details](https://github.com/facebook/react/pull/15047)</small>
