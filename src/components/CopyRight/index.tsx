import { FC } from 'react';

interface CopyRightProps {
  companyName: string;
}

export const CopyRight: FC<CopyRightProps> = ({ companyName }) => {
  const year = new Date().getFullYear();
  return (
    <p>
      {year} © {companyName}. All rights reserved.
    </p>
  );
};
