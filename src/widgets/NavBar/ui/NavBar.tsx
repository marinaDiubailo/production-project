import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};
