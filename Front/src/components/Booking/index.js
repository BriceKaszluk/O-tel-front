import React from 'react';
import { Link } from 'react-router-dom';

// components
import Calendar from 'src/components/Calendar';

// import
import './styles.scss';

export default () => (
    <div>
        <h1>Réservation</h1>

        <img
          className="fit-picture"
          src=""
          alt="logement"
        />

        <form>
            {/* FIRST NAME */}
            <div className="field">
                <label className="label">nom</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help">This is a help text</p>
            </div>
            {/* LAST NAME */}
            <div className="field">
                <label className="label">prénom</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
                <p className="help">This is a help text</p>
            </div>
            {/* EMAIL */}
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
            </div>
            {/* PHONE NUMBER */}
            <div className="field">
                <label className="label">Tel</label>
                <div className="control">
                    <input className="input" type="tel" placeholder="+336-84-56-32" />
                </div>
            </div>
            {/* BEGIN AND END DATE */}
            <Calendar />
            {/* MORE INFORMATIONS */}
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="informations complémentaires" />
                </div>
            </div>
            {/* TERMS AND CONDITIONS CHECKBOX */}
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <div>
                            <input type="checkbox" />
                            <span> I agree to the</span>
                            <Link to="/logement2" className="terms_and_conditions">terms and conditions</Link>
                        </div>
                    </label>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
);

// TODO: configure link terms and conditions
