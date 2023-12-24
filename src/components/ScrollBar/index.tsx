import { FC } from 'react';
import styles from './scrollbar.module.scss';

interface ScrollBarProps {}

export const ScrollBar: FC<ScrollBarProps> = () => {
  return <div className={styles.scrollbar}></div>;
};
