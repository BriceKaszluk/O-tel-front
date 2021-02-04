/* eslint-disable import/no-unresolved */
import React, { Suspense, useEffect, useState } from 'react';

import { Route, Switch } from 'react-router-dom';

// components
import Footer from 'src/components/Footer';
import GoldenBook from 'src/components/GoldenBook';
import Connexion from 'src/components/Connexion';
// import RegistrationForm from 'src/components/RegistrationForm';
import Darkmode from 'src/components/Darkmode';
import Languages from 'src/components/Languages';
// import Registration from 'src/components/registration';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Nav from 'src/components/Nav';
import HousingOne from 'src/components/HousingOne';
import Booking from 'src/components/Booking';
import BookingDashboard from 'src/components/BookingDashboard';
import TermsOfUse from 'src/components/TermsOfUse';
// component to set path for connected users
import PrivateRoute from 'src/components/PrivateRoute';

// == Import
import 'src/components/Languages/i18n';

import './styles.scss';

const App = () => {
  return (
      <div className="app">

          <Suspense fallback={(<div>Loading</div>)}>
              <Darkmode />
              <Languages />
              <Nav />
              
              <Switch>
                  <Route exact path="/connexion" component={Connexion} />
                  <Route exact path="/livre_d_or" component={GoldenBook} />
                  <Route path="/logement/:houseId" component={HousingOne} />
                  <Route exact path="/" component={Home} />

                  <PrivateRoute path="/booking/:houseId" component={Booking} />

                  <Route exact path="/booking_dashboard" component={BookingDashboard} />
                  <PrivateRoute exact path="/profil" component={Profil} />
                  <Route exact path="/TermsOfUse" component={TermsOfUse} />
              </Switch>
              
              <Footer />

          </Suspense>

      </div>
  );
};

// == Export
export default App;
// TODO: pour ajouter une route
//      <Route exact path="/logement">
//       <logement />
//      </Route>

// const roles = bddApiFetcher(apiURL.roles, {
//  init: [],
// });
// console.log(roles);
