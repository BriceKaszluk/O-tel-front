import React, { useState } from 'react'
import { bookingService } from 'src/services/bookingService'
import { Link, useHistory } from 'react-router-dom'
import './styles.scss'
import BookingDashboard from '../BookingDashboard'



export default (props) => {
    const history = useHistory()
    
    
    return (
        <div className='column' ref={props.id}>
            <div className='card dashboard-card'>
                <div className='card-content'>
                    <div className='columns'>
                        <div className='column dashboard-column'  >
                            Du : {props.begining_date} <br />
                            Au : {props.ending_date}
                        </div>
                        <div className='column dashboard-column' >
                            {props.customer_first_name}{' '}
                            {props.customer_last_name}
                        </div>
                        <div className='column dashboard-column'>
                            Booking ID : {props.booking_id}
                        </div>
                        <div className='column dashboard-column' >{props.customer_email}</div>
                        <div className='column dashboard-column' >
                            {props.customer_phone_number}
                        </div>
                        <div className='column dashboard-column' >{props.house_name}</div>
                        <div className='column dashboard-column'>
                            
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
