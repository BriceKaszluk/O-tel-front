import axios from 'axios';

export const connexionService = {

    handleConnexion : ( email, password) => {
        console.log('in connexion service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/connection/log',
            headers: { 'Content-Type': 'application/json' },
            data: {email,  password}
        };
    
        return axios(requestOptions)
    }
};
