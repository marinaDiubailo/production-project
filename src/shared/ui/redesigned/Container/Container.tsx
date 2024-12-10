import type { PolymorphProps } from '@/shared/types/polymorph';
import React from 'react';
import clsx from 'clsx';
import s from './Container.module.scss';

type TagComponent = <T extends React.ElementType>(
  props: PolymorphProps<T, {}>,
) => React.ReactNode;

export const Container: TagComponent = <T extends React.ElementType = 'div'>(
  props: PolymorphProps<T>,
) => {
  const { as: Component = 'div', className, children, ...rest } = props;
  return (
    <Component className={clsx(s.container, className)} {...rest}>
      {children}
    </Component>
  );
};
