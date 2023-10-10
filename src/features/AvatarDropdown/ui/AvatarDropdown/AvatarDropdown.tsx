/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popup';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getIsAdmin,
    userActions,
    getIsManager,
    getUserAuthData,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

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

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction='bottom left'
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Admin panel'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Log out'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar
                    size={30}
                    src={authData.avatar}
                />
            }
        />
    );
});
