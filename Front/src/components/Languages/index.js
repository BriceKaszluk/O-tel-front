import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
      <div className="Languages">
          <div className="dropdown-trigger">
              <button className="button is-light" onClick={() => handleClick('en')}>
                  English
              </button>
              <button className="button is-light" onClick={() => handleClick('fr')}>
                  Français
              </button>
          </div>
      </div>
  );
}
