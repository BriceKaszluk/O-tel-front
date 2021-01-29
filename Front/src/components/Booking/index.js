import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { mailService } from 'src/services/mailService';

// components
import Calendar from 'src/components/Calendar';

// import
import './styles.scss';

export default () => (
    <div>

        <Formik
          initialValues={{
            last_name: '',
            first_name: '',
            email: '',
            phone: '',
            dates: '',
            message: '',
          }}
          validationSchema={Yup.object().shape({
            last_name: Yup.string().required('Veuillez entrer un nom '),
            first_name: Yup.string().required('Veuillez entrer un prénom'),
            email: Yup.string().email().required('Veuillez entrer un email valide'),
            phone: Yup.string().required('Veuillez entrer un numéro valide'),
            dates: Yup.string(),
            message: Yup.string().required('Veuillez taper votre message'),
          })}
          onSubmit={({
            last_name, first_name, email, phone, dates, message,
          }, { setStatus, setSubmitting }) => {
            setStatus();
            console.log('submitting form');
            mailService.handleSubmit(last_name, first_name, email, phone, dates, message);
            setSubmitting(false);
          }}
        />

        <h1>Réservation</h1>

        <img
          className="fit-picture"
          src=""
          alt="logement"
        />

        {({ errors, touched, isSubmitting }) => (
        <form>
            {/* FIRST NAME */}
            <div className="field">
                <label className="label">nom</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help">This is a help text</p>
            </div>
            {/* LAST NAME */}
            <div className="field">
                <label className="label">prénom</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help">This is a help text</p>
            </div>
            {/* EMAIL */}
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
            </div>
            {/* PHONE NUMBER */}
            <div className="field">
                <label className="label">Tel</label>
                <div className="control">
                    <input className="input" type="tel" placeholder="+336-84-56-32" />
                </div>
            </div>
            {/* BEGIN AND END DATE */}
            <Calendar />
            {/* MORE INFORMATIONS */}
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="informations complémentaires" />
                </div>
            </div>
            {/* TERMS AND CONDITIONS CHECKBOX */}
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <div>
                            <input type="checkbox" />
                            <span> I agree to the</span>
                            <Link to="/logement2" className="terms_and_conditions">terms and conditions</Link>
                        </div>
                    </label>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button 
                        className="button is-link"
                        type="submit"
                        className="button is-primary is-small is-rounded"
                        disabled={isSubmitting}
                      >Submit
                          {isSubmitting ? 'Please wait...' : 'Envoyer le message'}
                    </button>
                </div>
            </div>
        </form>
        )}
    </div>
);

// TODO: configure link terms and conditions
