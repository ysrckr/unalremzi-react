import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './companyECommerce.module.scss';

interface CompanyECommerceProps {
  title: string;
  link: string;
  websiteName: string;
}

export const CompanyECommerce: FC<CompanyECommerceProps> = ({ title, link, websiteName }) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
      </motion.h2>

      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {websiteName}
      </motion.a>
    </div>
  );
};
