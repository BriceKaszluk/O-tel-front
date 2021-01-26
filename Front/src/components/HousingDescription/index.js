import React, { useState, useEffect } from 'react';
import {getData} from 'src/hooks/dataFetcher'

export default () => {


const dataToMap = getData.getAllHousings();

dataToMap.map( x => {
    
    console.log(Object.getOwnPropertyNames(x.data))
})

    return(

        <div className="box">
          <article className="media">
            <img src="#" />
          </article>
            <h1>Name  </h1> 
          <h2> Logement pour *nbPlace* personnes</h2>
          <h2> *housingPrice* par nuit</h2>
          <h2> *housingDescription* </h2>
        </div>
      
      );

} 



