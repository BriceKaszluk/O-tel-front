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

          <div className="block">{t('description.1')}</div>

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
