import React from 'react';
//components
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoadingSpinner from 'src/components/LoadingSpinner';
import DatePickerField from 'src/components/DatePickerField'
//context
import { useAuthentication } from 'src/components/UserContext';
//scss
import './styles.scss';
import { bookingService } from '../../services/bookingService';

export default (props, {modalActive, closeModal}) => {

    return(
        
    <div className="modal is-active">
        {/* if click out of modal, will close it */}
        <div
            className="modal-background"
            onClick={(event) => {
            closeModal(!modalActive);
            }}
        />
        <div className="modal-content">
            <div className="modal-card">
                <div className="modal-card-head">
        <p className="modal-card-title"> Réservation n° {props.booking_id}, {props.customer_last_name}</p>
                </div>
                {/* settings of formik */}
                <Formik
                    initialValues={{
                        first_name: props.customer_first_name,
                        last_name: props.customer_last_name,
                        email: props.customer_email,
                        phone_number: props.customer_phone_number,
                        begining_date: props.begining_date,
                        ending_date: props.ending_date,
                        house_name: props.house_name,
                        booking_id: props.booking_id
                    }}
                    validationSchema={Yup.object().shape({
                        last_name: Yup.string().required(
                            'veuillez entrer un nom valide'
                        ),
                        first_name: Yup.string().required(
                            'veuillez entrer un prénom valide'
                        ),
                        phone_number: Yup.string().required(
                            'veuillez entrer un numéro de téléphone valide'
                        ),
                        email: Yup.string().required(
                            'veuillez entrer un email valide'
                        ),
                        begining_date: Yup.string().required(
                            'veuillez sélectionner une date valide'
                        ),
                        ending_date: Yup.string().required(
                            'veuillez sélectionner une date valide'
                        ),
                        house_name: Yup.string().required(
                            'veuillez sélectionner une date valide'
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
                        house_name,
                        booking_id, 
                       
                        }, 
                        { setStatus, setSubmitting }) => {
                        setStatus();
                        {/* we call the handle update service */}
                        bookingService.updateBookingAdmin(
                            last_name, 
                            first_name, 
                            email, 
                            phone_number, 
                            begining_date,
                            ending_date,
                            house_name,
                            booking_id,
                            
                            )
                            .then((user) => {
                            if (user.data.errors) {
                                setStatus(user.data.errors);
                                setSubmitting(false);
                            }
                            else {
                                //we update context and close modal
                                closeModal(!modalActive);
                            }
                            });
                        }
                    }
                >
                    {/* end of formik settings */}

                    {({
                      errors, status, touched, isSubmitting, setFieldValue
                    }) => (
                        <Form>
                            <section className='modal-card-body'>
                                    <div className='field'>
                                        <div className='form-group field'>
                                            <label
                                                htmlFor='last_name'
                                                className='label'
                                            >
                                                Nom
                                            </label>
                                            <Field
                                                name='last_name'
                                                type='last_name'
                                                className={`form-control input${
                                                    errors.last_name &&
                                                    touched.last_name
                                                        ? ' is-invalid'
                                                        : ''
                                                }`}
                                            />
                                            <ErrorMessage
                                                name='last_name'
                                                component='div'
                                                className='invalid-feedback'
                                            />
                                        </div>
                                        <div className='form-group field'>
                                            <label
                                                htmlFor='first_name'
                                                className='label'
                                            >
                                                Prénom
                                            </label>
                                            <Field
                                                name='first_name'
                                                type='first_name'
                                                className={`form-control input${
                                                    errors.first_name &&
                                                    touched.first_name
                                                        ? ' is-invalid'
                                                        : ''
                                                }`}
                                            />
                                            <ErrorMessage
                                                name='first_name'
                                                component='div'
                                                className='invalid-feedback'
                                            />
                                        </div>
                                        <div className='form-group field'>
                                            <label
                                                htmlFor='phone_number'
                                                className='label'
                                            >
                                                Téléphone
                                            </label>
                                            <Field
                                                name='phone_number'
                                                type='tel'
                                                className={`form-control input${
                                                    errors.phone_number &&
                                                    touched.phone_number
                                                        ? ' is-invalid'
                                                        : ''
                                                }`}
                                            />
                                            <ErrorMessage
                                                name='phone_number'
                                                component='div'
                                                className='invalid-feedback'
                                            />
                                        </div>
                                        <div className='form-group field'>
                                            <label
                                                htmlFor='email'
                                                className='label'
                                            >
                                                Email
                                            </label>
                                            <Field
                                                name='email'
                                                type='email'
                                                className={`form-control input${
                                                    errors.email &&
                                                    touched.email
                                                        ? ' is-invalid'
                                                        : ''
                                                }`}
                                            />
                                            <ErrorMessage
                                                name='email'
                                                component='div'
                                                className='invalid-feedback'
                                            />
                                        </div>
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
                                                        value={
                                                            props.begining_date
                                                        }
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
                                                        value={
                                                            props.ending_date
                                                        }
                                                        onChange={setFieldValue}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group field'>
                                            <label
                                                htmlFor='house_name'
                                                className='label'
                                            >
                                                Nom
                                            </label>
                                            <Field
                                                name='house_name'
                                                type='house_name'
                                                className={`form-control input${
                                                    errors.house_name &&
                                                    touched.house_name
                                                        ? ' is-invalid'
                                                        : ''
                                                }`}
                                            />
                                            <ErrorMessage
                                                name='last_name'
                                                component='div'
                                                className='invalid-feedback'
                                            />
                                        </div>
                                    </div>
                                </section>

                            <footer className="form-group modal-card-foot">
                                <button type="submit" className="button is-success" disabled={isSubmitting}>modifier</button>
                                {isSubmitting && <LoadingSpinner />}
                                <button type="button"
                                    className="button"
                                    onClick={(event) => {
                                        closeModal(!modalActive);
                                    }}
                                >Annuler
                                </button>
                                {status && <div className="alert alert-danger">{status}</div>}
                            </footer>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>

)};
