import React from 'react';
import { useAuthentication } from 'src/components/UserContext';
import './styles.scss';

export default () => {

    const { user } = useAuthentication();
    console.log(user);

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
                            <div className="card">
                                <div>Gîtes grand soleil</div>
                                <div>Du 13/04/2021 au 20/04/2021</div>
                                <div>Paiement: A régler sur place</div>
                            </div>
                        </div>

                        {/* First part: history */}
                        <div>
                            <div className="title is-4">
                                Réservation
                            </div>
                            <div className="card">
                                <div>Gîtes lounge</div>
                                <div>Du 13/06/2019 au 20/06/2019</div>
                                <div>Paiement: réglé sur place  -  Espèce</div>
                            </div>
                            <div className="card">
                                <div>Gîtes extrem zen</div>
                                <div>Du 01/07/2020 au 20/08/2020</div>
                                <div>Paiement: réglé sur place  -  CB</div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
    
};
