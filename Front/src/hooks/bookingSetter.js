import { useAuthentication } from 'src/components/UserContext';
import { useEffect } from 'react';
import { getData } from 'src/hooks/dataFetcher';

//function to set booking infos and compare date
export const allBookings = async () => {

    const reverseDate = (array) => {
        array.map(date => {
            const oldBegining_date = new Date(date.begining_date);
            const oldEnding_date = new Date (date.ending_date);
            date.begining_date = oldBegining_date.toLocaleDateString();
            date.ending_date = oldEnding_date.toLocaleDateString();
        })
    }

    const { bookingGestion, booking, oldBooking } = useAuthentication();

    //we get all the user bookings
    const allUserBookings = await getData.getAllBookings()
    if (allUserBookings[0].data !== undefined){
        if((booking || oldBooking) === null){
            //convert ending_date into comparable date
            allUserBookings[0].data.map(booking => {
                booking.ending_date = Date.parse(booking.ending_date);
                booking.begining_date = Date.parse(booking.begining_date);
            })
            const bookingsDate = allUserBookings[0].data;

            //we compare actual date to end date of bookings
            const actualDate = new Date().getTime();
            const filteredActualBookings = await bookingsDate.filter(booking => {
                return booking.ending_date > actualDate
            });
            const filteredOldBookings = await bookingsDate.filter(booking => {
                return booking.ending_date < actualDate
            });
            reverseDate(filteredActualBookings);
            reverseDate(filteredOldBookings);
            bookingGestion(filteredActualBookings, filteredOldBookings);
        }
    }

}

