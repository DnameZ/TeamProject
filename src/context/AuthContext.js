import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  function handleUserLogin(authToken, isAdmin) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('isAdmin', isAdmin);

    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    setAuthToken(authToken);
  }

  function handleUserLogout() {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('authToken');

    setIsAdmin(false);
    setIsLoggedIn(false);
    setAuthToken('');
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
        authToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
