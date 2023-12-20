import { assetsToSource } from '@/utils/fileToSource';
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
    <section>
      <div className={styles.container}>

      
        <img src={assetsToSource('images/suit1.jpeg')} width={1000} className={styles.mask}/>
      </div>
    </section>
  );
};
