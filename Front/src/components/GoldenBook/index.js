
import React, { useState, useEffect } from 'react';
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
      <section className="section">
          <div className="card-content">
              <h2 className="card-title">
                  Livre d'or - Avis Clients
              </h2>
              <div className="card has-text-centered ">
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
          </div>
      </section>
  );
};

export default GoldenBook;
