import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import cls from './Avatar.module.scss';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border='50%'
        />
    );

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            className={classNames(cls.avatar, {}, [className])}
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            alt={alt}
            style={styles}
        />
    );
});
