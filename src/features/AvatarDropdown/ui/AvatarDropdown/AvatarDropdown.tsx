/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar, Dropdown } from '@/shared/ui';

import {
  getIsAdmin,
  userActions,
  getIsManager,
  getUserAuthData,
} from '@/entities/User';
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsAdmin);
  const isManager = useSelector(getIsManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) return null;

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Admin panel'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Log out'),
      onClick: onLogout,
    },
    {
      content: t('Settings'),
      href: getRouteSettings(),
    },
  ];

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={items}
      trigger={<Avatar size={40} src={authData.avatar} />}
    />
  );
});
