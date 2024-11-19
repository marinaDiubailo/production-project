import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: T;
  onTabClick: (value: T) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandler = useCallback(
    (value: T) => () => {
      onTabClick(value);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandler(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
