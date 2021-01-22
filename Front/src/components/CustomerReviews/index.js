import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const CustomerReviews = () => (

  <div className="card">
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

    <Link to="/livre_d_or" className="button is-primary">Afficher Plus</Link>

  </div>
);

export default CustomerReviews;
