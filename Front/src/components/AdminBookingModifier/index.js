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

export default ({modalActive, closeModal, informations, setterBeginDate, seeterEndingDate, first_date, last_date}) => {

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
                      id: informations.id,
                      begining_date: first_date,
                      ending_date: last_date
                    }}
                    validationSchema={Yup.object().shape({
                        begining_date: Yup.string().required('Veuillez entrer une date'),
                        ending_date: Yup.string().required('Veuillez entrer une date')
                    })}
                    onSubmit={(
                        { 
                        id,
                        begining_date,
                        ending_date
                        }, 
                        { setStatus, setSubmitting }) => {
                        setStatus();
                        {/* we call the handle update service */}
                        adminServices.handleUpdate(
                            id,
                            begining_date,
                            ending_date
                            )
                            .then((booking) => {
                                console.log(booking.data.data, 'renvoi api');
                            if (booking.data.errors) {
                                setStatus(booking.data.errors);
                                setSubmitting(false);
                            }
                            else {
                                //we update context and close modal
                                console.log(booking.data.data.begining_date, 'renvoi api');
                                setterBeginDate(new Date(booking.data.data.begining_date))
                                seeterEndingDate(new Date(booking.data.data.ending_date))
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
                                    />
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
