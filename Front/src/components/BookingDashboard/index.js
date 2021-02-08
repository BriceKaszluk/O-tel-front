import React, { useState } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import { Link} from 'react-router-dom';
import BookingDetail from 'src/components/BookingDetail';
import BookingUpdate from 'src/components/BookingUpdate'
import { useAuthentication } from 'src/components/UserContext';
import DatePicker from 'react-datepicker'
import { useTranslation } from 'react-i18next';
import './styles.scss';

const BookingDashboard = () => {
    const [results, setResults] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isActiveModalConnexion, setIsActiveModalConnexion ] =useState(false)
    const { t } = useTranslation();
    
    const removeBooking =(id) => {
        const newResults = results;
        const index = newResults.findIndex(a => a.id === id);
        if (index === -1) return;
        newResults.splice(index, 1);
        setResults(newResults); 
    }

    
    const dispatch = async () => {
        const result = await getData.getAllBookings();
        if (result[0].data !== undefined) {
            const { data } = result[0];
            setResults(data);
            setDataLoaded(true);
            console.log(results)
        }
    };

    dispatch();

    return (
    <div className="section">
        <div>
            <Link to="/booking_admin" className="button is-primary">Ajouter une réservation</Link>  
        </div>
        
        <div className="columns is-multiline has-text-centered is-centered">
                {
                    dataLoaded && results.map((result) => (

                        <div key={result.id}>
                        <BookingDetail
                        removeBooking={removeBooking}
                        booking_id={result.id}
                        house_name={result.house.house_name}
                        begining_date={result.begining_date }
                        ending_date={result.ending_date }
                        customer_phone_number={result.user.phone_number}
                        customer_first_name={result.user.first_name}
                        customer_last_name={result.user.last_name}
                        customer_email={result.user.email}
                        />
                        <a className="navbar-item" onClick={() => setIsActiveModalConnexion(!isActiveModalConnexion)}>Modifier</a>
                            {isActiveModalConnexion ? 
                                <BookingUpdate 
                                    booking_id={result.id}
                                    house_name={result.house.house_name}
                                    begining_date={result.begining_date }
                                    ending_date={result.ending_date }
                                    customer_phone_number={result.user.phone_number}
                                    customer_first_name={result.user.first_name}
                                    customer_last_name={result.user.last_name}
                                    customer_email={result.user.email}
                            /> : ''}
                        </div>
                    ))
                    
                }
                
        </div>

    </div>
    );
};

export default BookingDashboard;
