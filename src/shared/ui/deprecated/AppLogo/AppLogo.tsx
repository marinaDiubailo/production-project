import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLogoSvg from '../../../assets/icons/redesigned/react.svg';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls['app-logo-wrapper'], {}, [className])}
        >
            <div className={cls['gradient-big']} />
            <div className={cls['gradient-small']} />
            <AppLogoSvg className={cls['app-logo']} />
        </HStack>
    );
});
