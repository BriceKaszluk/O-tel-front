import React from 'react';
import Nav from 'src/components/Nav';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Contact from 'src/components/Contact';
import { Route } from 'react-router-dom';
import './styles.scss';

export default () => (
  <section className="hero is-fullheight">
    <Background />

    <Route exact path="/">
      <Nav />
    </Route>

    <h1>Bienvenue sur le site du super gite</h1>
    <h2>Choisissez une date pour voir les logements disponibles :</h2>

    <div className="calendar">
      <Calendar />
    </div>

    <div className="block">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

    <div className="columns">
      <div className="column home-column">
        component housing card
      </div>
      <div className="column home-column">
        component housing card
      </div>
      <div className="column home-column">
        component housing card
      </div>
    </div>

    <div className="columns">
      <div className="column gold-book-column">
        Commentaire livre d'or
      </div>
      <div className="column gold-book-column">
        Commentaire livre d'or
      </div>
      <div className="column gold-book-column">
        Commentaire Livre d'or
      </div>
    </div>

    <div className="contact-form">
      <Route exact path="/">
        <Contact />
      </Route>
    </div>

  </section>
);
