import React, { createContext, useEffect, useState } from "react";
import { AuthService } from "../services/AuthService"

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const [userData, setUserData] = useState(null); // Add userData state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const response = await AuthService.validateToken(token);
          if (response.success) {
            setIsLoggedIn(true);
            
          } else if (response.success) {
            setIsLoggedIn(true);
          
          } else {
            logout(); 
          }
        } catch (error) {
          console.error("Error validating token:", error);
          logout();
        } finally {
          setIsLoading(false); // token osht valid, go to admin page
        }
      } else {
        setIsLoading(false); //token not valid
      }
    };

    validateToken();

   
  }, []); 

  const login = (newToken) => {
    setToken(newToken);
    setIsLoggedIn(true);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  if (isLoading) {
    // Render loading page while token validationn is happening
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
