import axios from 'axios';

export const bookingService = {

    handleBooking: (last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id ) => {
    console.log('in booking service');

    const requestOptions = {
      method: 'POST',
      url: 'https://project-otel.herokuapp.com/reservation' ,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id }),
    };

    return axios(requestOptions);
  },

  deleteBooking: (id, last_name, first_name, email, phone_number, begining_date, ending_date, message) => {
    
    const requestOptions = {
        
        method: 'DELETE',
        url: `https://project-otel.herokuapp.com/reservation/${id}` ,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ last_name, first_name, email, phone_number, begining_date, ending_date, message}),
      };
      return axios(requestOptions);
  }

};
