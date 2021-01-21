import React, { useState } from 'react';
import Nav from 'src/components/Nav';
import Calendar from 'src/components/Calendar';
import Housing from 'src/components/Housing';
import Contact from 'src/components/Contact';
import { Route, Link } from 'react-router-dom';
import './styles.scss';

// == Import

import bddApiFetcher from 'src/hooks/bddApiFetcher';
import { apiURL } from 'src/configAPI';

const App = () => {
  const roles = bddApiFetcher(apiURL.roles, {
    init: [],
  });
  console.log(roles);

  return (
    <div className="app">

      <Calendar />

      <Route exact path="/">
        <Nav />
      </Route>

      <Route exact path="/">
        <Contact />
      </Route>

      <Route exact path="/logement1">
        <Housing />
      </Route>
    </div>
  );
};

// == Export
export default App;

// TODO: pour ajouter une route
//      <Route exact path="/logement">
//       <logement />
//      </Route>
