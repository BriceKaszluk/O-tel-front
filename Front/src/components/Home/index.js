import React from 'react';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Contact from 'src/components/Contact';
import HousingOne from 'src/components/HousingOne';
import HousingTwo from 'src/components/HousingTwo';
import HousingThree from 'src/components/HousingThree'
import CustomerReviews from 'src/components/CustomerReviews';

import { Route } from 'react-router-dom';
import './styles.scss';

export default () => (
  <section className="hero is-fullheight">
    <Background />

    <h1>Bienvenue sur le site du super gite</h1>
    <h2>Choisissez une date pour voir les logements disponibles :</h2>

    <div className="calendar">
      <Calendar />
    </div>

    <div className="block">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </div>

    <div className="columns">
      <div className="column home-column">
        <HousingOne />
      </div>
      <div className="column home-column">
        <HousingTwo />
      </div>
      <div className="column home-column">
        {/* <HousingThree /> */}
      </div>
    </div>

    <div className="columns">
      <div className="column gold-book-column">
        <CustomerReviews />
      </div>
      <div className="column gold-book-column">
        <CustomerReviews />
      </div>
      <div className="column gold-book-column">
        <CustomerReviews />
      </div>
    </div>

    <div className="contact-form">
      <Route exact path="/">
        <Contact />
      </Route>
    </div>

  </section>
);
