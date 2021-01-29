import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from 'src/components/RegistrationForm';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default () => {
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();

  return (
      <div id="nav" className="navbar">
          <div className="navbar-menu">
              <Link to="/" className="navbar-item">{t('Home.1')}</Link>
              <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">
                      {t('More.1')}
                  </div>
                  <div className="navbar-dropdown">
                      <Link to="/logement1" className="navbar-item">{t('Housing.1')}</Link>
                      <Link to="/logement2" className="navbar-item">{t('Housing.2')}</Link>
                      <Link to="/logement3" className="navbar-item">{t('Housing.3')}</Link>
                  </div>
              </div>
              <Link to="/livre_d_or" className="navbar-item">{t('GoldenBook.1')}</Link>
              <HashLink to="/#contact-form" className="navbar-item">{t('contact.1')}</HashLink>
              <Link to="/connexion" className="navbar-item">{t('connexion.1')}</Link>
              <a className="navbar-item" onClick={() => setIsActive(!isActive)}>{t('Login.1')}</a>
              {isActive ? <RegistrationForm modalActive={isActive} closeModal={setIsActive} /> : ''}
          </div>
      </div>
  );
};
// FIXME: système d'ancre pour contact et peut-être logements

// FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
// faudra le modifier
