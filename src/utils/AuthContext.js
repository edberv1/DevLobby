import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [isLoggedIn, setIsLoggedIn] = useState(token)

  useEffect(() => {
    setIsLoggedIn(token)
  }, [token])

  const login = (newToken) => {
    setToken(newToken)
    localStorage.setItem("token", newToken)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }