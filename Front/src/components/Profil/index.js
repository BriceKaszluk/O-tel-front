import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// context
import { useAuthentication } from 'src/components/UserContext';
// component
import ProfilModifierModale from 'src/components/ProfilModifierModale';
// services
import { allBookings } from 'src/hooks/bookingSetter';
import { userServices } from 'src/services/userServices';
import { connexionService } from 'src/services/connexionService';
// scss
import './styles.scss';

export default () => {
    //to activate or not the modifier modale
    const [isActiveModifier, setIsActiveModifier] = useState(false);
    //context
    const { user, booking, oldBooking } = useAuthentication();
    
    const history = useHistory();
    //hooks that get all bookings of users
    allBookings()
    console.log(booking, 'profil actual')
    console.log(oldBooking, 'profil old')
    
    const fliterActualUserBookings = () => {
        return booking.filter(book => book.user_id === user.id);
    }

    const filterUserOldBookings = () => {
        if(oldBooking!==null){
            return oldBooking.filter(book => book.user_id === user.id);
        }
    }

  return (
      <div className="hero profil">
          <div className="hero-body ">
              <h1 className="h1">Profil</h1>
              <div className="profil-details">
                  {/* user informations */}
                  <section className="card profil-detail">
                      <div className="card-header-title is-4">
                          Mon profil
                      </div>
                      <div className="card-content notification is-info is-light">
                          <p className="last_name">{user.last_name} {user.first_name}</p>
                          <p className="phone">Tel : {user.phone_number}</p>
                          <p className="mail">Mail : {user.email}</p>
                      </div>
                      <div className="card-footer">
                          <div className=""></div>
                              <button
                                        className="button is-primary is-rounded"
                                        onClick={() => setIsActiveModifier(!isActiveModifier)}
                              >Modifier
                              </button>

                              {/* if modifier is active show the modifier modal */}
                              {isActiveModifier ? (
                                  <ProfilModifierModale modalActive={isActiveModifier} closeModal={setIsActiveModifier} />
                              ) : ''}
                              {/* to delete the profile */}
                              <button
                                                        className="button is-primary is-rounded"
                                                        onClick={() => {
                                                          userServices.handleDelete(user.id)
                                                            .then((confirm) => {
                                                              console.log(confirm, 'a bien été effacé'),
                                                              connexionService.logout();
                                                              history.go(0);
                                                              (error) => {
                                                                console.log('erreur');
                                                              };
                                                            });
                                                        }}
                              >Supprimer mon profil
                              </button>

                      </div>
                  </section>

                  {/* booking history section */}
                  <section className="card profil-history">
                      <p className="card-header title is-4">
                          Réservation
                      </p>
                      {/* actual bookings */}
                      <div className="card reservation">
                          {
                                booking !== null && fliterActualUserBookings().map((book) => (
                                    <div key={book.id} className="notification is-light is-success">
                                        <p className="title is-4">{book.house.house_name}</p>
                                        <p className="subtitle is-6">Du {book.begining_date.toLocaleDateString()} au {book.ending_date.toLocaleDateString()}</p>
                                        {book.house !== null && <p>{book.house.price} €</p>}
                                    </div>
                                ))
                                }

                      </div>

                      {/* old bookings */}
                      <div className="card history">
                          <p className="card-header title is-4">
                              Historique
                          </p>
                          {oldBooking !== null && filterUserOldBookings().map((booking) => (
                              <div key={booking.id} className="notification is-light is-dark ">
                                  <p className="title is-4">{booking.house.house_name}</p>
                                  <p className="subtitle is-6">Du {booking.begining_date.toLocaleDateString()} au {booking.ending_date.toLocaleDateString()}</p>
                                  {
                                            booking.house !== null
                                            && <p>{booking.house.price} €</p>
                                        }

                              </div>
                          ))}
                      </div>
                  </section>
              </div>
          </div>
      </div>
  );
};
