import React from 'react';
import { Route } from 'react-router-dom';

// components
import Footer from 'src/components/Footer';
import GoldenBook from 'src/components/GoldenBook';
import Connexion from 'src/components/Connexion';
import Darkmode from 'src/components/Darkmode';
import Language from 'src/components//Language';
// import Registration from 'src/components/registration';
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Nav from 'src/components/Nav';
import Housing from 'src/components/Housing';

// == Import
import { data } from 'src/hooks/dataFetcher';

import './styles.scss';

const App = () => {


    return (
    <div className="app">
        
        <Language />
        <Nav />

        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/livre_d_or" component={GoldenBook} />
        <Route exact path="/logement1" component={Housing} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profil" component={Profil} />

        <Footer />

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
