/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Background from 'src/components/Background';

import Contact from 'src/components/Contact';
import Housing from 'src/components/Housing';
import Description from 'src/components/Description';
import CustomerReviews from 'src/components/CustomerReviews';
import { useTranslation } from 'react-i18next';
import { getData } from 'src/hooks/dataFetcher';

import { Route } from 'react-router-dom';
import './styles.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export default () => {
  const { t } = useTranslation();

  // Method for golden book data
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

      <section className="hero">
          <Background />
          <div className="misc" />
          <Zoom>
              <h1 className="title_homepage">{t('Title.1')}</h1>
          </Zoom>
          <Fade left>
              <Description />
          </Fade>
          <Housing />

          <div className="columns">
              <Roll>
                  <div className="column gold-book-column">
                      {dataLoaded && results.map((result, index) => {
                        if (index === 0) {
                          return (
                              <CustomerReviews
                            key={result.id}
                            comments={result.comments}
                            rate={result.rate}
                            first_name={result.user.first_name}
                            last_name={result.user.last_name}
                              />
                          );
                        }
                      })}

                  </div>
              </Roll>
              <Roll>
                  <div className="column gold-book-column">
                      {
            dataLoaded && results.map((result, index) => {
              if (index === 1) {
                return (
                    <CustomerReviews
                    key={result.id}
                    comments={result.comments}
                    rate={result.rate}
                    first_name={result.user.first_name}
                    last_name={result.user.last_name}
                    />
                );
              }
            })
        }
                  </div>
              </Roll>
              <Roll>
                  <div className="column gold-book-column">
                      {
                      dataLoaded && results.map((result, index) => {
                        if (index === 3) {
                          return (
                              <CustomerReviews
                              key={result.id}
                              comments={result.comments}
                              rate={result.rate}
                              first_name={result.user.first_name}
                              last_name={result.user.last_name}
                              />
                          );
                        }
                      })
                  }

                  </div>
              </Roll>
          </div>

          <Fade bottom>
              <div className="contact-form">
                  <Route exact path="/">
                      <Contact />
                  </Route>
              </div>
          </Fade>

      </section>
  );
};
