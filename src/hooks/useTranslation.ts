import { useApp } from '../context/AppContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useApp();
  return translations[language];
};