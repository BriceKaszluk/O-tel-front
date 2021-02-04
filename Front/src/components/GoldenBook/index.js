import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import picture from 'src/assets/images/profil-picture.jpg';
import { getData } from 'src/hooks/dataFetcher';
import CustomerReviews from 'src/components/CustomerReviews';
import './styles.scss';

const GoldenBook = () => {
  const [results, setResults] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const dispatch = async () => {
    const result = await getData.getAllNotices();
    if (result[0].data !== undefined) {
      const { data } = result[0];
      setResults(data);
      setDataLoaded(true);
    }
  };

  dispatch();

  return (

      <div className="card has-text-centered">
          <h1 className="card-header-title-center">
              Livre d'or - Avis Clients
          </h1>
          {
        dataLoaded && results.map((result) => (
            <CustomerReviews
            key={result.id}
            comments={result.comments}
            rate={result.rate}
            first_name={result.user.first_name}
            last_name={result.user.last_name}
            />
        ))
      }
      </div>
  );
};

export default GoldenBook;
