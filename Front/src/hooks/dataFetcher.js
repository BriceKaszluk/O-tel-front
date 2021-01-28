import bddApiFetcher from './bddApiFetcher';
import { apiURL } from 'src/services/configAPI';

export const getData = {


    getAllBookings: async () => {    
        const bookings = await bddApiFetcher(apiURL.bookings, {init: []})
        return bookings
    },

    getAllNotices: async () => {
        const notices = await bddApiFetcher(apiURL.allNotices, {init: []})
        return notices
    },

    getAllUsers: async () => {
        const users = await bddApiFetcher(apiURL.users, {init: []})
        return users
    },

    getHousingOne: async () => {
        const housingOne = await bddApiFetcher(apiURL.housingOne, {init: []})
        return housingOne
    },

    getHousingTwo: async () => {
        const housingTwo = await bddApiFetcher(apiURL.housingTwo, {init: []})
        return housingTwo
    },

    getHousingThree: async () => {
        const housingThree = await bddApiFetcher(apiURL.housingThree, {init: []})
        return housingThree
    },

    getAllRoles: async () => {
        const roles = await bddApiFetcher(apiURL.housings, {init: []})
        return roles
    }
    
}
