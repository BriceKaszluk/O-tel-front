import React from 'react';
import HousingOne from 'src/components/HousingOne';
import HousingTwo from 'src/components/HousingTwo';
import HousingThree from 'src/components/HousingThree';
import Calendar from 'src/components/Calendar';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';

export default () => (

    <div className="housing">
        <div className="box">
            <div className="media">
                <Router>
                    <Route path="/logement1" component={HousingOne} />
                    <Route path="/logement2" component={HousingTwo} />
                    <Route path="/logement3" component={HousingThree} />
                </Router>
            </div>
            <div className="column">
                <Link to="/booking" className="button is-primary">Réserver ce logement</Link>
            </div>
        </div>
    </div>

);
