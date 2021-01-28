import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './styles.scss';

function Contact() {
  return (
      <Formik
          initialValues={{
            last_name: '',
            first_name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={Yup.object().shape({
            last_name: Yup.string().required('Veuillez entrer un nom '),
            first_name: Yup.string().required('Veuillez entrer un prénom'),
            email: Yup.string().email().required('Veuillez entrer un email valide'),
            subject: Yup.string().required('Sujet du message'),
            message: Yup.string().required('Veuillez taper votre message'),
          })}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
      >
          {({ errors, touched, isSubmitting }) => (
              <Form className="form-content panel">
                  <div className="field">
                      <label className="label has-text-centered is-medium">
                          Formulaire de contact
                      </label>

                      <label htmlFor="last_name" className="label">Nom</label>
                      <Field name="last_name" type="text" className={`input is-small${errors.first_name && touched.last_name ? ' is-invalid' : ''}`} />
                      <ErrorMessage name="last_name" component="div" className="invalid-feedback" />

                      <label htmlFor="first_name" className="label">Prénom</label>
                      <Field name="first_name" type="text" className={`input is-small${errors.last_name && touched.first_name ? ' is-invalid' : ''}`} />
                      <ErrorMessage name="first_name" component="div" className="invalid-feedback" />

                      <label htmlFor="email" className="label">Email</label>
                      <Field name="email" type="email" className={`input is-small${errors.email && touched.email ? ' is-invalid' : ''}`} />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />

                      <label htmlFor="subject" className="label">Sujet</label>
                      <Field name="subject" type="text" className="input is-small"/>
                      <ErrorMessage name="subject" component="div" className="invalid-feedback" />

                      <label htmlFor="message" className="label">Message</label>
                      <Field component="textarea" name="message" type="textarea" className="Rounded Medium textarea" />
                      <ErrorMessage name="message" component="div" className="invalid-feedback" />
                      <button
                          type="submit"
                          className="button is-primary is-small is-rounded"
                          disabled={isSubmitting}
                      >
                          {isSubmitting ? 'Please wait...' : 'Envoyer le message'}
                      </button>
                  </div>
              </Form>
          )}
      </Formik>
  );
}

export default Contact;
