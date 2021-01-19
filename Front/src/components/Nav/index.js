import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            <ul>
                <li><Link to="/">accueil</Link></li>
                <li><Link to="#logements">logements</Link></li>
                <li><Link to="/livre_d_or">livre d'or</Link></li>
                <li><Link to="#contact">contact</Link></li>
                <li><Link to="/">connexion</Link></li>
            </ul>
        </div>
    )
}


//FIXME: système d'ancre pour contact et peut-être logements

//FIXME: afficher la modale de connexion utilisateur, le lien n'est pas bon il
//faudra le modifier