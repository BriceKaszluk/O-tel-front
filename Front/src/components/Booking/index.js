import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { bookingService } from 'src/services/bookingService'
import LoadingSpinner from 'src/components/LoadingSpinner'
import 'react-datepicker/dist/react-datepicker.css'
import { useAuthentication } from 'src/components/UserContext'
import DatePickerField from 'src/components/DatePickerField'
import axios from 'axios'
import subDays from 'date-fns/subDays'

// import
import './styles.scss'

export default (props) => {
    const history = useHistory();
    const { user } = useAuthentication()
    const houseId = props.match.params.houseId

    const [result, setResult] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)

    //Methode pour avoir toutest les réservations du logement
    // useEffect(() => {
    //     axios
    //         .get(`https://project-otel.herokuapp.com/hebergement/${houseId}/reservation`)
    //         .then((response) => {
    //             setResult(response.data.data), setDataLoaded(true)
    //         })
    //         .catch((error) => {
    //             console.log('error', error)
    //         }),
    //         []
    // })

    return (
        <div>
            <Formik
                initialValues={{
                    last_name: user.last_name,
                    first_name: user.first_name,
                    email: user.email,
                    phone_number: user.phone_number,
                    begining_date: '',
                    ending_date: '',
                    message: '',
                    user_id: user.id,
                    housing_id: houseId
                }}
                validationSchema={Yup.object().shape({
                    begining_date: Yup.string('Veuillez entrer une date'),
                    ending_date: Yup.string('Veuillez entrer une date'),
                    message: Yup.string().required(
                        'Veuillez taper votre message'
                    )
                })}
                onSubmit={(
                    {
                        last_name,
                        first_name,
                        email,
                        phone_number,
                        begining_date,
                        ending_date,
                        message,
                        housing_id,
                        user_id
                    },
                    { setStatus, setSubmitting }
                ) => {
                    setStatus()
                    console.log('submitting form')
                    bookingService.handleBooking(
                        last_name,
                        first_name,
                        email,
                        phone_number,
                        begining_date,
                        ending_date,
                        message,
                        housing_id,
                        user_id
                    )
                    setSubmitting(false)
                }}
            >
                {({ errors, status, touched, isSubmitting, values, setFieldValue }) => (
                    <Form>
                        {/* BEGIN AND END DATE */}
                        <div className='form-group-field'>
                            <div className='columns'>
                                <div className='column'>
                                    <label
                                        htmlFor='begining_date'
                                        className='label'
                                    >
                                        Arrivée
                                    </label>
                                    <DatePickerField
                                        name='begining_date'
                                        value={values.begining_date}
                                        onChange={setFieldValue}
                                    />
                                </div>
                                <div className='column'>
                                    <label
                                        htmlFor='ending_date'
                                        className='label'
                                    >
                                        Départ
                                    </label>
                                    <DatePickerField
                                        name='ending_date'
                                        value={values.ending_date}
                                        onChange={setFieldValue}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* MORE INFORMATIONS */}
                        <div className='form-group-field'>
                            <label htmlFor='message' className='label'>
                                Message
                            </label>
                            <Field
                                component='textarea'
                                name='message'
                                type='textarea'
                                className='Rounded Medium textarea'
                            />
                            <ErrorMessage
                                name='message'
                                component='div'
                                className='invalid-feedback'
                            />
                        </div>
                        {/* TERMS AND CONDITIONS CHECKBOX */}
                        <div className='form-group-field'>
                            <Field
                                type='checkbox'
                                name='acceptTerms'
                                className={
                                    'form-check-input checkbox' +
                                    (errors.acceptTerms && touched.acceptTerms
                                        ? ' is-invalid'
                                        : '')
                                }
                            />
                            <span className='acceptTerm_p'> J'accepte les</span>
                            <Link
                                to='/logement2'
                                className='terms_and_conditions'
                            >
                                termes et conditions
                            </Link>
                            <ErrorMessage
                                name='acceptTerms'
                                component='div'
                                className='invalid-feedback'
                            />
                        </div>
                        <footer className='form-group modal-card-foot'>
                            <button
                                type='submit'
                                className='button is-success'
                                disabled={isSubmitting}
                            >
                                Réserver ce logement
                            </button>
                            {isSubmitting && <LoadingSpinner />}
                            <button
                                className="button"
                                onClick={(event) => {
                                    history.push('/');
                                }}
                                >Annuler
                            </button>
                            {status && (
                                <div className={'alert alert-danger'}>
                                    {status}
                                </div>
                            )}
                        </footer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
