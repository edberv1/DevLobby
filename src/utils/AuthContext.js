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
          setIsLoading(false); // token osht valid, render admin page
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
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
