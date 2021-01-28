import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import picture from 'src/assets/images/profil-picture.jpg';
import {getData} from 'src/hooks/dataFetcher'
import './styles.scss';

export default () => {

const [comment, setComment] = useState({})

const dispatch = async () => {

    const result =  await getData.getAllNotices();
    if (result[0].data !== undefined) {
        const data = result[0].data[0];
        setComment(data)
    }
}

dispatch();

return (
    <div className="card">
    <div className="card-content ">
      <div className="media-content">
        <div className="image">
          <img 
            src={picture}
            className="image is-64x64 is-rounded "
            alt="avatar"
          />
        </div>
        <p className="title is-4">
            johnsmith
        </p>
        <p className="subtitle is-6">
          @johnsmith
        </p>
      </div>
      <p className="message">
        {comment.comments}
      </p>
      <br />
      <time className="is-centered" dateTime="2021-1">Jan 2021</time>

      <Link to="/livre_d_or" className="button is-primary">Afficher Plus</Link>
    </div>
  </div>
)
};

