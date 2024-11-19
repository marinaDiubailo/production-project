import React, { forwardRef } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  color?: ButtonColor;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      variant = 'outline',
      disabled,
      fullWidth,
      size = 'm',
      color = 'normal',
      ...otherProps
    } = props;

    const classNames = clsx(
      className,
      s[variant],
      s[size],
      s[color],
      fullWidth && s['full-width'],
    );

    return (
      <button
        type={'button'}
        className={classNames}
        disabled={disabled}
        ref={ref}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);
