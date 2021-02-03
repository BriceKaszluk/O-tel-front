import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Booking from 'src/components/Booking'
export default (props) => {

    const id = props.match.params.houseId
    console.log (props)
 

  const [result, setResult] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
      axios.get(`https://project-otel.herokuapp.com/hebergement/${id}`)
      .then((response) => {console.log(response), setResult(response.data.data), setDataLoaded(true)})
      .catch((error) => {console.log('error', error)}
), []})

  return (
    <div className='box'>
      {dataLoaded && (
        <div>
          <article className='media'>
            <img src={'#'} />
          </article>
          <h2> {result.house_name}</h2>
          <h2> Logement pour {result.place_number} personnes</h2>
          <h2> {result.price} par nuit</h2>
          <h2> {result.description} </h2>
          <div className='column'></div>
          <Booking />
        </div>
      )}

    </div>
  )
}
