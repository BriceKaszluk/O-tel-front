import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from 'src/components/RegistrationForm';
import ConnexionForm from 'src/components/Connexion'; 
import { HashLink } from 'react-router-hash-link';
import styles from './styles.scss';

export default () => {

    const [isActiveRegistration, setIsActiveRegistration] = useState(false);
    const [isActiveConnexion, setIsActiveConnexion] = useState(false);
    return(
        <div id="nav" className="navbar">
            <div className="navbar-menu">
                <Link to="/" className="navbar-item">accueil</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                    More
                    </div>
                    <div className="navbar-dropdown">
                    <Link to="/logement1" className="navbar-item">logement1</Link>
                    <Link to="/logement1" className="navbar-item">logement1</Link>
                    <Link to="/logement1" className="navbar-item">logement1</Link>
                    </div>
                </div>
                <Link to="/livre_d_or" className="navbar-item">livre d'or</Link>
                <HashLink  to="/#contact-form" className="navbar-item">contact</HashLink>
                <a className="navbar-item" onClick={()=>setIsActiveConnexion(!isActiveConnexion)}>connexion</a>
                {isActiveConnexion? <ConnexionForm modalActive={isActiveConnexion} closeModal={setIsActiveConnexion} /> : ''}
                <a className="navbar-item" onClick={()=>setIsActiveRegistration(!isActiveRegistration)}>inscription</a>
                {isActiveRegistration? <RegistrationForm modalActive={isActiveRegistration} closeModal={setIsActiveRegistration} /> : ''}
            </div>
        </div>
    )}
// FIXME: système d'ancre pour contact et peut-être logements

// FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
// faudra le modifier
