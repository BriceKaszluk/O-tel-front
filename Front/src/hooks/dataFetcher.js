import bddApiFetcher from './bddApiFetcher';
import { apiURL } from 'src/services/configAPI';

export const getData = {

    getAllBookings: () => {    
        const bookings = bddApiFetcher(apiURL.bookings, {init: []})
        return bookings
    },

    getAllNotices: () => {
        const notices = bddApiFetcher(apiUrl.notices, {init: []})
        return notices
    },

    getAllUsers: () => {
        const users = bddApiFetcher(apiUrl.users, {init: []})
        return users
    },

    getAllHousings: () => {
        const housings = bddApiFetcher(apiURL.oneHousing, {init: []})
        return housings
    },

    getAllRoles: () => {
        const roles = bddApiFetcher(apiUrl.housings, {init: []})
        return roles
    }
    
}
