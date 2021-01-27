import bddApiFetcher from './bddApiFetcher';
import { apiURL } from 'src/services/configAPI';

export const getData = {


    getAllBookings: async () => {    
        const bookings = await bddApiFetcher(apiURL.bookings, {init: []})
        return bookings
    },

    getAllNotices: async () => {
        const notices = await bddApiFetcher(apiUrl.notices, {init: []})
        return notices
    },

    getAllUsers: async () => {
        const users = await bddApiFetcher(apiUrl.users, {init: []})
        return users
    },

    getAllHousings: async () => {
        const housings = await bddApiFetcher(apiURL.allHousings, {init: []})
        return housings
    },

    getAllRoles: async () => {
        const roles = await bddApiFetcher(apiUrl.housings, {init: []})
        return roles
    }
    
}
