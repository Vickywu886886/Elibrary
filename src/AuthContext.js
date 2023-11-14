// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = ({ username, password }) => {
    // Check if the provided username and password match the expected values
    if (username === 'vickywy660668@gmail.com' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    // Implement your logout logic here.
    // Set isAuthenticated to false upon logout.
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext); // Define useAuth here

export { AuthProvider, useAuth }; // Correct export syntax
