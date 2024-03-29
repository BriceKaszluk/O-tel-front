import React, {useState} from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { mailService } from 'src/services/mailService';
import { useToasts } from 'react-toast-notifications'
import './styles.scss';

export default () => {

    const { addToast } = useToasts()

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
            onSubmit={
              ({
                name, email, subject, message,
              },
              {resetForm }) => {
                console.log('Soumission du formulaire');
                mailService.handleSubmit(name, email, subject, message)
                  .then(
                    console.log('Message envoyé'),
                    addToast('Message envoyé, nous vous recontacterons bientôt', { appearance: 'success', autoDismiss: true }),
                    resetForm(),
                  );
                
              }
              
}
      >
          {({
            errors, touched, isSubmitting, dirty
          }) => (
              <Form id="contact-form" className="field form-content panel">
                  <div className="field">
                      <label className="label has-text-centered is-medium">
                          Formulaire de contact
                      </label>
                  </div>
                  <div className="field">
                      <label htmlFor="name" className="label">Nom</label>
                      <div className="control">
                          <Field name="name" type="text" placeholder="Nom complet" className={`input is-small${errors.first_name && touched.last_name ? ' is-invalid' : ''}`} />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="field">
                      <label htmlFor="email" className="label">Courriel</label>
                      <Field name="email" placeholder="mail@exemple.com" type="email" className={`input is-small${errors.email && touched.email ? ' is-invalid' : ''}`} />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>
                  <div className="field">
                      <label htmlFor="subject" className="label">Sujet</label>
                      <Field placeholder="Objet" name="subject" type="text" className="input is-small" />
                      <ErrorMessage name="subject" component="div" className="invalid-feedback" />
                  </div>
                  <div className="field">
                      <label htmlFor="message" className="label">Message</label>
                      <Field component="textarea" placeholder="Votre message*" name="message" type="textarea" className="Rounded Medium textarea" />
                      <ErrorMessage name="message" component="div" className="invalid-feedback" />
                  </div>
                  <div className="field">
                      <button
                              type="submit"
                              className="button is-primary is-small is-rounded"
                              disabled={isSubmitting || !dirty}
                              
                      >
                          Envoyer le message
                      </button>
                  </div>
              </Form>
          )}
      </Formik>
  );
}


