import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss'


export default () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (email) => {
    setEmail(email.target.value)
  }

  const handlePassword = (password) => {
    setPassword(password.target.value)
  }


  const handleSubmit = ()  => {

    axios.post(`https://project-otel.herokuapp.com/connection/log`, {email, password})

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
              <p className="modal-card-title">Connexion</p>
            </header>
            {/* Body of the modal, this part contains inputs */}
            <section className="modal-card-body">
              <form method="post" action="https://project-otel.herokuapp.com/connection/log" >
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
                  <input className="input" type="email" value={email} onChange={handleEmail} placeholder="Email" />
                  <span className="icon is-small is-left" />
                </p>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <p className="control">
                  <input className="input" type="password" value={password} onChange={handlePassword} placeholder="Password" />
                  <span className="icon is-small is-left" />
                </p>
              </div>

              {/* Footer part with buttons */}
              <footer className="modal-card-foot">
                <button className="button is-success" type="submit" onSubmit={handleSubmit}>Connexion</button>
                <Link to="/" className="button">Annuler</Link>
              </footer>
              </form>  
            </section>
          </div>
        </div>
        <Link to="/" className="modal-close is-large" aria-label="close" />
      </div>
  )  
};
