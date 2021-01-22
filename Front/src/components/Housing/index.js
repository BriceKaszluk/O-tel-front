import React, { useState } from 'react';
import { Route} from 'react-router-dom';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
import './styles.scss';

export default (name, nbPlace, housingPrice, housingDescription) => (

  <div className="housing">
    <Nav />
    <section className="hero">
      <div className="hero-body">
      </div>
    </section>
    <div className="columns">
      <div className="column">
        <h1> *name* </h1>
        <h2> Logement pour *nbPlace* personnes</h2>
        <h2> *housingPrice* par nuit</h2>
        <p> *housingDescription* </p>
      </div>
      <div className="column">
        <h1> *Composant calendrier* </h1>
        <button className="is-primary">Réserver</button>
      </div>
    </div>
  </div>

);
