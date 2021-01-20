// == Import npm
import React from 'react';
import Nav from 'src/components/Nav'
import Housing from 'src/components/Housing'
import { Route, Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">

    <Route exact path="/">
       <Nav/>
    </Route>

    <Route exact path="/logement1">
       <Housing/>
    </Route>
    

  </div>
);

// == Export
export default App;


//TODO: pour ajouter une route
//      <Route exact path="/logement">
//       <logement />
//      </Route>

//TODO: enlever le composant <Nav /> qui servait à tester
