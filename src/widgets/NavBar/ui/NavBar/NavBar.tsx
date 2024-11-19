/* eslint-disable indent */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button, HStack } from '@/shared/ui';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';

import cls from './NavBar.module.scss';

interface NavbarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation('translation');
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const mainClass = cls['navbar-redesigned'];

  if (authData) {
    return (
      <header className={classNames(mainClass, {}, [className])}>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <Button variant="clear" className={cls.links} onClick={onShowModal}>
        {t('Log in')}
      </Button>

      {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
    </header>
  );
});
