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
    <div className="languages__component">
      <div className="dropdown-trigger">
        <button type="button" className="button is-light button__language" onClick={() => handleClick('en')}>
          English
        </button>
        <button type="button" className="button is-light button__language" onClick={() => handleClick('fr')}>
          Français
        </button>
      </div>
      <div>
        <h3 className="newTitle">{t('Title.1')}</h3>
        <h3>{t('datepicker.1')}</h3>
      </div>
    </div>
  );
};
