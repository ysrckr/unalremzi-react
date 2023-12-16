import { proxy } from 'valtio';

interface UIState {
  isMobileMenuOpen: boolean;
}

const initalState: UIState = {
  isMobileMenuOpen: false,
};

export const UIStore = proxy<UIState>({
    ...initalState,
});

export const toggleMobileMenu = () => {
  UIStore.isMobileMenuOpen = !UIStore.isMobileMenuOpen;
};
