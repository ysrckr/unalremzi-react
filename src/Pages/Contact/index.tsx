import { FC, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

interface ContactProps {}

export const Contact: FC<ContactProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });
  const title = t('title');
  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return <section>{t('title')}</section>;
};
