import axios from 'axios';

export const connexionService = {

    handleConnexion : ( email, password) => {
        console.log('in registration service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/connection/log',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({email,  password})
        };
    
        return axios(requestOptions).then((response) => {
                console.log(response, 'réponse de l\'API pour la registration');
            })
    }
};
