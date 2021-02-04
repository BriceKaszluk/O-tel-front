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

  handleBookingAdmin: (last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id) => {
    console.log('in booking service handle booking admin');

    const requestOptions = {
      method: 'POST',
      url: 'https://project-otel.herokuapp.com/admin/reservation' ,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id }),
    };

    return axios(requestOptions);
  },

  deleteBookingAdmin: (id) => {
    console.log('in booking service delete method');

    const requestOptions = {
      method: 'DELETE',
      url: `https://project-otel.herokuapp.com/admin/reservation/${id}` ,
      headers: { 'Content-Type': 'application/json' },
    };

    return axios(requestOptions);
  },

  updateBookingAdmin: (id) => {
    console.log('in booking service patch method');

    const requestOptions = {
      method: 'PATCH',
      url: `https://project-otel.herokuapp.com/admin/reservation/${id}` ,
      headers: { 'Content-Type': 'application/json' },
    };

    return axios(requestOptions);
  },
};
