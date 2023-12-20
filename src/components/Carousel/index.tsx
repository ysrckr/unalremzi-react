import { FC } from 'react';
import type { Image } from '@/types/Images';
import styles from './carousel.module.scss';

interface CarouselProps {
  images: Image[];
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  if (!images.length) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.innerCarousel}>
        {images.map(image => (
          <div className={styles.imageBlock} key={image.alt}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.carouselFooter}>
        <div className={styles.buttonGroup}>buttons</div>
        <p>count</p>
      </div>
    </div>
  );
};
