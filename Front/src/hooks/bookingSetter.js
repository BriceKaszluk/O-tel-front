import { useAuthentication } from 'src/components/UserContext';
import { useEffect } from 'react';
import { getData } from 'src/hooks/dataFetcher';

//function to set booking infos and compare date
export const allBookings = async () => {

    const { bookingGestion, booking, oldBooking } = useAuthentication();

    //we get all the user bookings
    const allUserBookings = await getData.getAllBookings()
    if (allUserBookings[0].data !== undefined){
        if((booking || oldBooking) === null){
            //convert ending_date into comparable date
            allUserBookings[0].data.map(booking => {
                booking.ending_date = Date.parse(booking.ending_date);
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

            bookingGestion(filteredActualBookings, filteredOldBookings);
        }
    }

}

