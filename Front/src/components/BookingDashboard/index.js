import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import BookingDetail from 'src/components/BookingDetail';
import { useAdminManagement } from 'src/components/AdminContext';
import { allBookings } from 'src/hooks/bookingSetter';
import './styles.scss';

const BookingDashboard = () => {

    const { adminActualBookings, adminOldsBookings } = useAdminManagement()
    
    allBookings();

    return (
    <div className="section">
        <div>
            <Link to="/booking_admin" className="button is-primary">Ajouter une réservation</Link>
        </div>
        
        <div className="columns is-multiline has-text-centered is-centered">
            {
            adminActualBookings !== null && adminActualBookings.map(booking => {
                    return (
                        <div key={booking.id}>
                            <BookingDetail actualBooking={booking}/>
                        </div>
                        ) 
            })
        }
            
        </div>

    </div>
    );
};

export default BookingDashboard;
