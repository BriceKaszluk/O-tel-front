import React, {useState} from 'react';
import { BookingService } from 'src/services/bookingService';
import './styles.scss';

export default (props) => {

    const [isActiveRegistration, setIsActiveRegistration] = useState(false);
   

    const handleDeleteClick = () => {
        if(confirm("étes vous sure ?")) {
            // bookingService.deleteBooking(props);
        };
    }

    return (
        
    <div className="column" ref={props.id}>
        <div className="card ">
            <div className="card-content--editable" contentEditable>
                <p className="">
                Du : {props.begining_date} Au : {props.ending_date}
                </p>
                <p className="title is-4">
                    {props.customer_first_name} {props.customer_last_name}
                </p>
                <p className="subtitle is-6">
                    {props.customer_email}
                </p>
                <p className="subtitle is-6">
                    {props.customer_phone_number}
                </p>
                <p className="message">
                    House : {props.house_id}
                </p>
            </div>
            <div className= "buttons">
                <button className="button is-danger" onClick={handleDeleteClick}>Supprimer</button>
            </div>
        </div>
    </div>
    )
    
};

