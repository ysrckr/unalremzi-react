import i18n from '../i18n';
import { setLanguage } from '@/stores/UIStore';

export const changeLanguage = (language: string) => {
  setLanguage(language);
  i18n.changeLanguage(language);
};

export const getLanguage = () => {
  return i18n.language;
};
