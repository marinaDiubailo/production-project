import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    disabled?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        disabled,
        fullWidth,
        size = 'm',
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls['full-width']]: fullWidth,
        [cls['with-addon']]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            disabled={disabled}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            <div className={cls['addon-left']}>{addonLeft}</div>
            {children}
            <div className={cls['addon-right']}>{addonRight}</div>
        </button>
    );
});
