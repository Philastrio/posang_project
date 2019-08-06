import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [state, setState] = useState({ isLoggedIn: false });
  const isLoggedInFuc = () => {
    if (localStorage.token) {
      return setState({ isLoggedIn: true });
    }
  };
  return (
    <LoginContext.Provider value={{ state }}>{children}</LoginContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { state } = useContext(LoginContext);
  return state;
};

export default LoginProvider;
