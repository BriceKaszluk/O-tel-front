import React from 'react';

import './styles.scss';

const Goldenbook = () => (

  <div className="card has-text-centered">

    <h1 className="card-header-title">
      Livre d'or
    </h1>

    <div className="content">
      <div className="card-content ">
        <p className="">
          " Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener, quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum, insontium caedibus fecit victoriam luctuosam."
        </p>
      </div>
      <time dateTime="2021-1">Jan 2021</time>
    </div>

    <div className="column is-right">
      <button href="/reservation" className="button-has-text is-right">
        Informations supplémentaires
      </button>
    </div>
  </div>
);

export default Goldenbook;
