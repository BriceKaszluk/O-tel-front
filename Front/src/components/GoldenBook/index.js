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
      <section className="section goldenbook">
          <div className="card-content">
              <div className="card-title">
                  <h2 className="title is-1">
                      Livre d'or - Avis Clients
                  </h2>
                  <div className="has-text-centered">
                      {
                    dataLoaded && results.map((result) => (
                        <div className="notice">
                            <CustomerReviews
                                key={result.id}
                                comments={result.comments}
                                rate={result.rate}
                                first_name={result.user.first_name}
                                last_name={result.user.last_name}
                            />
                        </div>
                    ))
                  }
                  </div>
              </div>
          </div>
      </section>
  );
};

export default GoldenBook;
