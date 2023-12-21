import { FC, useState } from 'react';

import type { Image } from '@/types/Images';
import cn from 'classnames';
import styles from './carousel.module.scss';

interface CarouselProps {
  images: Image[];
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  const imageCount = images.length;
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    if (currentImage === imageCount - 1) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
  };

  const handlePrevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(imageCount - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  };

  const imageCounter = `${currentImage + 1}/${imageCount}`;

  if (!images.length) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.innerCarousel}>
        <img
          key={images[currentImage].src}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className={styles.image}
        />
      </div>
      <div className={styles.carouselFooter}>
        <div className={styles.carouselControlGroup}>
          <button onClick={handleNextImage}>ileri</button>
          <button onClick={handlePrevImage}>geri</button>
        </div>
        <p className={cn(styles.imageCounter, styles.mask)}>{imageCounter}</p>
      </div>
    </div>
  );
};
