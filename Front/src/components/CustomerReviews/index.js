import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import './styles.scss';

export default (props) => {
  const history = useHistory();

  return (
      <div className="box golden-box">
          <div className="card-content ">
              <div className="card-title">
                  <p className="title is-6">
                      {props.first_name} {props.last_name}
                  </p>
                  <p className="subtitle is-7">
                      {props.rate}/5
                  </p>
              </div>
              <div className="has-text-centered">
                  <p className="notification ">
                      {props.comments}
                  </p>
              </div>
              {
                history.location.pathname === '/'
                    && (
                    <div className="">
                        <Link to="/livre_d_or" className="button is-primary is-small is-rounded">Afficher Plus</Link>
                    </div>
                    )
                }

          </div>
      </div>
  );
};
