import React, { useState } from 'react'
import { bookingService } from 'src/services/bookingService'
import { Link, useHistory } from 'react-router-dom'
import './styles.scss'
import BookingDashboard from '../BookingDashboard'

export default (props) => {
    const history = useHistory()
    const [begining_date, setBegining_date] = useState(props.begining_date)
    const [ending_date, setEnding_date] = useState(props.ending_date)
    const [customer_first_name, setCustomer_first_name] = useState(props.customer_first_name)
    const [customer_last_name, setCustomer_last_name] = useState(props.customer_last_name)
    const [booking_id, setBooking_id] = useState(props.booking_id)
    const [customer_phone_number, setCustomer_phone_number] = useState(props.customer_phone_number)
    const [house_name, setHouse_name] = useState(props.house_name)
    const [customer_email, setCustomer_email] = useState(props.customer_email)

    const handleChange = (event) => {
        setCustomer_first_name(event.target.textContent)
        // setCustomer_last_name(event.target.textContent)
        // setBegining_date(event.target.textContent)
        // setEnding_date(event.target.textContent)
        // setCustomer_phone_number(event.target.textContent)
        // setHouse_name(event.target.textContent)
        // setCustomer_email(event.target.textContent)
    }

    const updateBooking = (booking_id, customer_last_name, customer_first_name, customer_email, customer_phone_number, begining_date, ending_date, message, housing_id, user_id) => {
        console.log('in booking service patch method');

        const requestOptions = {
            method: 'PATCH',
            url: `https://project-otel.herokuapp.com/admin/reservation/${id}` ,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id }),
        };

        return axios(requestOptions);
    }
    
    
    return (
        <div className='column' ref={props.id}>
            <div className='card dashboard-card'>
                <div className='card-content'>
                    <div className='columns'>
                        <div className='column dashboard-column' contentEditable="true" >
                            Du : {begining_date} <br />
                            Au : {ending_date}
                        </div>
                        <div className='column dashboard-column' contentEditable="true">
                            {customer_first_name}{' '}
                            {customer_last_name}
                        </div>
                        <div className='column dashboard-column'>
                            Booking ID : {booking_id}
                        </div>
                        <div className='column dashboard-column' contentEditable="true">{customer_email}</div>
                        <div className='column dashboard-column' contentEditable="true">
                            {customer_phone_number}
                        </div>
                        <div className='column dashboard-column' contentEditable="true">{house_name}</div>
                        <div className='column dashboard-column'>
                            <button
                                className='button is-primary'
                                onClick={'#'}
                            >
                                Modifier
                            </button>
                        </div>
                        <div className='column dashboard-column'>
                            <button
                                className='button is-danger'
                                onClick={() => {
                                    props.removeBooking(props.booking_id),
                                        bookingService.deleteBookingAdmin(
                                            props.booking_id
                                        ),
                                        history.go(0)
                                }}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
