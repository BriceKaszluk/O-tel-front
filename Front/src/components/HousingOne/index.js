import React, { useState, useEffect } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import { Link } from 'react-router-dom'
import { useAuthentication } from 'src/components/UserContext';

export default () => {

    const [result, setResult] = useState({})
    const { user } = useAuthentication();

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
            <article className="media">
                <img src={result.picture} />
            </article>
            <h2> Logement pour {result.place_number} personnes</h2>
            <h2> {result.price} par nuit</h2>
            <h2> {result.description} </h2>
            <h2> {result.id }</h2>
            <div className="column">
            <Link to="/booking" housing_id={result.id} className="button is-primary">Réserver ce logement</Link>

        </div>
        </div>
        
        
    );

};


