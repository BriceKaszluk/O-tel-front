import axios from 'axios';

export const userServices = {

  handleUpdate: (last_name, first_name, email, phone_number, user_id) => {
    console.log('in modify service');

    const requestOptions = {
      method: 'PATCH',
      url: `https://project-otel.herokuapp.com/connection/modify/${user_id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { last_name, first_name, email, phone_number, user_id }
    };

    return axios(requestOptions);
  },

  handleDelete: (user_id) => {
    console.log('in delete service');

    const requestOptions = {
      method: 'DELETE',
      url: `https://project-otel.herokuapp.com/connection/delete/${user_id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { user_id }
  };
    return axios(requestOptions);
  }
}