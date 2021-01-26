import React, { useState } from 'react';
import data from 'src/hooks/dataFetcher'

export default () => {

    // const [bookingData, setBookingData] = useState(housings)

    return(

        <div className="box">
          <article className="media">
            <img src="#" />
          </article>
            <h1>Name  </h1> {/*{bookingData[0].name}  */}
          <h2> Logement pour *nbPlace* personnes</h2>
          <h2> *housingPrice* par nuit</h2>
          <h2> *housingDescription* </h2>
        </div>
      
      );

} 



