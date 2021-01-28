/* eslint-disable linebreak-style */
import React from 'react';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Contact from 'src/components/Contact';
import HousingOne from 'src/components/HousingOne';
import HousingTwo from 'src/components/HousingTwo';
import HousingThree from 'src/components/HousingThree';
import CustomerReviews from 'src/components/CustomerReviews';
import { useTranslation } from 'react-i18next';

import { Route } from 'react-router-dom';
import './styles.scss';

export default () => {
  const { t } = useTranslation();

  return (

      <section className="hero is-fullheight">
          <Background />

          <h1>{t('Title.1')}</h1>
          <h2>{t('datepicker.1')}</h2>

          <div className="calendar">
              <Calendar />
          </div>

          <div className="block">
              Le gîte se trouve dans le parc régional du Verdon : entre Barreme et Castellanne : La maison se situe à la cime du village ; ici nous sommes 73 habitants ! Si vous aimez la nature et le calme cet établissement est fait pour vous! A proximité vous trouverez de nombreux centres d’intérêts comme le canyoning le ski en hiver visite de distillerie de lavande et de nombreux village pittoresques sur les sentiers de randonnées multiples autour de la maison; Bien sur, vous êtes aux portes des gorges du Verdon et les lacs et rivières sont incontournables! Bienvenue aux amoureux de la nature et des grands espaces!
          </div>

          <div className="columns_home">
              <div className="column home-column">
                  <HousingOne />
              </div>
              <div className="column home-column">
                  <HousingTwo />
              </div>
              <div className="column home-column">
                  <HousingThree />
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
};
