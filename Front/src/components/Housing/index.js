import React from 'react';
import HousingOne from 'src/components/HousingOne'
import HousingTwo from 'src/components/HousingTwo'
import HousingThree from 'src/components/HousingThree'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import './styles.scss';


export default () => {

    return (

        <div className="housing">
            <div className="box">
                <div className="media">
                    <Switch>
                        <Route path="/logement1" component={HousingOne} />
                        <Route path="/logement2" component={HousingTwo} />
                        <Route path="/logement3" component={HousingThree} />
                    </Switch>
                </div>
                
            </div>
        </div>
    )
};
