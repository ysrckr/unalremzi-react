import { FC, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });
  const title = t('title');
  
  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return <section>{t('title')}</section>;
};
