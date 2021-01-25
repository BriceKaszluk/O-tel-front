import axios from 'axios';

export const registrationService = {

    handleRegistration : (last_name, first_name, email, phone_number, password, password_confirm) => {
        console.log('in registration service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/connection/signup',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({last_name, first_name, email, phone_number, password, password_confirm})
        };
    
        return axios(requestOptions).then((response) => {
                console.log(response, 'réponse de l\'API pour la registration');
            })
    }
};




