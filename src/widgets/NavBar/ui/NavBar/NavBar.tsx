/* eslint-disable indent */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';

import cls from './NavBar.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

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

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls['navbar-redesigned'],
        off: () => cls.navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(mainClass, {}, [className])}>
                        <Text
                            title={t('Front-end blog')}
                            className={cls['app-name']}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                        >
                            {t('Create new')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Log in')}
                    </ButtonDeprecated>
                }
                on={
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Log in')}
                    </Button>
                }
            />

            {isAuthOpen && (
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            )}
        </header>
    );
});
