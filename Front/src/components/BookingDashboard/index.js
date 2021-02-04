import React, { useState } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import { Link} from 'react-router-dom';
import BookingDetail from 'src/components/BookingDetail';
import './styles.scss';

const BookingDashboard = () => {
    const [results, setResults] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    
    function removeBooking(id) {
        const newResults = results;
        const index = newResults.findIndex(a => a.id === id);
    
        if (index === -1) return;
        newResults.splice(index, 1);
    
        setResults(newResults); // This will update the state and trigger a rerender of the components
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
                        <BookingDetail
                        removeBooking={removeBooking}
                        key={result.id}
                        booking_id={result.id}
                        house_name={result.house.house_name}
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
