import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import type { Image } from '@/types/Images';
import cn from 'classnames';
import styles from './carousel.module.scss';

interface CarouselProps {
  images: Image[];
}
type Direction = 0 | 1 | -1;
export const Carousel: FC<CarouselProps> = ({ images }) => {
  const imageCount = images.length;
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<Direction>(0);

  const handleNextImage = () => {
    setDirection(1);
    if (currentImage === imageCount - 1) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
  };

  const handlePrevImage = () => {
    setDirection(-1);
    if (currentImage === 0) {
      setCurrentImage(imageCount - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  };

  const imageCounter = `${currentImage + 1}/${imageCount}`;

  const variants = {
    initial: (direction: Direction) => ({
      maskPosition: direction < 0 ? '0 150%' : '0 -50%',
    }),
    animate: {
      maskPosition: '0 50%',
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: Direction) => ({
      maskPosition: direction < 0 ? '0 -50%' : '0 150%',
    }),
  };

  if (!images.length) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.innerCarousel}>
        <AnimatePresence
          initial={false}
          custom={direction}
        >
          <motion.img
            key={images[currentImage].src + currentImage}
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
          <button
            onClick={handlePrevImage}
            className={styles.controlButton}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className={styles.controlButton}
          >
            <FaArrowRight />
          </button>
        </div>
        <p className={styles.imageCounter}>{imageCounter}</p>
      </div>
    </div>
  );
};
