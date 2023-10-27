import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls['justify-start'],
    end: cls['justify-end'],
    center: cls['justify-center'],
    between: cls['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls['align-start'],
    end: cls['align-end'],
    center: cls['align-center'],
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls['direction-row'],
    column: cls['direction-column'],
};

const gapClasses: Record<FlexGap, string> = {
    4: cls['gap-4'],
    8: cls['gap-8'],
    16: cls['gap-16'],
    24: cls['gap-24'],
    32: cls['gap-32'],
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.flex, mods, classes)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </div>
    );
};
