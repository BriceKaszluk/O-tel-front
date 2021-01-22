import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default () => (

  // Modal container toggle "is-active" class too see it or not
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-content">
      <div className="modal-card">
        {/* Header container part for modal */}
        <header className="modal-card-head">
          <p className="modal-card-title">Connexion</p>
        </header>
        {/* Body of the modal, this part contains inputs */}
        <section className="modal-card-body">
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
          <div className="field">
            <label className="label">Email</label>
            <p className="control">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left" />
            </p>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <p className="control">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left" />
            </p>
          </div>
        </section>
        {/* Footer part with buttons */}
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">Connexion</button>
          <Link to="/" className="button">Annuler</Link>
        </footer>

      </div>
    </div>
    <Link to="/" className="modal-close is-large" aria-label="close" />
  </div>
);
