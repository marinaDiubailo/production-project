import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleHandler = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button variant="clear" onClick={toggleHandler}>
      {t('Язык')}
    </Button>
  );
});
