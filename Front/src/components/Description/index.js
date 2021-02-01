import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();
  return (
      <div className="block">{t('description.1')}</div>
  );
};
