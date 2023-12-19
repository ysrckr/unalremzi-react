import { CompanyLogo } from '@/components/CompanyLogo';
import type { FC } from 'react';
import { companyLogo } from '@/utils/constants';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return <footer>
    <CompanyLogo src={companyLogo} />
  </footer>;
};
