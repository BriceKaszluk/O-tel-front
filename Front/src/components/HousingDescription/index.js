import React, { useState } from 'react';
import Background from 'src/components/Background'


export default (name, nbPlace, housingPrice, housingDescription, picture) => (  


    
      <div className = "box">
        <article className="media">
          <img src='#'></img>
        </article>
        <h1> *name* </h1>
        <h2> Logement pour *nbPlace* personnes</h2>
        <h2> *housingPrice* par nuit</h2>
        <h2> *housingDescription* </h2>
      </div>
      
    
        
      
);
