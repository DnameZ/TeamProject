import './App.css';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// pages
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Records from './pages/Records/Records';
import Statistics from './pages/Statistics/Statistics';
// components
import { Main } from './lib/styles/generalStyles';
import RateEventModal from './components/RateEventModal/RateEventModal';

function App() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Main>
        <RateEventModal eventName="Kreiraj svoju Pokadex aplikaciju uz ReactJS" />
        <Route path="/login" component={Login} />
        <Route path="/events" component={Events} />
        <Route path="/records" component={Records} />
        <Route path="/statistics" component={Statistics} />
      </Main>
    </>
  );
}
export default App;
