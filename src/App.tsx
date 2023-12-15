import { changeLanguage } from './utils/localization';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <>
      {t('welcome')}
      <button onClick={() => changeLanguage('tr')}>Dil tr</button>
      <button onClick={() => changeLanguage('en')}>Dil en</button>
    </>
  );
}

export default App;
