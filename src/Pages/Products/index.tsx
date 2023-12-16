import { FC, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

interface ProductsProps {}

export const Products: FC<ProductsProps> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'products' });
  const title = t('title');
  useEffect(() => {
    document.title = `UnalRemzi | ${title}`;
  }, []);
  return <section>{t('title')}</section>;
};
