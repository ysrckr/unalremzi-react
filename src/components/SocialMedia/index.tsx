import { FC } from 'react';
import { SocialMedia as SocialMediaType } from '@/types/SocialMedia';

interface SocialMediaProps {
  socialMediaList: SocialMediaType[];
}

export const SocialMedia: FC<SocialMediaProps> = ({ socialMediaList }) => {
  if (!socialMediaList?.length) return null;
  <section>
    {socialMediaList.map(({ name, url, icon }) => (
      <a href={url} key={name}>
        <img src={icon} alt={name} />
      </a>
    ))}
  </section>;
};
