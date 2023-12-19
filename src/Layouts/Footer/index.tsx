import { CompanyLogo } from '@/components/CompanyLogo';
import { companyLogo } from '@/utils/constants';
import type { FC } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <CompanyLogo src={companyLogo} />
    </footer>
  );
};
