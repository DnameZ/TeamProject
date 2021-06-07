import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  function handleUserLogin(authToken, isAdmin) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('isAdmin', isAdmin);

    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  }

  function handleUserLogout() {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('authToken');

    setIsAdmin(false);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        handleUserLogin,
        handleUserLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
