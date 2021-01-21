import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

//components
import Nav from 'src/components/Nav';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import Profil from 'src/components/Profil';
import Connexion from 'src/components/Connexion'
import Registration from 'src/components/Registration'
import Home from 'src/components/Home'

import Housing from 'src/components/Housing';
import Booking from 'src/components/Booking';

// == Import
import bddApiFetcher from 'src/hooks/bddApiFetcher';
import { apiURL } from 'src/configAPI';
import './styles.scss';

const App = () => {
  const roles = bddApiFetcher(apiURL.roles, {
    init: [],
  });
  console.log(roles);

  return (
    <div className="app">
      
      <Route exact path = "/connexion">
        <Connexion />
      </Route>
      <Route exact path = "/inscription">
        <Registration />
      </Route> 
      <Route exact path="/logement1">
        <Housing />
      </Route>
      <Route exact path = "/">
        <Home />
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
