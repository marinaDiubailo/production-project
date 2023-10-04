import { memo, ReactNode } from 'react';
// import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    // const {theme} = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
