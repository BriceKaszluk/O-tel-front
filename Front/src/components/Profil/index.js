import React, { useEffect } from 'react';
import { useAuthentication } from 'src/components/UserContext';
import { allBookings } from 'src/hooks/bookingSetter';
import './styles.scss';

export default () => {

    const { user, booking, oldBooking } = useAuthentication();
    allBookings();
    console.log(user);

    const fliterActualUserBookings = () => {
        return booking.filter(book => book.user.id === user.id);
    }

    const filterUserOldBookings = () => {
        if(oldBooking!==null){
            return oldBooking.filter(book => book.user.id === user.id);
        }
    }

    console.log(booking, 'actual booking');
    console.log(oldBooking, 'old booking');
    return(
        <div>
            <title>Profil</title>
            <div className="nul">
                <div className="card-content profil__container">

                    {/* Section left */}
                    <section className="card profil__section">
                        <div className="title is-4 profil__main__head">
                            MON PROFIL
                        </div>
                        <div className="card profil__main__body">

                            <span className="full_name">
                                <div className="last_name">{user.last_name}</div>
                                <div className="first_name">{user.first_name}</div>
                            </span>
                            <div className="phone">Tel: {user.phone_number}</div>
                            <div className="mail">Mail: {user.email}</div>

                        </div>
                    </section>

                    {/* Section right */}
                    <section className="card profil__section">

                        {/* First part: booking */}
                        <div>
                            <div className="title is-4">
                                Réservation
                            </div>
                            {
                                booking!==null && fliterActualUserBookings().map(booking => {
                                    return(
                                        <div key={booking.id} className="card">
                                            <div>Gîtes grand soleil</div>
                                            <div>Du {booking.begining_date} au {booking.ending_date}</div>
                                            {
                                                booking.house!==null &&
                                                <div>{booking.house.price} €</div>
                                            }
                                            
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                        {/* First part: history */}
                        <div>
                            <div className="title is-4">
                                Historique
                            </div>
                            {
                                oldBooking!==null && filterUserOldBookings().map(booking => {
                                    return(
                                        <div key={booking.id} className="card">
                                            <div>Gîtes grand soleil</div>
                                            <div>Du {booking.begining_date} au {booking.ending_date}</div>
                                            {
                                                booking.house!==null &&
                                                <div>{booking.house.price} €</div>
                                            }
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
    
};
