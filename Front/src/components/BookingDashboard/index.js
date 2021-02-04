import React, { useState } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import { Link } from 'react-router-dom';
import BookingDetail from 'src/components/BookingDetail';
import './styles.scss';

const BookingDashboard = () => {
    const [results, setResults] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    
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
            <Link to="/booking" className="button is-primary">Ajouter une réservation</Link>  
        </div>
        
        <div className="columns is-multiline has-text-centered">
                {
                    dataLoaded && results.map((result) => (
                        <BookingDetail
                        key={result.id}
                        booking_id={result.id}
                        begining_date={result.begining_date }
                        ending_date={result.ending_date }
                        customer_phone_number={result.user.phone_number}
                        customer_first_name={result.user.first_name}
                        customer_last_name={result.user.last_name}
                        customer_email={result.user.email}
                        />
                    ))
                }
        </div>

    </div>
    );
};

export default BookingDashboard;
