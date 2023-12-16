import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { closeMobileMenu } from '@/stores/UIStore';
import styles from './companyLogo.module.scss';

interface CompanyLogoProps {
  src: string;
}

export const CompanyLogo: FC<CompanyLogoProps> = ({ src }) => {
  return (
    <Link to="/" onClick={() => closeMobileMenu()}>
      <img src={src} alt="Company Logo" className={styles.image} />
    </Link>
  );
};
