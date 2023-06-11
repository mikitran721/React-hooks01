import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // state
  // const [isAuthenticated, setAuthentication] = useState(false);
  const [isAuthenticated, dispatch] = useReducer(AuthReducer, false);

  // const toggleAuth = () => {
  //   setAuthentication(!isAuthenticated);
  // };

  // useEffect
  useEffect(() => {
    alert(
      isAuthenticated
        ? "Login successful"
        : "You are logged out. Please login to see todos."
    );
  }, [isAuthenticated]);

  //   context data
  const authContextData = {
    isAuthenticated,
    dispatch,
  };

  //   return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
