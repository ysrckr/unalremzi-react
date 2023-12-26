import { Carousel } from '@/components/Carousel';
import { CompanyECommerce } from '@/components/CompanyECommerce';
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
    <>
      <section>
        <Carousel images={carouselImages} />
      </section>
      <section className={styles.sectionWithBackground}>
        <CompanyECommerce
          title="THE MOST PRESTIGIOUS MEN'S CLOTHING BRAND"
          link="https://regularsuit.com"
          websiteName="regular suit"
        />
      </section>
    </>
  );
};
