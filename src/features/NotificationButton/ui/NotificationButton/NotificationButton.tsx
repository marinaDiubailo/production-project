import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Popover } from 'shared/ui/Popup';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction='bottom left'
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={NotificationIcon}
                        inverted
                    />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
