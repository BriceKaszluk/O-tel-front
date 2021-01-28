import React from 'react';
import HousingOne from 'src/components/HousingOne'
import HousingTwo from 'src/components/HousingTwo'
import HousingThree from 'src/components/HousingThree'
import Calendar from 'src/components/Calendar'
import {Route, BrowserRouter as Router,} from 'react-router-dom'
import './styles.scss';


export default () => {

    return (

        <div className="housing">
        <section className="hero">
            <div className="hero-body"></div>
        </section>
        <div className="columns">
            <div className="column">
                <Router>
                    <Route path="/logement1" component={HousingOne} />
                    <Route path="/logement2" component={HousingTwo} />
                    <Route path="/logement3" component={HousingThree} />
                </Router>
            </div>
            <div className="column">
                <Calendar />
                <button className="is-primary">Réserver</button>
            </div>
        </div>
    </div>

    )

}

  


