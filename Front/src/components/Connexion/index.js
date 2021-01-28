import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';

import * as Yup from 'yup';
import LoadingSpinner from 'src/components/LoadingSpinner';
import './styles.scss';

import { connexionService } from 'src/services/connexionService';

export default ({modalActive, closeModal}) => {
  return(
  <div className="modal is-active">
    <div className="modal-background" onClick={(event)=>{closeModal(!modalActive)}} />
    <div className="modal-content">
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Connexion</p>
        </div>
        {/* settings of formik */}
        <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required('veuillez entrer un email valide'),
                      password: Yup.string().required('veuillez entrer un mot de passe'),
                    })}
                    onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                      setStatus();

                      console.log('submitting form');
                      connexionService.handleConnexion(email, password)
                      .then(user => {
                        if(user.data.errors){
                            setStatus(user.data.errors);
                            setSubmitting(false);
                        console.log(user.data.errors, '//user error');
                        }else{
                        localStorage.setItem('currentUser', JSON.stringify(user.data.token));
                        console.log(localStorage.currentUser, 'current user dans local storage');
                        closeModal(!modalActive);
                        }
                      })
                    }}
        >
          {/* end of formik settings */}

          {({
            errors, status, touched, isSubmitting,
          }) => (
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
                    <label htmlFor="email" className="label">Email</label>
                    <Field name="email" type="email" className={`form-control input${errors.email && touched.email ? ' is-invalid' : ''}`} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group field">
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <Field name="password" type="password" className={`form-control input${errors.password && touched.password ? ' is-invalid' : ''}`} />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                  </div>

                </div>
              </section>

              <footer className="form-group modal-card-foot">

                <button type="submit" className="button is-success" disabled={isSubmitting}>envoyer</button>
                {isSubmitting && <LoadingSpinner />}
                <button className="button" onClick={(event)=>{closeModal(!modalActive)}}>Annuler</button>
                {status && <div className="alert alert-danger">{status}</div>}
              </footer>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>

)};
