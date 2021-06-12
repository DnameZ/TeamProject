import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Switch } from 'react-router-dom';
import { useLocation, Redirect, Route } from 'react-router-dom';
// pages
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Records from './pages/Records/Records';
import Statistics from './pages/Statistics/Statistics';

// components
import Header from './components/Header/Header';
import { Main } from './lib/styles/generalStyles';
import { AuthContext } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const { setIsAdmin, setIsLoggedIn, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, [setIsAdmin, setIsLoggedIn]);
  return (
    <>
      {path !== '/login' ? <Header /> : null}
      <Main>
        <Switch>
          <ProtectedRoute role="isStudent" path="/login" component={Login} />
          <ProtectedRoute role="isLoggedIn" path="/events" component={Events} />
          <ProtectedRoute role="isAdmin" path="/records" component={Records} />
          <ProtectedRoute
            role="isAdmin"
            path="/statistics"
            component={Statistics}
          />

          <Route
            exact
            path="/"
            render={() => {
              return isLoggedIn ? (
                <Redirect to="/events" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
        </Switch>
      </Main>
    </>
  );
}
export default App;
