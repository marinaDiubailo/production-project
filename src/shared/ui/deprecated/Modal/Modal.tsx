import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { isClosing, isMounted, close } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls['is-closing']]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [
                    className,
                    theme,
                    'app-modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
