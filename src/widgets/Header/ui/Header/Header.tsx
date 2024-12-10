/* eslint-disable i18next/no-literal-string */
import { LangSwitcher } from '@/features/LangSwitcher';
import s from './Header.module.scss';

import { Container } from '@/shared/ui';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s['wrapper']}>
        <span className={s.logo}>React Blog</span>
        <LangSwitcher />
        <ThemeSwitcher />
      </Container>
    </header>
  );
};
