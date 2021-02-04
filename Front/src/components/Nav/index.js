import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RegistrationForm from 'src/components/RegistrationForm';
import ConnexionForm from 'src/components/Connexion';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useAuthentication } from 'src/components/UserContext';
// import Darkmode from 'src/components/Darkmode'
import Roll from 'react-reveal/Roll';

import styles from './styles.scss';

export default () => {
  const { user, authenticate, isActiveModalConnexion, setIsActiveModalConnexion } = useAuthentication();
  const history = useHistory();
  const { t } = useTranslation();
  const [isActiveRegistration, setIsActiveRegistration] = useState(false);

  // Menu responsive
  const [showMenu, setShowMenu] = useState(false);
  const classToggle = () => {
    setShowMenu(!showMenu);
  };

  return (

        <div id="nav" className="navbar">
            <div className="navbar-brand">
                <a role="button" onClick={classToggle} className={`navbar-burger ${showMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">  {/* A rajouter :  is-active */}
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>  {/* A rajouter :  is-active */}
                <Link to="/" className="navbar-item">{t('Home.1')}</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                        {t('More.1')}
                    </div>
                    <div className="navbar-dropdown">
                        <Link to="/logement/6" className="navbar-item">{t('Housing.1')}</Link>
                        <Link to="/logement/7" className="navbar-item">{t('Housing.2')}</Link>
                        <Link to="/logement/8" className="navbar-item">{t('Housing.3')}</Link>
                    </div>
                </div>
                {/* <div className="navbar-brand">
                    <div className="navbar-end">
                        <Darkmode />
                    </div>
                </div> */}
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
                            <a className="navbar-item" onClick={() => setIsActiveModalConnexion(!isActiveModalConnexion)}>{t('connexion.1')}</a>
                            {isActiveModalConnexion ? <ConnexionForm /> : ''}
                            <a className="navbar-item" onClick={() => setIsActiveRegistration(!isActiveRegistration)}>{t('Login.1')}</a>
                            {isActiveRegistration ? <RegistrationForm modalActive={isActiveRegistration} closeModal={setIsActiveRegistration} /> : ''}
                        </div>
                        )
                        }
            </div>
        </div>
  );
};
// FIXME: système d'ancre pour contact et peut-être logements

// FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
// faudra le modifier