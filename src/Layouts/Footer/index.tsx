import { CompanyLogo } from '@/components/CompanyLogo';
import type { FC } from 'react';
import { companyLogo } from '@/utils/constants';
import styles from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return <footer className={styles.footer}>
    <CompanyLogo src={companyLogo} />
  </footer>;
};
