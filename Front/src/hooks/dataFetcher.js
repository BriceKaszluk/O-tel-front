import { apiURL } from 'src/services/configAPI';
import bddApiFetcher from './bddApiFetcher';

export const getData = {

  getAllBookings: async () => {
    const bookings = await bddApiFetcher(apiURL.bookings, { init: [] });
    return bookings;
  },

  getAllNotices: async () => {
    const notices = await bddApiFetcher(apiURL.allNotices, { init: [] });
    return notices;
  },

  getAllUsers: async () => {
    const users = await bddApiFetcher(apiURL.users, { init: [] });
    return users;
  },

  getAllHousing: async () => {
    const housings = await bddApiFetcher(apiURL.allHousings, { init: [] });
    return housings;
  },

  getOneHousing: async (id) => {
      console.log('id :', id)
    const housings = await bddApiFetcher(`https://project-otel.herokuapp.com/hebergement/${id}`, { init: [] });
    console.log('housing', housings)
    return housings;
    
  },



  getAllRoles: async () => {
    const roles = await bddApiFetcher(apiURL.housings, { init: [] });
    return roles;
  },

};
