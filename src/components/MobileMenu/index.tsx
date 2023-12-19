import { socialMediaList } from '@/data/socialMediaList';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Navigation } from '../Navigation';
import { SocialMedia } from '../SocialMedia';
import styles from './mobileMenu.module.scss';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };
  return (
    <motion.div
      className={styles.mobileMenu}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ damping: 300 }}
    >
      <Navigation device="mobile" />
      <SocialMedia socialMediaList={socialMediaList} />
    </motion.div>
  );
};
