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
import Housing from 'src/components/Housing';
import Booking from 'src/components/Booking';
import BookingDashboard from 'src/components/BookingDashboard';
// component to set path for connected users
import PrivateRoute from 'src/components/PrivateRoute';

// == Import
import 'src/components/Languages/i18n';

import './styles.scss';

const App = () => {
  // state concerning modal connexion
    const [isActiveModalConnexion, setIsActiveModalConnexion] = useState(false);

  return (
      <div className="app">

          <Suspense fallback={(<div>Loading</div>)}>
              <Darkmode />
              <Languages />
              <Nav connexionActive={isActiveModalConnexion} setConnexionActive={setIsActiveModalConnexion} />
              
              <Switch>
                  <Route exact path="/connexion" component={Connexion} />
                  <Route exact path="/livre_d_or" component={GoldenBook} />
                  <Route exact path="/logement1" component={Housing} />
                  <Route exact path="/logement2" component={Housing} />
                  <Route exact path="/logement3" component={Housing} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/booking" component={Booking} />
                  <Route exact path="/booking_dashboard" component={BookingDashboard} />
                  <PrivateRoute exact path="/profil" component={Profil} />
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
