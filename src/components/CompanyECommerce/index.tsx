import { FC } from 'react';
import styles from './companyECommerce.module.scss';

interface CompanyECommerceProps {
  title: string;
  link: string;
  websiteName: string;
}

export const CompanyECommerce: FC<CompanyECommerceProps> = ({ title, link, websiteName }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {websiteName}
      </a>
    </section>
  );
};
