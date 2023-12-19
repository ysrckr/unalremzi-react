import { assetsToSource } from '@/utils/fileToSource';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const title = t('title');
  const image = assetsToSource('images/suit1.jpeg');
  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return (
    <section>
      <img src={image} alt="iamge" />
    </section>
  );
};
