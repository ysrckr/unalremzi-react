import { CompanyLogo } from '@/components/CompanyLogo';
import { CopyRight } from '@/components/CopyRight';
import { DesignedBy } from '@/components/DesignedBy';
import { SocialMedia } from '@/components/SocialMedia';
import { socialMediaList } from '@/data/socialMediaList';
import { companyLogo } from '@/utils/constants';
import type { FC } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <CompanyLogo src={companyLogo} />
      <div className={styles.socialMedia}>
        <SocialMedia socialMediaList={socialMediaList} />
      </div>
      <DesignedBy author="Yasar Cakir" />
      <CopyRight companyName="UnalRemzi" />
    </footer>
  );
};
