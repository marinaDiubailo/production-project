import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round-12' | 'round-20' | 'round-40';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap-0',
    8: 'gap-8',
    16: 'gap-16',
    24: 'gap-24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        max,
        padding = '8',
        variant = 'normal',
        border = 'round-12',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    const additionalClasses = [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
    ];

    return (
        <div
            className={classNames(
                cls.card,
                { [cls.max]: max },
                additionalClasses,
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </div>
    );
});
