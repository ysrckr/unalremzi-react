export interface NavigationItem {
  key: string;
  url: '/' | 'about' | 'products' | 'contact';
}

export const navigationItems: NavigationItem[] = [
  {
    key: 'navigation.about',
    url: 'about',
  },
  {
    key: 'navigation.products',
    url: 'products',
  },
  {
    key: 'navigation.contact',
    url: 'contact',
  },
];
