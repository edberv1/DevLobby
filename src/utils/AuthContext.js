import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true" || false
  );

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const login = (newToken, isAdminFlag = false) => {
    setToken(newToken);
    setIsAdmin(isAdminFlag);
    localStorage.setItem("token", newToken);
    localStorage.setItem("isAdmin", isAdminFlag);
  };

  const logout = () => {
    setToken(null);
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
