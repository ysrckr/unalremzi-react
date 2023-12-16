import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ContactProps {}

export const Contact: FC<ContactProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });
  return <section>{t('title')}</section>;
};
