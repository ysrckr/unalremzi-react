import type { NavigationItem as NavItem } from '@/data/navigationItems';
import { closeMobileMenu } from '@/stores/UIStore';
import { Link } from '@tanstack/react-router';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './navigationItem.module.scss';

interface NavigationItemProps {
  url: NavItem['url'];
  label: NavItem['key'];
}

export const NavigationItem: FC<NavigationItemProps> = ({ url, label }) => {
  const { t } = useTranslation();
  return (
    <li
      className={styles.item}
      onClick={() => closeMobileMenu()}
    >
      <Link
        to={url}
        className={styles.link}
      >
        {t(label)}
      </Link>
    </li>
  );
};
