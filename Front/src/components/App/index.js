// == Import npm
import React from 'react';
import Nav from 'src/components/Nav';
import { Route, Link } from 'react-router-dom';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <h1>Composant : App</h1>
    <Nav />
  </div>
);

// == Export
export default App;


//TODO: pour ajouter une route
//      <Route exact path="/">
//        <Posts />
//      </Route>

//TODO: enlever le composant <Nav /> qui servait à tester
