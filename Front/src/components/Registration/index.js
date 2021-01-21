import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

export default () => {


  return(
    //Modal container toggle "is-active" class too see it or not
    <div className = "modal is-active">
    <div class="modal-background"></div>
      <div className = "modal-content">
        <div className = "modal-card">
          {/* Header container part for modal */}
          <header className = "modal-card-head">
            <p className = "modal-card-title">Inscription</p>
          </header>
          {/* Body of the modal, this part contains inputs */}
          <section className = "modal-card-body">
          {/* Signin with google, apple or facebook part */}
          <div className = "field icons-button">
            <a className="button social is-medium is-facebook">
              <span className="icon">
                <i className="fab fa-facebook fa-lg"></i>
              </span>
              <span>Facebook</span>
            </a>
            <a className="button social is-medium is-google">
              <span className="icon">
                <i className="fab fa-google fa-lg"></i>
              </span>
              <span>Google</span>
            </a>
            <a className="button social is-medium is-apple">
              <span className="icon">
                <i className="fab fa-apple fa-lg"></i>
              </span>
              <span>Apple</span>
            </a>  
          </div>
          {/* Form field part */}
          <h1>OU</h1>
          <div className = "field">
            <label className = "label">Nom</label>
              <p className = "control">
                <input className = "input" type = "email" placeholder = "Nom"></input>
                <span className = "icon is-small is-left">
                </span>
              </p>
            </div>

            <div className = "field">
            <label className = "label">Prénom</label>
              <p className = "control">
                <input className = "input" type = "email" placeholder = "Nom"></input>
                <span className = "icon is-small is-left">
                </span>
              </p>
            </div>

            <div className = "field">
            <label className = "label">Email</label>
              <p className = "control">
                <input className = "input" type = "email" placeholder = "Email"></input>
                <span className = "icon is-small is-left">
                </span>
              </p>
            </div>

            <div className = "field">
            <label className = "label">Mot de passe</label>
              <p className = "control">
                <input className = "input" type = "password" placeholder = "Password" />
                <span className = "icon is-small is-left">
                </span>
              </p>
            </div>

            <div className = "field">
            <label className = "label">Confirmation du mot de passe</label>
              <p className = "control">
                <input className = "input" type = "password" placeholder = "Confirmation du mot de passe" />
                <span className = "icon is-small is-left">
                </span>
              </p>
            </div>
            {/* Terms and conditons of utilisation */}
            <div className="field">
              <div className="control">
                  <label className="checkbox">
                    <div>
                      <input type="checkbox"></input>
                      <span> I agree to the</span>
                        <Link to="/logement2" className="terms_and_conditions">terms and conditions</Link>
                    </div>  
                  </label>
              </div>
            </div>
          </section>
          {/* Footer part with buttons */}
          <footer className = "modal-card-foot">
            <button className = "button is-success">S'inscrire</button>
            <Link to="/" className = "button">Annuler</Link>
          </footer>

      </div>
    </div>
    <Link to="/"  className = "modal-close is-large" aria-label = "close"></Link>
  </div>
  )
}
