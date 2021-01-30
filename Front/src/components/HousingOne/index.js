import React, { useState, useEffect } from 'react';
import { getData } from 'src/hooks/dataFetcher';

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
            <article className="media">
                <img src={result.picture} />
            </article>
            <h2> Logement pour {result.place_number} personnes</h2>
            <h2> {result.price} par nuit</h2>
            <h2> {result.description} </h2>
        </div>
    );

};


