// == Import npm
import React from 'react';
import Nav from 'src/components/Nav';
import Calendar from 'src/components/Calendar';
import { Route, Link } from 'react-router-dom';

// == Import

// == Composant
const App = () => (
  <div className="app">
    <h1>Composant : App</h1>
    <Nav />
    <Calendar />
  </div>
);

// == Export
export default App;


//TODO: pour ajouter une route
//      <Route exact path="/">
//        <Posts />
//      </Route>

//TODO: enlever le composant <Nav /> qui servait à tester
