import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;
  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
});
