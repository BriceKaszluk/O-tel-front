import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();
  return (
      <div>
          <div className="block">{t('description.1')}</div>
          <div className="block">{t('description.2')}</div>
      </div>
  );
};
