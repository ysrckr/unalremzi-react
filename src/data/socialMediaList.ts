import { SocialMedia } from '@/types/SocialMedia';
import { assetsToSource } from '@/utils/fileToSource';

export const socialMediaList: SocialMedia[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/eduardoarandah/',
    icon: assetsToSource(`icons/social/instagram.svg`),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/eduardoarandah',
    icon: assetsToSource(`icons/social/facebook.svg`),
  },
];
