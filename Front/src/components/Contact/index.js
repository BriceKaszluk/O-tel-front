import React from 'react';

import './styles.scss';

const Contact = () => (

  <form id="contact" className="content">
    <label className="label">
      Formulaire de contact
    </label>

    <input className="input" type="text" placeholder="Prénom" />
    <input className="input" type="text" placeholder="Nom" />
    <input className="input" type="tel" placeholder="Tél" />
    <input className="input" type="email" placeholder="Email" />

    <div className="contact_message">
      <span className="label">
        Message
      </span>

      <textarea
        className="textarea is-medium "
        placeholder="Comment pourions nous vous aider ?"
      />

    </div>
    <button className="button is-success" type="submit">
      Envoyer le message
    </button>
  </form>
);

export default Contact;
