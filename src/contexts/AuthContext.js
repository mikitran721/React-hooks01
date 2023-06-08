import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // state
  const [isAuthenticated, setAuthentication] = useState(false);

  const toggleAuth = () => {
    setAuthentication(!isAuthenticated);
  };

  //   context data
  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };

  //   return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
