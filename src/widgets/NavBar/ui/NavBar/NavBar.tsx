/* eslint-disable indent */
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';

import { Button, Container } from '@/shared/ui';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import clsx from 'clsx';

import s from './NavBar.module.scss';
import { getRouteAbout, getRouteArticles } from '@/shared/const/router';

interface NavbarProps {
  className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation('header');
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  let actions;

  if (authData) {
    actions = (
      <div className={s['actions-redesigned']}>
        <NotificationButton />
        <AvatarDropdown />
      </div>
    );
  } else {
    actions = (
      <div className={s['actions-redesigned']}>
        <Button onClick={onShowModal}>{t('Log in')}</Button>
        {isAuthOpen && (
          <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
        )}
      </div>
    );
  }

  return (
    <div className={clsx(s['navbar-redesigned'], [className])}>
      <Container as={'nav'} className={s['navbar-container']}>
        <ul className={s['links-container']}>
          <li>
            <NavLink to={getRouteAbout()} className={s['link-redesigned']}>
              {t('about')}{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to={getRouteArticles()} className={s['link-redesigned']}>
              {t('articles')}
            </NavLink>
          </li>
        </ul>
        {actions}
      </Container>
    </div>
  );
};
