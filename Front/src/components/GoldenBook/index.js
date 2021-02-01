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

      <section className="section has-text-centered">
          <h1 className="title">
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
          <Link to="/reservation" className="button is-warning is-small is-rounded ">Voir les disponibilités</Link>
          <Link to="/" className="button is-info is-small is-rounded ">Information supplémentaire</Link>

      </section>
  );
};

export default GoldenBook;
