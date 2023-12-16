import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', {keyPrefix: 'home'});
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
};
