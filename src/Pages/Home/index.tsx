import { Carousel } from '@/components/Carousel';
import { carouselImages } from '@/data/carouselImages';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const title = t('title');

  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return (
    <section className={styles.section} >
      <Carousel images={carouselImages} />
    </section>
  );
};
