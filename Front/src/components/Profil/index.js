import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//context
import { useAuthentication } from 'src/components/UserContext';
//component
import ProfilModifierModale from 'src/components/ProfilModifierModale';
//services
import { allBookings } from 'src/hooks/bookingSetter';
import { userServices } from 'src/services/userServices';
import { connexionService } from 'src/services/connexionService';
//scss
import './styles.scss';

export default () => {
    //to activate or not the modifier modale
    const [isActiveModifier, setIsActiveModifier] = useState(false);
    //context
    const { user, booking, oldBooking } = useAuthentication();
    
    const history = useHistory();
    //hooks that get all bookings of users
    allBookings();

    const fliterActualUserBookings = () => {
        return booking.filter(book => book.user_id === user.id);
    }

    const filterUserOldBookings = () => {
        if(oldBooking!==null){
            return oldBooking.filter(book => book.user_id === user.id);
        }
    }

    return(
        <div className="bcg2">
            <div className="bcg21">
                <title>Profil</title>
                <div className="nulo">
                    <div className="card-content profil__container">
                        {/* user informations */}
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
                                <div 
                                    className="mail">Mail: {user.email}
                                </div>
                                <div className="buttons__profil">
                                    <button 
                                        className="button is-primary is-rounded button__profil slide-fwd-center" 
                                        onClick={() => setIsActiveModifier(!isActiveModifier)}
                                        >modifier
                                    </button>
                                    {/* if modifier is active show the modifier modal */}
                                    {
                                    isActiveModifier ? 
                                        <ProfilModifierModale 
                                            modalActive={isActiveModifier} 
                                            closeModal={setIsActiveModifier} 
                                        /> : ''
                                    }
                                    {/* to delete the profile */}
                                    <button 
                                        className="button is-primary is-rounded slide-fwd-center" 
                                        onClick={() => {
                                            userServices.handleDelete(user.id)
                                            .then(confirm => {
                                                console.log(confirm, 'a bien été effacé'),
                                                connexionService.logout();
                                                history.go(0);
                                                error => {
                                                    console.log('erreur');
                                                }
                                            })
                                        }}
                                        >supprimer mon profil
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/*booking history section */}
                        <section className="card profil__section">

                            {/* actual bookings */}
                            <div>
                                <div className="title is-4">
                                    Réservation
                                </div>
                                {
                                booking!==null && fliterActualUserBookings().map(book => {
                                    return(
                                        <div key={book.id} className="card">
                                            <div>{book.house.house_name}</div>
                                            <div>Du {book.begining_date} au {book.ending_date}</div>
                                            {
                                                book.house!==null &&
                                                <div>{book.house.price} €</div>
                                            }
                                        </div>
                                    )
                                })
                                }
                                
                            </div>

                            {/* old bookings */}
                            <div>
                                <div className="title is-4">
                                    Historique
                                </div>
                                {
                                oldBooking!==null && filterUserOldBookings().map(booking => {
                                    return(
                                        <div key={booking.id} className="card">
                                            <div>{booking.house.house_name}</div>
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
        </div>
    )
    
};
