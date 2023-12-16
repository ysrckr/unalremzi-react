import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });
  return <section>{t('title')}</section>;
};
