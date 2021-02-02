import React from 'react';

import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { mailService } from 'src/services/mailService';
import './styles.scss';

function Contact() {
  return (
      <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Veuillez entrer un nom (Obligatoire) '),
              email: Yup.string().email().required('Veuillez entrer un email valide (Obligatoire)'),
              subject: Yup.string().required('Sujet du message'),
              message: Yup.string().required('Veuillez taper votre message'),
            })}
            onSubmit={({ name, email, subject, message,}, { resetForm }) => {
              console.log('Soumission du formulaire');
              mailService.handleSubmit(name, email, subject, message)
                .then(
                  resetForm()
                );
            }}
      >
          {({ errors, touched, isSubmitting }) => (
              <Form id="contact-form" className="field form-content panel">
                      <div className="field">
                          <label className="label has-text-centered is-medium">
                              Formulaire de contact
                          </label>
                      </div>
                      <div className="field">
                          <label htmlFor="name" className="label">Nom</label>
                            <div class="control">
                              <Field name="name" type="text" placeholder="Nom" className={`input is-small${errors.first_name && touched.last_name ? ' is-invalid' : ''}`} />
                              <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                      </div>
                      <div className="field">
                          <label htmlFor="email" className="label">Email</label>
                          <Field name="email" type="email" className={`input is-small${errors.email && touched.email ? ' is-invalid' : ''}`} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                      <div className="field">
                          <label htmlFor="subject" className="label">Sujet</label>
                          <Field name="subject" type="text" className="input is-small" />
                          <ErrorMessage name="subject" component="div" className="invalid-feedback" />
                      </div>
                      <div className="field">
                          <label htmlFor="message" className="label">Message</label>
                          <Field component="textarea" name="message" type="textarea" className="Rounded Medium textarea" />
                          <ErrorMessage name="message" component="div" className="invalid-feedback" />
                      </div>
                      <div className="field">
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
