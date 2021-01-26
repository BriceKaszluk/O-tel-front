import React from 'react';
import HousingDescription from 'src/components/HousingDescription'
import Calendar from 'src/components/Calendar'
import './styles.scss';


export default () => (

  <div className="housing">
    <section className="hero">
      <div className="hero-body">
      </div>
    </section>
    <div className="columns">
      <div className="column">
        <HousingDescription />
      </div>
      <div className="column">
        <Calendar />
        <button className="is-primary">Réserver</button>
      </div>
    </div>
  </div>

);
