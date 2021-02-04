import React, { useState, useEffect } from 'react';
import './styles.scss';

export default (props) => (
    <div className="box">
        <div className="card-content ">
            <div className="media-content">
                <p className="title is-6">
                    {props.first_name} {props.last_name}
                </p> 
                <p className="subtitle is-7">
                    {props.rate}/5
                </p>
                <div className="image">
                    <p>Avis clients</p>
                </div>
            </div>
            <p className="content">
                {props.comments}
            </p>
            <br />
            <time className="is-centered" />
        </div>
    </div>
);
