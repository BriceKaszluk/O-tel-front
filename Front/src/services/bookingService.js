import axios from 'axios';

export const bookingService = {

    handleBooking: (last_name, first_name, email, phone_number, dates, message) => {
    console.log('in connexion service');

    const requestOptions = {
      method: 'POST',
      url: 'https://project-otel.herokuapp.com/',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ last_name, first_name, email, phone_number, dates, message }),
    };

    return axios(requestOptions);
  },

};
