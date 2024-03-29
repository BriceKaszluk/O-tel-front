import React, { useState } from 'react';
import { getData } from 'src/hooks/dataFetcher';
import CustomerReviews from 'src/components/CustomerReviews';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import './styles.scss';
              
const GoldenBook = () => {
  const [results, setResults] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const { t } = useTranslation();

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
      <section className="hero">
          <div className="hero-body background__fleuri">
              <h1 className="h1">
                  {t('Guestbook.1')}
              </h1>
              <div className="content-box has-text-centered">
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
      </section>
  );
};

export default GoldenBook;
