import { socialMediaList } from '@/data/socialMediaList';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Navigation } from '../Navigation';
import { SocialMedia } from '../SocialMedia';
import styles from './mobileMenu.module.scss';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
  const variants = {
    open: { opacity: 1, borderRadius: '0%', x: 0, y: 0 },
    closed: { opacity: 0, borderRadius: '50%', x: '100%', y: '-100%' },
  };
  return (
    <motion.div
      className={styles.mobileMenu}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ damping: 300, duration: 0.5 }}
    >
      <Navigation device="mobile" />
      <SocialMedia socialMediaList={socialMediaList} />
    </motion.div>
  );
};
