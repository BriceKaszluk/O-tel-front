import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

export default () => {

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone_number, setPhoneNumber] = useState('')

  const handleEmail = (email) => {
    setEmail(email.target.value)
  }

  const handlePassword = (password) => {
    setPassword(password.target.value)
  }

  const handleFirstName = (firstName) => {
    setFirstName(firstName.target.value)
  }

  const handleLastName = (lastName) => {
    setLastName(lastName.target.value)
  }

  const handlePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber.target.value)
  }


  const handleSubmit = ()  => {


    axios.post(`https://project-otel.herokuapp.com/connection/signup`, {last_name, first_name, email, phone_number, password})

    .then((response) => {
      console.log(response.data)
    })

    .catch((error) =>{
      console.log(error)
    })

  }

  useEffect(() => {
    console.log('useEffect connexion');
    handleSubmit();
  }, [])

  return (

  <div className="modal is-active">
    <div className="modal-background" />
      <div className="modal-content">
        <div className="modal-card">
        {/* Header container part for modal */}
          <header className="modal-card-head">
            <p className="modal-card-title">Inscription</p>
          </header>
        {/* Body of the modal, this part contains inputs */}
        <form method="post" action="https://project-otel.herokuapp.com/connection/signup">
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
            {/* Form field part */}
            <h1>OU</h1>
            <div className="field">
              <label className="label">Nom</label>
              <p className="control">
                <input className="input" type="last_name" placeholder="Nom" value={last_name} onChange={handleLastName} />
                <span className="icon is-small is-left" />
              </p>
            </div>

            <div className="field">
              <label className="label">Prénom</label>
              <p className="control">
                <input className="input" type="first_name" placeholder="Prénom" value={first_name} onChange={handleFirstName}/>
                <span className="icon is-small is-left" />
              </p>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <p className="control">
                <input className="input" type="email" placeholder="Email" value={email} onChange={handleEmail} />
                <span className="icon is-small is-left" />
              </p>
            </div>

            <div className="field">
              <label className="label">Numero de téléphone</label>
              <p className="control">
                <input className="input" type="phone_number" value={phone_number} onChange={handlePhoneNumber} placeholder="06 42 42 42 42" />
                <span className="icon is-small is-left" />
              </p>
            </div>

            <div className="field">
              <label className="label">Mot de passe</label>
              <p className="control">
                <input className="input" type="password" placeholder="Password" value={password} onChange={handlePassword} />
                <span className="icon is-small is-left" />
              </p>
            </div>

            <div className="field">
              <label className="label">Confirmation du mot de passe</label>
              <p className="control">
                <input className="input" type="password" placeholder="Confirmation du mot de passe" />
                <span className="icon is-small is-left" />
              </p>
            </div>

            {/* Terms and conditons of utilisation */}
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
          
        </section>
        {/* Footer part with buttons */}
        <footer className="modal-card-foot">
          <button className="button is-success" type="submit" onSubmit={handleSubmit}>S'inscrire</button>
          <Link to="/" className="button">Annuler</Link>
        </footer>
        </form>
      </div>
    </div>
    <Link to="/" className="modal-close is-large" aria-label="close" />
  </div>

  )
  // Modal container toggle "is-active" class too see it or not
  
};
