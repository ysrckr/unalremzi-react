import { CompanyLogo } from '@/components/CompanyLogo';
import { CopyRight } from '@/components/CopyRight';
import { DesignedBy } from '@/components/DesignedBy';
import { socialMediaList } from '@/data/socialMediaList';
import { companyLogo } from '@/utils/constants';
import type { FC } from 'react';
import { SocialMedia } from '../../components/SocialMedia';
import styles from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <CompanyLogo src={companyLogo} />
        <SocialMedia socialMediaList={socialMediaList} />
        <DesignedBy author="Yasar Cakir" />
      </section>
      <CopyRight companyName="UnalRemzi" />
    </footer>
  );
};
