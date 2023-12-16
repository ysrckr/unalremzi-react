import type { FC } from 'react';
import { Navigation } from '../Navigation';
import styles from './mobileMenu.module.scss';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
  return (
    <div className={styles.menu}>
      <Navigation device="mobile" />
    </div>
  );
};
