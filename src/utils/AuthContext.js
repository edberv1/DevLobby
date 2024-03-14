import React, { createContext, useEffect, useState } from "react";
import { AuthService } from "../services/AuthService"

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const [userData, setUserData] = useState(null); // Add userData state

  useEffect(() => {
    setIsLoggedIn(token);
    if (token) {
      const parsedToken = JSON.parse(atob(token.split('.')[1])); 
      const userId = parsedToken._id; 
      
      AuthService.getUserById(userId)
        .then((user) => setUserData(user))
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      setUserData(null);
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUserData(null); 
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout, userData }}> {/* Include userData in context value */}
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
