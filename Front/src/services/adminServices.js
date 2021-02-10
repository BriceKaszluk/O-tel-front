import axios from 'axios';

export const adminServices = {

  handleUpdate: (id, begining_date, ending_date) => {
    console.log('in admin update service');

    const requestOptions = {
      method: 'PATCH',
      url: `https://project-otel.herokuapp.com/admin/reservation/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { id, begining_date, ending_date }
    };

    return axios(requestOptions);
  },

  handleDelete: (booking_id) => {
    console.log('in delete service');
    if(confirm('Éte-vous sure de vouloir supprimer la réservation ?')) {
        const requestOptions = {
            method: 'DELETE',
            url: `https://project-otel.herokuapp.com/reservation/${booking_id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { booking_id }
        };
        return axios(requestOptions);
    }
    
  }
}
