import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// pages
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Records from './pages/Records/Records';
import Statistics from './pages/Statistics/Statistics';
// components
import { Main } from './lib/styles/generalStyles';
import Header from './components/Header/Header';
import { AuthContext } from './context/AuthContext';

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const { setIsAdmin, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, [setIsAdmin, setIsLoggedIn]);
  return (
    <>
      {path !== '/login' ? <Header /> : null}
      <Main>
        <Route path="/login" component={Login} />
        <Route path="/events" component={Events} />
        <Route path="/records" component={Records} />
        <Route path="/statistics" component={Statistics} />
      </Main>
    </>
  );
}
export default App;
