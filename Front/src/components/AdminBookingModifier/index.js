import React, { useState } from 'react';
//components
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoadingSpinner from 'src/components/LoadingSpinner';
import DatePickerField from 'src/components/DatePickerField';
//context
import { useAdminManagement } from 'src/components/AdminContext';
//services
import { adminServices } from 'src/services/adminServices';
//scss
import './styles.scss';

export default ({modalActive, closeModal, informations, actualDate, endingDate}) => {

    const { setLoading } = useAdminManagement();

    console.log(informations, 'infos');

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
                    <p className="modal-card-title">Modification de la réservation</p>
                </div>
                {/* settings of formik */}
                <Formik
                    initialValues={{
                      first_name: informations.user.first_name,
                      last_name: informations.user.last_name,
                      email: informations.user.email,
                      phone_number: informations.user.phone_number,
                      user_id: informations.user.id,
                      house_name: informations.house.house_name,
                      begining_date: informations.begining_date,
                      ending_date: informations.ending_date
                    }}
                    validationSchema={Yup.object().shape({
                        first_name: Yup.string().required('veuillez entrer un prénom'),
                        last_name: Yup.string().required('veuillez entrer un nom'),
                        email: Yup.string().required('veuillez entrer un email valide'),
                        phone_number: Yup.string().required('veuillez entrer un numéro de téléphone'),
                        begining_date: Yup.string('Veuillez entrer une date'),
                        ending_date: Yup.string('Veuillez entrer une date')
                    })}
                    onSubmit={(
                        { 
                        last_name, 
                        first_name, 
                        email, 
                        phone_number, 
                        user_id,
                        house_name,
                        begining_date,
                        ending_date
                        }, 
                        { setStatus, setSubmitting }) => {
                        setStatus();
                        {/* we call the handle update service */}
                        adminServices.handleUpdate(
                            last_name, 
                            first_name, 
                            email, 
                            phone_number, 
                            user_id,
                            house_name,
                            begining_date,
                            ending_date
                            )
                            .then((user) => {
                            if (user.data.errors) {
                                setStatus(user.data.errors);
                                setSubmitting(false);
                            }
                            else {
                                //we update context and close modal
                                setLoading(false);
                                closeModal(!modalActive);
                            }
                            });
                        }
                    }
                >
                    {/* end of formik settings */}

                    {({
                      errors, status, touched, isSubmitting, values, setFieldValue
                    }) => (
                        <Form>
                            <section className="modal-card-body">
                                <div className="field">
                                    <label
                                        htmlFor="begining_date"
                                        className="label"
                                    >Départ
                                    </label>
                                    <DatePickerField
                                        name="begining_date"
                                        value={values.begining_date}
                                        onChange={setFieldValue}
                                        dateFormat='MM/dd/yyyy'
                                    />
                                    <label
                                        htmlFor="ending_date"
                                        className="label"
                                    >Arrivée
                                    </label>
                                    <DatePickerField
                                        name="ending_date"
                                        value={values.ending_date}
                                        onChange={setFieldValue}
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </div>
                                <div className="field">
                                    <div className="form-group field">
                                        <label htmlFor="first_name" className="label">Prénom</label>
                                        <Field name="first_name" type="text" className={`form-control input${errors.first_name && touched.first_name ? ' is-invalid' : ''}`} />
                                        <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="last_name" className="label">Nom</label>
                                        <Field name="last_name" type="text" className={`form-control input${errors.first_name && touched.last_name ? ' is-invalid' : ''}`} />
                                        <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="email" className="label">Email</label>
                                        <Field name="email" type="email" className={`form-control input${errors.email && touched.email ? ' is-invalid' : ''}`} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="phone_number" className="label">Téléphone</label>
                                        <Field name="phone_number" type="tel" className={`form-control input${errors.phone_number && touched.phone_number ? ' is-invalid' : ''}`} />
                                        <ErrorMessage name="phone_number" component="div" className="invalid-feedback" />
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
