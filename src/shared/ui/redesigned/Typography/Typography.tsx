import type { PolymorphProps } from '@/shared/types/polymorph';
import React from 'react';
import clsx from 'clsx';
import s from './Typography.module.scss';

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  regularText12: 'regular-text-12',
  regularText16: 'regular-text-16',
} as const;

export type TypographyProps = {
  variant?: (typeof variants)[keyof typeof variants];
};

type TagComponent = <T extends React.ElementType>(
  props: PolymorphProps<T, TypographyProps>,
) => React.ReactNode;

export const Typography: TagComponent = <T extends React.ElementType = 'p'>(
  props: PolymorphProps<T>,
) => {
  const {
    as: Component = 'p',
    className,
    children,
    variant = variants.regularText16,
    ...rest
  } = props;
  return (
    <Component className={clsx(s.typography, s[variant], className)} {...rest}>
      {children}
    </Component>
  );
};
