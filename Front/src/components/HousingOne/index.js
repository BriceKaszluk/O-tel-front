import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

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
        <div className='full-housing '>
            <section className='hero box__housing'></section>

            {dataLoaded && (
                <div className='hero-body housing__body '>
                    <div className='columns'>
                        <div className='column'>
                            <h2 className='has-text-left house__name'>
                                {' '}
                                {result.house_name}
                            </h2>
                            <h3 className='has-text-left'>
                                {' '}
                                Logement pour {result.place_number} personnes
                            </h3>
                            <h3 className='has-text-left'>
                                {' '}
                                {result.price} par nuits
                            </h3>

                            <h3> Services : </h3>

                            <p className='has-text-left' >
                                Afin de rendre votre séjour le plus agréable
                                possible, le gite met à votre disposition un
                                restaurant de qualité dominant le lac où vous
                                pourrez apprécier la cuisine de Provence. En
                                saison, tous les lundis et jeudis, grande soirée
                                barbecue avec buffet à volonté. Pour plus de
                                confort, l'accès wifi est gratuit et le gite met
                                à disposition gratuitement des lits bébé. </p> <br />

                            <h3>À proximité : </h3>

                            <p>Au bord du lac de Ste-Croix, vous
                                pouvez pratiquer la baignade sur différents
                                sites sauvages ou sur les plages aménagées
                                surveillées en juillet/août. De nombreuses
                                activités sont également possibles telles que la
                                location de voiliers, de planches à voile, de
                                bateaux électriques ou de pédalos. Ne manquez
                                pas la remontée d'une partie des Gorges du
                                Verdon, site grandiose bordé de falaises
                                vertigineuses. Si vous pratiquez la randonnée,
                                de nombreux sentiers sont accessibles au départ
                                du camping. Pour les amateurs de sensations
                                fortes, escalade, parapente, saut à l'élastique,
                                rafting, hydrospeed ou randonnées aquatiques
                                sont disponibles aux alentours. La visite des
                                villages pittoresques et de leurs marchés
                                provençaux sont autant de balades et sorties les
                                plus agréables pour découvrir en famille une
                                région pleine de traditions.{' '}
                            </p>
                        </div>
                        <div className='column'>
                            <div className='has-text-centered' id="gite-1">
                                {
                                    <Link
                                        to={{ pathname: `/booking/${id}` }}
                                        className='button is-primary is-rounded'
                                    >
                                        {' '}
                                        Réserver ce logement
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
