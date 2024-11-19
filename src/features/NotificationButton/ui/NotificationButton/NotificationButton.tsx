import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assets/icons/redesigned/notification.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';
import { Drawer, Icon, Popover } from '@/shared/ui';

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
    <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames('', {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}

        <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
