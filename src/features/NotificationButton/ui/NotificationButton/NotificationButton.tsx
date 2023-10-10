import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popup';
import { Icon } from '@/shared/ui/Icon';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };

    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
        >
            <Icon
                Svg={NotificationIcon}
                inverted
            />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}

                <Drawer
                    onClose={onCloseDrawer}
                    isOpen={isOpen}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
