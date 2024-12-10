import React from 'react';

import { clsx } from 'clsx';

import s from './Spinner.module.scss';

export const Spinner: React.FC<React.ComponentProps<'div'>> = ({
  className,
  ...rest
}) => {
  return <div className={clsx(s.spinner, className)} {...rest}></div>;
};
