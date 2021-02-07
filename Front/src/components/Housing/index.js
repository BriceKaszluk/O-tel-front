import React, { useState } from 'react';
import HousingOne from 'src/components/HousingOne';
import {
  Route, Link, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { useAuthentication } from 'src/components/UserContext';
import { getData } from 'src/hooks/dataFetcher';
import './styles.scss';
import Fade from 'react-reveal/Fade';

export default () => {
  const [results, setResult] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const dispatch = async () => {
    const result = await getData.getAllHousing();
    if (result[0].data !== undefined) {
      const { data } = result[0];
      setResult(data);
      setDataLoaded(true);
      console.log(results);
    }
  };
  dispatch();

  return (
      <div className="section">
          <Fade left>
              {dataLoaded && results.map((result, index) => (
                  <div key={result.id} id={`logement${result.id}`} className="card">
                      <div className="card-content">
                          <div className="media">
                              <div className="media-content">
                                  <p className="title is-1 has-text-white">{result.house_name}</p>
                                  <p className="subtitle is-4 has-text-white">  {' '}
                                      Logement pour {result.place_number}{' '}
                                      personnes
                                  </p>
                              </div>
                          </div>
                      </div>
                      <Link
                            to={{ pathname: `/logement/${result.id}` }}
                            className="button is-primary is-rounded is-italic"
                      >
                          Voir le logement
                      </Link>
                  </div>
              ))}
          </Fade>
      </div>
  );
};
