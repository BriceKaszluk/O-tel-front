import React from 'react';
import Background from 'src/components/Background';
import Nav from 'src/components/Nav';

import './styles.scss';

export default () => (
  <container>
    <Nav />
    <div>
      <section className="section">
        <div className="profil__head">

          <Background />

        </div>
        <div className="card">

          <span className="label">
            Formulaire de contact
          </span>

        </div>
      </section>
      <section className="section">p</section>
    </div>
  </container>
);
