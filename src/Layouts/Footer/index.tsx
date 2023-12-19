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
      <CompanyLogo src={companyLogo} />
      <SocialMedia socialMediaList={socialMediaList} />
      <section>
        <DesignedBy author="Yasar Cakir" />
        <CopyRight companyName="UnalRemzi" />
      </section>
    </footer>
  );
};
