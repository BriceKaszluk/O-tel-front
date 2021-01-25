import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'src/components/Nav';
import picture from 'src/assets/images/profil-picture.jpg';
import './styles.scss';

const GoldenBook = () => (
  <>
    <Nav />
    <div className="card has-text-centered">
      <h1 className="card-header-title-center">
        Livre d'or - Avis Clients
      </h1>

      <div className="content">
        <div className="card-content ">
          <div className="media-content">
            <div className="image">
              <img src={picture} className="image is-64x64 is-rounded " />
            </div>
            <p className="title is-4">Michel Simon</p>
            <p className="subtitle is-6">@michelsimon</p>
          </div>
          <p className="">
            " Utque aegrum corpus quassari etiam levibus solet offensis,
            ita animus eius angustus et tener,
            quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
            insontium caedibus fecit victoriam luctuosam."
          </p>
        </div>
        <time dateTime="2021-1">Jan 2021</time>
      </div>

      <div className="content">
        <div className="card-content ">
          <div className="media-content">
            <div className="image">
              <img src={picture} className="image is-64x64 is-rounded " />
            </div>
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
          <p className="">
            " Utque aegrum corpus quassari etiam levibus solet offensis,
            ita animus eius angustus et tener,
            quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
            insontium caedibus fecit victoriam luctuosam."
          </p>
        </div>
        <time dateTime="2021-1">Jan 2021</time>
      </div>

      <div className="content">
        <div className="card-content ">
          <div className="image">
            <img src={picture} className="image is-64x64 is-rounded " />
          </div>
          <p className="title is-4">John rachid</p>
          <p className="subtitle is-6">@johnrachid</p>
          <p className="">
            " Utque aegrum corpus quassari etiam levibus solet offensis,
            ita animus eius angustus et tener,
            quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum,
            insontium caedibus fecit victoriam luctuosam."
          </p>
        </div>
        <time dateTime="2021-1">Jan 2021</time>
      </div>

      <Link to="/reservation" className="button is-warning">Voir les disponibilités</Link>
      <Link to="/" className="button is-info">Information supplémentaire</Link>

    </div>
  </>
);

export default GoldenBook;
