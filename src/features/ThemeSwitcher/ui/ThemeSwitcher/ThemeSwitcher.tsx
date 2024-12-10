import { useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/redesigned/theme.svg';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui';
import { clsx } from 'clsx';
import s from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Icon
      className={clsx(theme === 'app-light-theme' && s.light)}
      Svg={ThemeIcon}
      clickable
      onClick={onToggleHandler}
      width={20}
      height={20}
    />
  );
};
