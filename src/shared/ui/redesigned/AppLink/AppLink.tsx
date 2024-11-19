import { memo } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import s from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red';

type AppLinkProps = {
  variant?: AppLinkVariant;
  activeClassName?: string;
} & LinkProps;

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(className, isActive && activeClassName, s[variant])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
