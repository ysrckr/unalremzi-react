import { devtools } from 'valtio/utils';
import { proxy } from 'valtio';

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

export const setLanguage = (lang: string) => {
  UIStore.lang = lang;
};

devtools(UIStore, 'UIStore');
