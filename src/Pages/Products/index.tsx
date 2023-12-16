import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProductsProps {}

export const Products: FC<ProductsProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'products' });
  return <section>{t('title')}</section>;
};
