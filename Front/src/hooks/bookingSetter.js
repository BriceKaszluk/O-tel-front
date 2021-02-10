import { useAuthentication } from 'src/components/UserContext';
import { useAdminManagement } from 'src/components/AdminContext';
import { getData } from 'src/hooks/dataFetcher';

//function to set booking infos and compare date
export const allBookings = async () => {

    const {adminSetUsersBookings} = useAdminManagement();
    const { bookingGestion, booking, oldBooking } = useAuthentication();

    //we get all the user bookings
    const allUserBookings = await getData.getAllBookings();

        console.log(allUserBookings, 'bk basic fetch')
        
        if (allUserBookings[0].data !== undefined){
            if((booking && oldBooking) === null){
                //convert ending_date into comparable date
                let bookingsDate = allUserBookings[0].data.map(booking => {
                    booking.begining_date = new Date(booking.begining_date);
                    booking.ending_date = new Date(booking.ending_date);
                    return booking;
            })
                console.log(bookingsDate, 'bk after parse')
            
                //we compare actual date to end date of bookings
                const actualDate = new Date();
                let filteredActualBookings = bookingsDate.filter(booking => {
                    return booking.ending_date > actualDate
                });
                let filteredOldBookings = bookingsDate.filter(booking => {
                    return booking.ending_date < actualDate
                });
                
                console.log(filteredActualBookings, 'bk filtered actual')
                console.log(filteredOldBookings, 'bk filtered old')

                bookingGestion(filteredActualBookings, filteredOldBookings);
                adminSetUsersBookings(filteredActualBookings, filteredOldBookings)
            }
        }
}

