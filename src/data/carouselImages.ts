import { Image } from '@/types/Images';
import { assetsToSource } from '@/utils/fileToSource';

export const carouselImages: Image[] = [
  {
    src: assetsToSource('images/suit1.jpeg'),
    alt: 'suit1',
  },
  {
    src: assetsToSource('images/suit2.jpg'),
    alt: 'suit2',
  },
  {
    src: assetsToSource('images/suit3.jpeg'),
    alt: 'suit3',
  },
];
