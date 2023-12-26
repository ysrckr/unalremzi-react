import { FC } from 'react';
import styles from './scrollbar.module.scss';

interface ScrollBarProps {
  scrollTop: number;
}

export const ScrollBar: FC<ScrollBarProps> = ({ scrollTop }) => {
  const glowStyle = {
    opacity: scrollTop > 0 ? 1 : 0,
    height: `${(scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
  };

  return (
    <div className={styles.scrollbar}>
      <div
        className={styles.glow}
        style={glowStyle}
      ></div>
    </div>
  );
};
