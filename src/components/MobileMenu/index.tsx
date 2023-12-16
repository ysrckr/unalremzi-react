import type { FC } from 'react';
import { Navigation } from '../Navigation';
import styles from './mobileMenu.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.mobileMenu}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation device="mobile" />
      </motion.div>
    </AnimatePresence>
  );
};
