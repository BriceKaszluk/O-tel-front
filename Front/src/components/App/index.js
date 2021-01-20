// == Import npm
import React, { useState } from 'react';
import Nav from 'src/components/Nav';
import { Route, Link } from 'react-router-dom';

// == Import
import bddApiFetcher from 'src/hooks/bddApiFetcher';
import { apiURL } from 'src/configAPI';
import './styles.css';

// == Composant
const App = () => {
  
  const roles = bddApiFetcher(apiURL.roles, {
    init:[]
  });
  console.log(roles);

  return(
    <div className="app">
      <Nav />
    </div>
  )
};

// == Export
export default App;


//TODO: pour ajouter une route
//      <Route exact path="/logement">
//       <logement />
//      </Route>

