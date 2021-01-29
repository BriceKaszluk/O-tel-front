/* eslint-disable linebreak-style */
import React, {useState} from 'react';
import Background from 'src/components/Background';
import Calendar from 'src/components/Calendar';
import Contact from 'src/components/Contact';
import HousingOne from 'src/components/HousingOne';
import HousingTwo from 'src/components/HousingTwo';
import HousingThree from 'src/components/HousingThree'
import CustomerReviews from 'src/components/CustomerReviews';
import { useTranslation } from 'react-i18next';
import {getData} from 'src/hooks/dataFetcher'

import { Route, Link } from 'react-router-dom';
import './styles.scss';

export default () => {
  const { t } = useTranslation();

// Method for golden book data
    const [results, setResults] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)

    const dispatch = async () => {

        const result =  await getData.getAllNotices();
        if (result[0].data !== undefined) {
            const data = result[0].data
            setResults(data)
            setDataLoaded(true)
        }
    }

    dispatch()

  return (

    <section className="hero is-fullheight">
      <Background />

      <h1>{t('Title.1')}</h1>
      <h2>{t('datepicker.1')}</h2>
   

      <div className="calendar">
        <Calendar />
      </div>


      <div className="block">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </div>

      <div className="columns">
        <div className="column home-column">
          <HousingOne />
        </div>
        <div className="column home-column">
          <HousingTwo />
        </div>
        <div className="column home-column">
          <HousingThree />
        </div>
      </div>

      <div className="columns">
        <div className="column gold-book-column">
          

        {
            dataLoaded && results.map((result, index) => {
                if (index === 0){
                    return <CustomerReviews 
                    key={result.id}
                    comments={result.comments}
                    rate={result.rate}
                    first_name={result.user.first_name}
                    last_name={result.user.last_name} />
                }
            }) 
        }
                
          <Link to="/livre_d_or" className="button is-primary">Afficher Plus</Link>
        </div>


        <div className="column gold-book-column">
        {
            dataLoaded && results.map((result, index) => {
                if (index === 1){
                    return <CustomerReviews 
                    key={result.id}
                    comments={result.comments}
                    rate={result.rate}
                    first_name={result.user.first_name}
                    last_name={result.user.last_name} />
                }
            }) 
        }
          <Link to="/livre_d_or" className="button is-primary">Afficher Plus</Link>
        </div>

        
        <div className="column gold-book-column">
        {
            dataLoaded && results.map((result, index) => {
                if (index === 3){
                    return <CustomerReviews 
                    key={result.id}
                    comments={result.comments}
                    rate={result.rate}
                    first_name={result.user.first_name}
                    last_name={result.user.last_name} />
                }
            }) 
        }
          <Link to="/livre_d_or" className="button is-primary">Afficher Plus</Link>
        </div>
        
      </div>

      <div className="contact-form">
        <Route exact path="/">
          <Contact />
        </Route>
      </div>

    </section>
  );
};
