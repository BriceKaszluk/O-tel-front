import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import AdminBookingModifier from 'src/components/AdminBookingModifier'
import { adminServices } from 'src/services/adminServices';
import { useToasts } from 'react-toast-notifications';

export default ({actualBooking}) => {

    const history = useHistory()
    const { addToast } = useToasts()
    const [isActiveModifier, setIsActiveModifier] = useState(false);
    const [beginDate, setBeginDate] = useState(actualBooking.begining_date);
    const [oldDate, setOldDate] = useState(actualBooking.ending_date);
console.log(beginDate, 'la begin state')
 /*   const updateBooking = (booking_id, customer_last_name, customer_first_name, customer_email, customer_phone_number, begining_date, ending_date, message, housing_id, user_id) => {
        console.log('in booking service patch method');

        const requestOptions = {
            method: 'PATCH',
            url: `https://project-otel.herokuapp.com/admin/reservation/${id}` ,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id }),
        };

        return axios(requestOptions);
    }*/
    return (
        <div key={actualBooking.id}>
                <div className='column'>
                <div className='card dashboard-card'>
                    <div className='card-content'>
                        <div className='columns'>
                            <div className='column dashboard-column'>
                                Du : {beginDate.toLocaleDateString()}
                            </div>
                            <div className='column dashboard-column'>
                                Au : {oldDate.toLocaleDateString()}
                            </div>
                            <div className='column dashboard-column'>
                                {actualBooking.user.first_name}{' '}
                                {actualBooking.user.last_name}
                            </div>
                            <div className='column dashboard-column'>
                                Booking ID : {actualBooking.id}
                            </div>
                            <div className='column dashboard-column'>{actualBooking.user.email}</div>
                            <div className='column dashboard-column'>
                                {actualBooking.user.phone_number}
                            </div>
                            <div className='column dashboard-column'>{actualBooking.house.house_name}</div>
                            <div className='column dashboard-column'>
                                <button
                                    className='button is-primary'
                                    onClick={() => setIsActiveModifier(!isActiveModifier)}
                                >
                                    Modifier
                                </button>
                                {
                                isActiveModifier ? 
                                    <AdminBookingModifier 
                                    modalActive={isActiveModifier} 
                                    closeModal={setIsActiveModifier}
                                    informations={actualBooking} 
                                    setterBeginDate={setBeginDate}
                                    seeterEndingDate={setOldDate}
                                    first_date={actualBooking.begining_date}
                                    last_date={actualBooking.ending_date}
                                /> : ''
                                }
                            </div>
                            <div className='column dashboard-column'>
                                <button
                                    className='button is-danger'
                                    onClick={() => {
                                        adminServices.handleDelete(actualBooking.id)
                                        .then(confirm => {
                                            console.log(confirm, 'a bien été effacé'),
                                            history.go(0);
                                            error => {
                                                console.log('erreur');
                                            }
                                        })
                                    }}
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
