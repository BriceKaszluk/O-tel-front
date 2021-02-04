import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default (props) => (
    <div className="box">
        <div className="card-content ">
            <div className="media-content">
                <div className="title is-5">
                    <span>Avis clients</span>
                </div>
                <p className="title is-6">
                    {props.first_name} {props.last_name}
                </p>
                <p className="subtitle is-7">
                    {props.rate}/5
                </p>
            </div>
            <div className="content">
                    <p className="notification ">
                        {props.comments}
                    </p>
            </div>
            <br />
            <time className="is-centered" />
            <Link to="/livre_d_or" className="button is-primary is-small is-rounded">Afficher Plus</Link>
        </div>
    </div>
);
