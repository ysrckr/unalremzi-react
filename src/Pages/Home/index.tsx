import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const title = t('title');

  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return <section>home</section>;
};
