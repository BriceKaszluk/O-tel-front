
import React from 'react';
import { Link } from 'react-router-dom';
import Connexion from 'src/components/Connexion'

import style from './style.scss';

export default () => {
    return(
        <div id="nav" className="navbar">
                    <Link to="/" className="navbar-item">accueil</Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>
                        <div className="navbar-dropdown">
                        <Link to="/logement1" className="navbar-item">logement1</Link>
                        <Link to="/logement2" className="navbar-item">logement2</Link>
                        <Link to="/logement3" className="navbar-item">logement3</Link>
                        </div>
                    </div>
                    <Link to="/livre_d_or" className="navbar-item">livre d'or</Link>
                    <Link to="#contact" className="navbar-item">contact</Link>
                    <Link to="/connexion" className="navbar-item" >connexion</Link>
                    <Link to="/inscription" className="navbar-item" >inscription</Link>
            </div>
           )
}


//FIXME: système d'ancre pour contact et peut-être logements

//FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
//faudra le modifier

