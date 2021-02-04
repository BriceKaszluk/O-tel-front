import React, { useState } from 'react';
import HousingOne from 'src/components/HousingOne';
import {
  Route, Link, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { useAuthentication } from 'src/components/UserContext';
import { getData } from 'src/hooks/dataFetcher';
import './styles.scss';

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
          {dataLoaded && results.map((result, index) => (
              <div key={result.id} id={`logement${result.id}`} className="card">
                  <div className="card-content">
                      <div className="media">
                          <div className="media-content">
                              <p className="title is-4 has-text-white">{result.house_name}</p>
                              <p className="subtitle is-6 has-text-white">  {' '}
                                  Logement pour {result.place_number}{' '}
                                  personnes
                              </p>
                          </div>
                      </div>

                      <div className="content">
                          <h2 className="has-text-white"> {result.price} par nuit</h2>
                          <h2 className="has-text-white"> {result.description} </h2>
                      </div>
                  </div>
                  <Link
                            to={{ pathname: `/logement/${result.id}` }}
                            className="button is-primary is-small is-rounded"
                  >
                      Voir le logement
                  </Link>
              </div>
          ))}
      </div>
  );
};
