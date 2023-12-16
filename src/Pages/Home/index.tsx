import type { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1>{t('title')}</h1>
      <p>hwdswdc</p>
      <div>fgdfgdfgdf</div>
    </motion.section>
  );
};
