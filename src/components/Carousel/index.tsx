import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import type { Image } from '@/types/Images';
import cn from 'classnames';
import styles from './carousel.module.scss';

interface CarouselProps {
  images: Image[];
}
type Direction = 'left' | 'right';
export const Carousel: FC<CarouselProps> = ({ images }) => {
  const imageCount = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<Direction>('right');

  const handleNextImage = () => {
    setDirection('right');
    if (currentImage === imageCount - 1) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
  };

  const handlePrevImage = () => {
    setDirection('left');
    if (currentImage === 0) {
      setCurrentImage(imageCount - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  };

  const imageCounter = `${currentImage + 1}/${imageCount}`;

  const variants = {
    initial: (direction: Direction) => ({
      maskSize: direction === 'left' ? '50% 50%' : '50% 500%',
    }),
    animate: {
      maskSize: '200% 200%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: (direction: Direction) => ({
      maskSize: direction === 'left' ? '50% 100%' : '50% 100%',
    }),
  };

  if (!images.length) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.innerCarousel}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[currentImage].src}
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className={cn(styles.image, styles.mask)}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
          />
        </AnimatePresence>
      </div>
      <div className={styles.carouselFooter}>
        <div className={styles.carouselControlGroup}>
          <button onClick={handleNextImage} className={styles.controlButton}>
            <FaArrowLeft />
          </button>
          <button onClick={handlePrevImage} className={styles.controlButton}>
            <FaArrowRight />
          </button>
        </div>
        <p className={styles.imageCounter}>{imageCounter}</p>
      </div>
    </div>
  );
};
