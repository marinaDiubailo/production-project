import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { Modal } from 'shared/ui/Modal/Modal';

import cls from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthOpen}
                onClose={onToggleModal}
            >
                {''}
            </Modal>
        </div>
    );
};
