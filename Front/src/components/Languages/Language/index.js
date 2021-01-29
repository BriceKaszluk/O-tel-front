import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.scss';

class Language extends Component {
  constructor() {
    super();
    this.state = {
      language: 'fr',
    };
  }

  changeLanguage = () => {
    this.setState({
      language: 'en',
    });
  };

  render() {
    const { language } = this.state;
    return (
        <div>
            <div className="button__language">
                <p>{language === 'fr' ? 'titre' : 'title'}</p>
                <button type="button" onClick={this.changeLanguage}>Change language</button>
            </div>
        </div>
    );
  }
}

export default Language;
