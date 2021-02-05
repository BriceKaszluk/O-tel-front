import React from 'react';
//components
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoadingSpinner from 'src/components/LoadingSpinner';
//context
import { useAuthentication } from 'src/components/UserContext';
//services
import { userServices } from 'src/services/userServices';
//scss
import './styles.scss';

export default ({modalActive, closeModal}) => {
    //context
    const { user, updateUser } = useAuthentication();

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
                    <p className="modal-card-title">Modification du profil</p>
                </div>
                {/* settings of formik */}
                <Formik
                    initialValues={{
                      first_name: user.first_name,
                      last_name: user.last_name,
                      email: user.email,
                      phone_number: user.phone_number,
                      user_id: user.id
                    }}
                    validationSchema={Yup.object().shape({
                        first_name: Yup.string().required('veuillez entrer un prénom'),
                        last_name: Yup.string().required('veuillez entrer un nom'),
                        email: Yup.string().required('veuillez entrer un email valide'),
                        phone_number: Yup.string().required('veuillez entrer un numéro de téléphone'),
                    })}
                    onSubmit={(
                        { 
                        last_name, 
                        first_name, 
                        email, 
                        phone_number, 
                        user_id
                        }, 
                        { setStatus, setSubmitting }) => {
                        setStatus();
                        {/* we call the handle update service */}
                        userServices.handleUpdate(
                            last_name, 
                            first_name, 
                            email, 
                            phone_number, 
                            user_id
                            )
                            .then((user) => {
                            if (user.data.errors) {
                                setStatus(user.data.errors);
                                setSubmitting(false);
                            }
                            else {
                                //we update context and close modal
                                updateUser(user.data.data);
                                closeModal(!modalActive);
                            }
                            });
                        }
                    }
                >
                    {/* end of formik settings */}

                    {({
                      errors, status, touched, isSubmitting,
                    }) => (
                        <Form>
                            <section className="modal-card-body">
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
