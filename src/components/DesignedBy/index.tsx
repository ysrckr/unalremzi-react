import { FC } from 'react';
import styles from './designedBy.module.scss';

interface DesignedByProps {
  author: string;
  authorSite?: string;
}

export const DesignedBy: FC<DesignedByProps> = ({ author, authorSite }) => {
  return (
    <p>
      Designed and Created By{' '}
      <a className={styles.link} href={authorSite ?? ''} target="_blank" rel="noopener noreferrer">
        {author}
      </a>
    </p>
  );
};
