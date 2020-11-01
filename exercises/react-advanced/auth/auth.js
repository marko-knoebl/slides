import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = props => {
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const login = async (loginUsername, password) => {
    const res = await fetch("https://karuga-auth-service.glitch.me/login", {
      method: "post",
      body: JSON.stringify({ username: loginUsername, password: password }),
      headers: { "Content-Type": "application/json" }
    });
    const content = await res.json();
    if (content.status === "success") {
      setUsername(loginUsername);
      setToken(content.token);
      setError(null);
    } else {
      setUsername(null);
      setToken(null);
      setError(true);
    }
  };
  const logout = () => {
    setUsername(null);
    setToken(null);
    setError(null);
  };
  return (
    <AuthContext.Provider
      value={{
        username: username,
        token: token,
        login: login,
        logout: logout,
        error: error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
