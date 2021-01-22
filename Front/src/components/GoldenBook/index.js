import React from 'react';

import './styles.scss';

const GoldenBook = () => (

  <div className="card has-text-centered">
    <h1 className="card-header-title-center">
      Livre d'or - Avis Clients
    </h1>

    <div className="content">
      <div className="card-content ">
        <div className="media-content">
          <p className="title is-4">Michel Simon</p>
          <p className="subtitle is-6">@michelsimon</p>
        </div>
        <p className="">
          " Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener,
          quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
          insontium caedibus fecit victoriam luctuosam."
        </p>
      </div>
      <time dateTime="2021-1">Jan 2021</time>
    </div>

    <div className="content">
      <div className="card-content ">
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
        <p className="">
          " Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener,
          quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
          insontium caedibus fecit victoriam luctuosam."
        </p>
      </div>
      <time dateTime="2021-1">Jan 2021</time>
    </div>

    <div className="content">
      <div className="card-content ">
        <p className="title is-4">John rachid</p>
        <p className="subtitle is-6">@johnrachid</p>
        <p className="">
          " Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener,
          quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
          insontium caedibus fecit victoriam luctuosam."
        </p>
      </div>
      <time dateTime="2021-1">Jan 2021</time>
    </div>

    <button href="/reservation" className="button is-primary">
      Informations supplémentaires
    </button>

  </div>
);

export default GoldenBook;
