import { CompanyLogo } from '@/components/CompanyLogo';
import { companyLogo } from '@/utils/constants';
import type { FC } from 'react';
import { SocialMedia } from '../../components/SocialMedia';
import styles from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <CompanyLogo src={companyLogo} />
      <section>
        <div>Info</div>
        <p>Copyright</p>
      </section>
      <SocialMedia socialMediaList={[]} />
    </footer>
  );
};
