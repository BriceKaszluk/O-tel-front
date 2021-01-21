import React, { useState } from 'react';
import Nav from 'src/components/Nav';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Goldenbook from 'src/components/Goldenbook';
import Housing from 'src/components/Housing';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';

import { Route, Link } from 'react-router-dom';
import Connexion from 'src/components/Connexion';
import Registration from 'src/components/Registration';

// == Import
import './styles.scss';

import bddApiFetcher from 'src/hooks/bddApiFetcher';
import { apiURL } from 'src/configAPI';

const App = () => {
  const roles = bddApiFetcher(apiURL.roles, {
    init: [],
  });
  console.log(roles);

  return (
    <div className="app">

      <Route exact path="/connexion">
        <Connexion />
      </Route>

      <Route exact path="/inscription">
        <Registration />
      </Route>

      <Background />
      <Route exact path="/">
        <Nav />
      </Route>

      <Calendar />

      <Route exact path="/">
        <Goldenbook />
      </Route>

      <Route exact path="/">
        <Contact />
      </Route>

      <Route exact path="/logement1">
        <Housing />
      </Route>
      <Footer />

    </div>
  );
};

// == Export
export default App;
// TODO: pour ajouter une route
//      <Route exact path="/logement">
//       <logement />
//      </Route>
