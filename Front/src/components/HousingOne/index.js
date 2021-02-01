import React, { useState, useEffect } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import { Link } from 'react-router-dom'

export default () => {

    const [result, setResult] = useState({})

    const dispatch = async () => {

        const result =  await getData.getHousingOne();
        if (result[0].data !== undefined) {
            const data = result[0].data;
            setResult(data)
        }
    }

    dispatch();


    return (
        <div className="box">
            <article className="media-content">
                <img src={result.picture} />
            </article>
            <h2> Logement pour {result.place_number} personnes</h2>
            <h2> {result.price} par nuit</h2>
            <h2> {result.description} </h2>
            <h2> {result.id }</h2>
            <div className="column">
            <Link to="/booking" housing_id={result.id} className="button is-primary is-small is-rounded">Réserver ce logement</Link>
            </div>
        </div>
        
        
    );

};


