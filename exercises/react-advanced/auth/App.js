import React, { useState } from "react";

import { AuthProvider, useAuth } from "./auth";

const LoginForm = () => {
  const auth = useAuth();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        auth.login(username, password);
      }}
    >
      <input
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
};

const UserDetails = () => {
  const auth = useAuth();
  return <div>logged in as {auth.username}</div>;
};

const Main = () => {
  const auth = useAuth();
  if (auth.username) {
    return (
      <div>
        <UserDetails />
        <button onClick={auth.logout}>log out</button>
      </div>
    );
  }
  return <LoginForm />;
};

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
