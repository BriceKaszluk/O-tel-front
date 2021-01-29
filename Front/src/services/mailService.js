import axios from 'axios';
export const mailService = {

    handleSubmit : (name, email, subject, message) => {
        console.log('in mail service');

        const requestOptions = {
            method: 'POST',
            url: 'https://project-otel.herokuapp.com/contact',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({name, email, subject, message})
        };
        return axios(requestOptions)
    }
};
