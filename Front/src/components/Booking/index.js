import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import { bookingService } from 'src/services/bookingService';
import LoadingSpinner from 'src/components/LoadingSpinner'
import "react-datepicker/dist/react-datepicker.css";
import { useAuthentication } from 'src/components/UserContext';



// import
import './styles.scss';

export default () => {

    const { user } = useAuthentication();
    
    const DatePickerField = ({ name, value, onChange }) => {
        return (
            <DatePicker
                selected={(value && new Date(value)) || null}
                onChange={val => {
                    onChange(name, val)
                }}
                dateFormat="dd/MM/yyyy"
                />
        )
    }

    return (

        <div>   
            <Formik
                initialValues={{
                    last_name: '',
                    first_name: '',
                    email: '',
                    phone_number: '',
                    startDate: '',
                    endDate:'',
                    message: '',
                    user_id: user.id,
                    housing_id: '',
                }}
                validationSchema={Yup.object().shape({
                    last_name: Yup.string().required('Veuillez entrer un nom '),
                    first_name: Yup.string().required('Veuillez entrer un prénom'),
                    email: Yup.string().email().required('Veuillez entrer un email valide'),
                    phone_number: Yup.string().required('Veuillez entrer un numéro valide'),
                    startDates: Yup.string(),
                    endDates: Yup.string(),
                    message: Yup.string().required('Veuillez taper votre message'),
                })}
                onSubmit={({
                    last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id
                }, { setStatus, setSubmitting }) => {
                    setStatus();
                    console.log('submitting form');
                    bookingService.handleBooking(last_name, first_name, email, phone_number, begining_date, ending_date, message, housing_id, user_id);
                    setSubmitting(false);
                }}
            >
               

                {({ errors, touched, isSubmitting, values, setFieldValue }) => (
                    <Form>
                        {/* FIRST NAME */}
                        <div className="field">
                            <div className="form-group field">
                            <label htmlFor="last_name" className="label">Nom</label>
                            <Field name="last_name" type="text" className={'form-control input' + (errors.first_name && touched.last_name ? ' is-invalid' : '')} />
                            <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        {/* LAST NAME */}
                        <div className="form-group-field">
                            <label htmlFor="first_name" className="label">Prénom</label>
                            <Field name="first_name" type="text" className={'form-control input' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                            <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                        </div>
                        {/* EMAIL */}
                        <div className="form-group-field">
                            <label htmlFor="email" className="label">Email</label>
                            <Field name="email" type="email" className={'form-control input' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        {/* PHONE NUMBER */}
                        <div className="form-group-field">
                            <label htmlFor="phone_number" className="label">Téléphone</label>
                            <Field name="phone_number" type="tel" className={'form-control input' + (errors.phone_number && touched.phone_number ? ' is-invalid' : '')} />
                            <ErrorMessage name="phone_number" component="div" className="invalid-feedback" />
                        </div>
                        {/* BEGIN AND END DATE */}
                        <div className="form-group-field">
                            <div className="columns">
                                <div className="column">
                                <label htmlFor="begining_date" className="label">Arrivée</label>
                                    <DatePickerField name="begining_date" value={values.begining_date} onChange={setFieldValue}/>
                                </div>
                                <div className="column">
                                <label htmlFor="ending_date" className="label">Départ</label>
                                    <DatePickerField name="ending_date" value={values.ending_date} onChange={setFieldValue} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group-field">
                            <label htmlFor="house_id" className="label">House_id</label>
                            <Field name="housing_id" type="housing_id" className={'form-control input' + (errors.housing_id && touched.housing_id ? ' is-invalid' : '')} />
                            <ErrorMessage name="housing_id" component="div" className="invalid-feedback" />
                        </div>
                        {/* MORE INFORMATIONS */}
                        <div className="form-group-field">
                            <label htmlFor="message" className="label">Message</label>
                            <Field component="textarea" name="message" type="textarea" className="Rounded Medium textarea" />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>
                        {/* TERMS AND CONDITIONS CHECKBOX */}
                        <div className="form-group-field">
                            <Field type="checkbox" name="acceptTerms" className={'form-check-input checkbox' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <span className="acceptTerm_p"> J'accepte les</span>
                            <Link to="/logement2" className="terms_and_conditions">termes et conditions</Link>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <footer className="form-group modal-card-foot">
                            <button to="/" type="submit" className="button is-success" disabled={isSubmitting}>envoyer</button>
                            { isSubmitting && <LoadingSpinner /> }
                            <Link to="/">Annuler</Link>
                            {status && <div className={'alert alert-danger'}>{status}</div> }
                        </footer>
                    </Form>
                )}
            </Formik>
        </div> 
    )
}
