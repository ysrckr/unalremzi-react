import { SocialMedia as SocialMediaType } from '@/types/SocialMedia';
import { FC } from 'react';
import styles from './socialMedia.module.scss';

interface SocialMediaProps {
  socialMediaList: SocialMediaType[];
}

export const SocialMedia: FC<SocialMediaProps> = ({ socialMediaList }) => {
  if (!socialMediaList?.length) return null;
  return (
    <section className={styles.socialMedia}>
      {socialMediaList.map(({ name, url, icon }) => (
        <a href={url} key={name} className={styles.link} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={name} className={styles.icon} />
        </a>
      ))}
    </section>
  );
};
