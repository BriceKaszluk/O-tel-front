
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import LoadingSpinner from 'src/components/LoadingSpinner';
import { useHistory } from "react-router-dom";
import './styles.scss';


import { registrationService } from 'src/services/registrationService';

export default ({modalActive, closeModal}) => {
    //initialize history to use history.push to redirect
    let history = useHistory();
    return(
        <div className="modal is-active">
        <div className="modal-background" onClick={(event)=>{closeModal(!modalActive)}} />
            <div className="modal-content">
                <div className="modal-card">
                <div className="modal-card-head">
                    <p className="modal-card-title">Inscription</p>
                </div>
                    {/* settings of formik */}
                    <Formik
                    initialValues={{
                        last_name: '',
                        first_name: '',
                        email: '',
                        phone_number:'',
                        password:'',
                        password_confirm:'',
                        acceptTerms: false
                    }}
                    validationSchema={Yup.object().shape({
                        last_name: Yup.string().required('veuillez entrer un nom'),
                        first_name: Yup.string().required('veuillez entrer un prénom'),
                        email: Yup.string().required('veuillez entrer un email valide'),
                        phone_number: Yup.string().required('veuillez entrer un numéro de téléphone'),
                        password: Yup.string().required('un mot de passe est requis'),
                        password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'les mots de passe doivent correspondre'),
                        acceptTerms: Yup.bool().oneOf([true], 'accepter les termes et conditions svp')
                    })}
                    onSubmit={({ last_name, first_name, email, phone_number, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        console.log('submitting form');
                        registrationService.handleRegistration(last_name, first_name, email, phone_number, password)
                            .then(user => {
                                console.log(user, 'le user');
                                closeModal(!modalActive);
                                history.push('/profil');
                              },
                            errors =>{[errors.response.data.errors[0]].map(error=>{
                                setStatus(error);
                            })
                                setSubmitting(false);
                                ;
                        })
                    }}>
                    {/*end of formik settings */}

                    {({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <section className="modal-card-body">
                                {/* Signin with google, apple or facebook part */}
                                <div className="field icons-button">
                                    <a className="button social is-medium is-facebook">
                                    <span className="icon">
                                        <i className="fab fa-facebook fa-lg" />
                                    </span>
                                    <span>Facebook</span>
                                    </a>
                                    <a className="button social is-medium is-google">
                                    <span className="icon">
                                        <i className="fab fa-google fa-lg" />
                                    </span>
                                    <span>Google</span>
                                    </a>
                                    <a className="button social is-medium is-apple">
                                    <span className="icon">
                                        <i className="fab fa-apple fa-lg" />
                                    </span>
                                    <span>Apple</span>
                                    </a>
                                </div>
                                {/* start of register form */}
                                <h1>OU</h1>
                                <div className="field">
                                    <div className="form-group field">
                                        <label htmlFor="last_name" className="label">Nom</label>
                                        <Field name="last_name" type="text" className={'form-control input' + (errors.first_name && touched.last_name ? ' is-invalid' : '')} />
                                        <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="first_name" className="label">Prénom</label>
                                        <Field name="first_name" type="text" className={'form-control input' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                        <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="email" className="label">Email</label>
                                        <Field name="email" type="email" className={'form-control input' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="phone_number" className="label">Téléphone</label>
                                        <Field name="phone_number" type="tel" className={'form-control input' + (errors.phone_number && touched.phone_number ? ' is-invalid' : '')} />
                                        <ErrorMessage name="phone_number" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="password" className="label">Mot de passe</label>
                                        <Field name="password" type="password" className={'form-control input' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <label htmlFor="password_confirm" className="label">Confirmation</label>
                                        <Field name="password_confirm" type="password" className={'form-control input' + (errors.password_confirm && touched.password_confirm ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password_confirm" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group field">
                                        <Field type="checkbox" name="acceptTerms" className={'form-check-input checkbox' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                        <span> J'accepte les</span>
                                        <Link to="/logement2" className="terms_and_conditions">termes et conditions</Link>
                                        <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                            </section>
                            
                            <footer className="form-group modal-card-foot">
                                <button type="submit" className="button is-success" disabled={isSubmitting}>envoyer</button>
                                {isSubmitting &&
                                    <LoadingSpinner />
                                }
                                <button className="button" onClick={(event)=>{closeModal(!modalActive)}}>Annuler</button>
                                {status &&
                                <div className={'alert alert-danger'}>{status}</div>
                            }
                            </footer>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>

    )



}



