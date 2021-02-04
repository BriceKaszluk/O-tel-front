import React, { useState } from 'react'
import HousingOne from 'src/components/HousingOne'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useAuthentication } from 'src/components/UserContext'
import { getData } from 'src/hooks/dataFetcher'
import './styles.scss'

export default () => {
    const [results, setResult] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)

    const dispatch = async () => {
        const result = await getData.getAllHousing()
        if (result[0].data !== undefined) {
            const data = result[0].data
            setResult(data)
            setDataLoaded(true)
            console.log(results)
        }
    }

    dispatch()

    return (
        <div className='housing'>
            <div className='box'>
                <div className='media'>
                    {dataLoaded &&
                        results.map((result, index) => (
                            <div key={result.id}>
                                <div>
                                    <article className='media'>
                                        <img src={'#'} />
                                    </article>
                                    <h2> {result.house_name}</h2>
                                    <h2>
                                        {' '}
                                        Logement pour {result.place_number}{' '}
                                        personnes
                                    </h2>
                                    <h2> {result.price} par nuit</h2>
                                    <h2> {result.description} </h2>
                                    <div className='column'></div>
                                </div>

                                <Link
                                    to={{ pathname: `/logement/${result.id}` }}
                                    className='button is-primary'
                                >
                                    Voir le logement
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
