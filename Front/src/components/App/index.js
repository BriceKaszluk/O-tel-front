import React from 'react';
import { Route } from 'react-router-dom';

// components
import Footer from 'src/components/Footer';
import GoldenBook from 'src/components/GoldenBook';
import Connexion from 'src/components/Connexion';
import RegistrationForm from 'src/components/RegistrationForm';
//import Registration from 'src/components/registration';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';

import Housing from 'src/components/Housing';

// == Import
import bddApiFetcher from 'src/hooks/bddApiFetcher';
import { apiURL } from 'src/configAPI';
import './styles.scss';

const App = () => {

  return (
    <div className="app">

      <Route exact path="/connexion">
        <Connexion />
      </Route>
      <Route exact path="/inscription">
        <RegistrationForm />
      </Route>
      <Route exact path="/livre_d_or">
        <GoldenBook />
      </Route>
      <Route exact path="/logement1">
        <Housing />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    
      <Route exact path="/profil">
        <Profil />
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

//const roles = bddApiFetcher(apiURL.roles, {
//  init: [],
//});
//console.log(roles);