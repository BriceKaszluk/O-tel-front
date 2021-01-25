import React from 'react';

import './styles.scss';

const Contact = () => (

  <form
    id="contact-form"
    method="POST"
    action="send"
    className="content panel"
  >
    <div className="content-form">
      <label
        className="label"
      >
        Formulaire de contact
      </label>

      <div className="field">
        <input
            placeholder="Nom/Prénom"
            id="name"
            name="name"
            type="text"
            className="input"
        />
        <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            className="input"
        />

        <input
            placeholder="Sujet"
            id="subject"
            name="subject"
            type="text"
            className="input"
        />

        <div className="contact_message">
          <label
            className="label"
          >
            Message
          </label>
          <textarea
            placeholder="Comment pourions nous vous aider ?"
            id="message"
            name="message"
            className="textarea is-medium"
          />
        </div>
      </div>
      <button
            onClick=""
            type="submit"
            value="submit"
            className="button is-primary is-rounded"
      >
        Envoyer le message
      </button>
    </div>
  </form>
);

export default Contact;

