/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

// components
import Footer from 'src/components/Footer';
import GoldenBook from 'src/components/GoldenBook';
import Connexion from 'src/components/Connexion';
// import RegistrationForm from 'src/components/RegistrationForm';
import Darkmode2 from 'src/components/Darkmode2';
import Languages from 'src/components/Languages';
// import Registration from 'src/components/registration';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Nav from 'src/components/Nav';
import Housing from 'src/components/Housing';


// == Import
import { data } from 'src/hooks/dataFetcher';
import 'src/components/Languages/i18n';

import './styles.scss';

const App = () => {

return (
  <div className="app">

      <Suspense fallback={(<div>Loading</div>)}>
        <Nav />
        <Darkmode2 />
        <Languages /> 
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/livre_d_or" component={GoldenBook} />
        <Route exact path="/logement1" component={Housing} />
        <Route exact path="/logement2" component={Housing} />
        {/* <Route exact path="/logement3" component={Housing} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/profil" component={Profil} />

        <Footer />

      </Suspense>

    </div>
    )    
}
  


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
