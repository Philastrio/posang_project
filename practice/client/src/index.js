import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "react-apollo-hooks";
import Client from "./Apollo/Client";
import LoginProvider from "./context";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <LoginProvider>
      <App />
    </LoginProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
