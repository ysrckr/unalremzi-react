import { changeLanguage } from '@/utils/localization';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const title = t('title');

  useEffect(() => {
    document.title = `UnalRemzi - ${title}`;
  }, []);
  return (
    <section>
      <h1>{t('title')}</h1>
      <p>hwdswdc</p>
      <div>fgdfgdfgdf</div>
      <button onClick={() => changeLanguage('tr')}>TR</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </section>
  );
};
