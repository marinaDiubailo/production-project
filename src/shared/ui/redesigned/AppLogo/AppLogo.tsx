import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLogoSvg from '../../../assets/icons/redesigned/react.svg';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls['app-logo-wrapper'], {}, [className])}
    >
      <AppLogoSvg
        width={size}
        height={size}
        color="black"
        className={cls['app-logo']}
      />
      <div className={cls['gradient-big']} />
      <div className={cls['gradient-small']} />
    </HStack>
  );
});
