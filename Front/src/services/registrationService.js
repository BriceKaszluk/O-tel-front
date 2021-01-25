import axios from 'axios';
import { history } from 'src/services/history';
export const registrationService = {

    handleRegistration : (last_name, first_name, email, phone_number, password) => {
        console.log('in registration service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/connection/signup',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({last_name, first_name, email, phone_number, password})
        };
        return axios(requestOptions)
    }
};

//TODO: la page /profil s'affiche dans l'url
//peut être enlevé le modal is-active pour raffrachir
//ou ien un eseEffect pourrait fonctionner



