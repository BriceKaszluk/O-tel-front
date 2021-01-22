import React from 'react';
import Nav from 'src/components/Nav';

import './styles.scss';

export default () => (
    <container className="profil__container">
        <title>Profil</title>
        <Nav />
        <div className="profil__content">
            <section className="profil__section1">
                <div className="profil__main__head">
                    why not.
                </div>
                <div className="profil__main__body">

                    <span className="label">
                        g
                    </span>

                </div>
            </section>
            <section className="profil__section2">
                <div>p</div>
                <div>p</div>
            </section>
        </div>
    </container>
);
