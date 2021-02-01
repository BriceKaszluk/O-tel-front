import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RegistrationForm from 'src/components/RegistrationForm';
import ConnexionForm from 'src/components/Connexion';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { connexionService } from 'src/services/connexionService';
import { useAuthentication } from 'src/components/UserContext';

import styles from './styles.scss';

export default ({ connexionActive, setConnexionActive }) => {
  const { user, authenticate } = useAuthentication();
  const history = useHistory();
  const { t } = useTranslation();
  const [isActiveRegistration, setIsActiveRegistration] = useState(false);
  return (
      <nav id="nav" className="navbar">
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

              {
                    user
                    && (
                    <div className="navbar-item">
                        <Link to="/profil" className="navbar-item">profil</Link>
                        <a
                        className="navbar-item"
                        onClick={(event) => {
                        event.preventDefault();
                        authenticate(null, null);
                        history.push('/');
                        }}>déconnexion
                        </a>
                    </div>
                    )
                    }
              {
                    !user
                    && (
                    <div className="navbar-item">
                        <a className="navbar-item" onClick={() => setConnexionActive(!connexionActive)}>{t('connexion.1')}</a>
                        {connexionActive ? <ConnexionForm modalActive={connexionActive} closeModal={setConnexionActive} /> : ''}
                        <a className="navbar-item" onClick={() => setIsActiveRegistration(!isActiveRegistration)}>{t('Login.1')}</a>
                        {isActiveRegistration ? <RegistrationForm modalActive={isActiveRegistration} closeModal={setIsActiveRegistration} /> : ''}
                    </div>
                    )
                    }

          </div>
      </nav>
  );
};
// FIXME: système d'ancre pour contact et peut-être logements

// FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
// faudra le modifier
