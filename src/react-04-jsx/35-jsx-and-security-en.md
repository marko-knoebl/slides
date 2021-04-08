# JSX and security

## JSX and security

when binding _content_, XML tags will be escaped automatically

this will just display plain text content:

```jsx
const userSuppliedValue = 'abc <script>alert()</script>';

element = <div>{userSuppliedValue}</div>;
```

## JSX and security

some attributes - notably _href_ - offer some attack targets

```jsx
<h1>profile</h1>
<p>name: {userName}</p>
<p><a href={userWebsite}>website</a></p>
```

an attacker may have set their website to e.g.: `javascript:alert("foo")`

possible solution: make sure user-supplied external URLs start with _http://_ or _https://_

<small>see also: [article on pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [article by Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request with more details](https://github.com/facebook/react/pull/15047)</small>
