import React from 'react';
import './styles.scss';

export default () => {
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.103620023937!2d6.396958515601105!3d43.791462851496796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbf9ad5de94c61%3A0x47a30df45b23e77f!2sGorges%20Du%20Verdon!5e0!3m2!1sfr!2sfr!4v1611154952188!5m2!1sfr!2sfr" width="300" height="225" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }} />);
  }

  return (

      <footer className="footer">
          <div className="content">
              <div className="columns">
                  <div className="column">
                      <strong>SUIVEZ-NOUS SUR</strong>
                      <a className="button is-medium is-facebook">
                          <span className="icon">
                              <i className="fab fa-facebook fa-lg" />
                          </span>
                      </a>
                      <a className="button is-medium is-instagram">
                          <span className="icon">
                              <i className="fab fa-instagram fa-lg" />
                          </span>
                      </a>
                      <a className="button is-medium is-pinterest">
                          <span className="icon">
                              <i className="fab fa-pinterest fa-lg" />
                          </span>
                      </a>
                  </div>
                  <div className="column">
                      <strong>CONTACTEZ-NOUS</strong> <br />

                      <p>Adresse : Rue du meilleur gite</p>
                      <p>Email : michel@fakeemail.com</p>
                      <p>Tel : +33(0)1 42 42 42 42</p>

                  </div>
                  <div className="column">

                      <Iframe iframe={iframe} />

                  </div>
              </div>
          </div>
      </footer>
  );
};
