import i18n from '../i18n';


export interface NavigationItem {
  label: string;
  url: '/' | 'about' | 'products' | 'contact-us';
}

export const navigationItems: NavigationItem[] = [
 
  {
    label: i18n.t('navigation.about'),
    url: 'about',
  },
  {
    label: i18n.t('navigation.products'),
    url: 'products',
  },
  {
    label: i18n.t('navigation.contactUs'),
    url: 'contact-us',
  },
];