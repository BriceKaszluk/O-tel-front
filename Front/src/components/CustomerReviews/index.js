import React, { useState, useEffect } from 'react';
import './styles.scss';

export default (props) => (
    <div className="card">
        <div className="card-content ">
            <div className="media-content">
                <div className="image">
                    <p>Super gite logement 1</p>
                </div>
                <p className="title is-4">
                    {props.first_name} {props.last_name}
                </p>
                <p className="subtitle is-6">
                    {props.rate}/5
                </p>
            </div>
            <p className="content">
                {props.comments}
            </p>
            <br />
            <time className="is-centered" />
        </div>
    </div>
);
