import React, {useState} from 'react';
import { bookingService } from 'src/services/bookingService';
import './styles.scss';

export default (props) => {


        return (
        
            <div className="column" ref={props.id}>
                <div className="card ">
                    <div className="card-content" >
                        <p className="">
                        Du : {props.begining_date} Au : {props.ending_date}
                        </p>
                        <p className="title is-4">
                            {props.customer_first_name} {props.customer_last_name}
                        </p>
                        <p className="title is-4">
                           ID : {props.booking_id}
                        </p>
                        <p className="subtitle is-6">
                            {props.customer_email}
                        </p>
                        <p className="subtitle is-6">
                            {props.customer_phone_number}
                        </p>
                        <p className="message">
                            House : {props.house_name}
                        </p>
                    </div>
                    <div className= "buttons">
                        <button className="button is-danger" onClick={() => {bookingService.deleteBooking(props.booking_id)} }>Supprimer</button>
                    </div>
                </div>
            </div>            
        )


};

