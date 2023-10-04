/* eslint-disable indent */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
// import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getUserAuthData,
    getIsAdmin,
    userActions,
    getIsManager,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavbarProps) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { t } = useTranslation('translation');
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    title={t('Front-end blog')}
                    className={cls['app-name']}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create new')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
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
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            {isAuthOpen && (
                <LoginModal
                    isOpen={isAuthOpen}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
