import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

interface UIState {
  isMobileMenuOpen: boolean;
  lang: string;
}

const initalState: UIState = {
  isMobileMenuOpen: false,
  lang: 'en',
};

export const UIStore = proxy<UIState>({
  ...initalState,
});

export const toggleMobileMenu = () => {
  UIStore.isMobileMenuOpen = !UIStore.isMobileMenuOpen;
};

export const closeMobileMenu = () => {
  UIStore.isMobileMenuOpen = false;
};

export const setLanguage = (lang: string) => {
  UIStore.lang = lang;
};

devtools(UIStore, 'UIStore');
