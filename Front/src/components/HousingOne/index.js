import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./styles.scss"

export default (props) => {
    const id = props.match.params.houseId

    const [result, setResult] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(`https://project-otel.herokuapp.com/hebergement/${id}`)
            .then((response) => {
                setResult(response.data.data), setDataLoaded(true)
            })
            .catch((error) => {
                console.log('error', error)
            }),
            []
    })

    return (
        <div className='box box__housing'>
            {dataLoaded && (
                <div className="picture__housing">
                    <article className='b'>
                        <img alt="camp" src={'#'} />
                    </article>
                    <h2> {result.house_name}</h2>
                    <h2> Logement pour {result.place_number} personnes</h2>
                    <h2> {result.price} par nuit</h2>
                    <h2> {result.description} </h2>
                    <div>
                        {<Link to={{ pathname: `/booking/${id}` }} className="button btn-primary"> Réserver ce logement</Link>}
                    </div>
                </div>
            )}
        </div>
    );
}