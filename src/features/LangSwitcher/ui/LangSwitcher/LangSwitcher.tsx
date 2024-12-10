import { useTranslation } from 'react-i18next';
import { Icon } from '@/shared/ui';
import Globe from '@/shared/assets/icons/redesigned/globe.svg';
import s from './LangSwitcher.module.scss';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation('header');

  const toggleHandler = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button onClick={toggleHandler} className={s.button}>
      <Icon Svg={Globe} width={16} height={16} aria-hidden />
      {t('lang')}
    </button>
  );
};
