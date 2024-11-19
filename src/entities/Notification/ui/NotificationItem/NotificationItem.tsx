import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, Text } from '@/shared/ui';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card className={classNames(cls.notification, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
