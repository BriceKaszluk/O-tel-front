import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Connexion from 'src/components/Connexion';
import RegistrationForm from 'src/components/RegistrationForm';
import { HashLink } from 'react-router-hash-link';
import styles from './styles.scss';


export default () => {

    const [isActive, setIsActive] = useState(false);

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
                <HashLink  to="/#contact" className="navbar-item">contact</HashLink>
                <Link to="/connexion" className="navbar-item" >connexion</Link>
                <a className="navbar-item" onClick={()=>setIsActive(!isActive)}  >inscription</a>
                {isActive? <RegistrationForm modalActive={isActive} closeModal={setIsActive} /> : ''}
            </div>

        </div>
    )
}




// FIXME: système d'ancre pour contact et peut-être logements

// FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
// faudra le modifier
