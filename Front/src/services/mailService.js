import axios from 'axios';
export const mailService = {

    handleSubmit : (last_name, first_name, email, subject, message) => {
        console.log('in mail service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/connection/signup',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({last_name, first_name, email, subject, message})
        };
        return axios(requestOptions)
    }
};

