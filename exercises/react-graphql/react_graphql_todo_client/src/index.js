import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import apolloClient from "./apolloClient";

import { ApolloProvider } from "react-apollo";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  mountNode
);
