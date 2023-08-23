// Auth Context

import { createContext, useEffect, useState } from "react";
//? 1-Creating Context
export const AuthContext = createContext();

//? 2-provider component

const AuthContextProvider = props => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || false);
  //   console.log(user);

  useEffect(() => {
    sessionStorage.setItem("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;