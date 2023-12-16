import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import styles from './companyLogo.module.scss';

interface CompanyLogoProps {
  src: string;
}

export const CompanyLogo: FC<CompanyLogoProps> = ({ src }) => {
  return (
    <Link to="/">
      <img src={src} alt="Company Logo" className={styles.image} />
    </Link>
  );
};
