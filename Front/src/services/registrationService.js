import axios from 'axios';

export const registrationService = {

    handleRegistration : (last_name, first_name, email, phone_number, password, password_confirm) => {
        console.log('in registration service');

        const requestOptions = {
            method: 'GET',
            url: 'https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({last_name, first_name, email, phone_number, password, password_confirm})
        };
    
        return axios(requestOptions).then((response) => {
                console.log(response, 'réponse de l\'API pour la registration');
            })
    }
};




