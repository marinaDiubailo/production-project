import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
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
    color?: ButtonColor;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            disabled,
            fullWidth,
            size = 'm',
            addonLeft,
            addonRight,
            color = 'normal',
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.disabled]: disabled,
            [cls['full-width']]: fullWidth,
            [cls['with-addon']]: Boolean(addonLeft) || Boolean(addonRight),
        };

        const additionalClasses = [
            className,
            cls[variant],
            cls[size],
            cls[color],
        ];

        return (
            <button
                type="button"
                className={classNames(cls.button, mods, additionalClasses)}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
                disabled={disabled}
                ref={ref}
            >
                <div className={cls['addon-left']}>{addonLeft}</div>
                {children}
                <div className={cls['addon-right']}>{addonRight}</div>
            </button>
        );
    },
);
